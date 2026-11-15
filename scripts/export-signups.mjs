// Exports the launch list (checklist 05) to exports/signups-YYYY-MM-DD.csv,
// which git ignores because it holds emails. Reads the live D1 database, so
// run `npx wrangler login` once first. `--local` reads the `npm run cf:dev`
// database instead.
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const wrangler = fileURLToPath(new URL("../node_modules/wrangler/bin/wrangler.js", import.meta.url));
const target = process.argv.includes("--local") ? "--local" : "--remote";
const sql = "SELECT email, utm_source, referrer, page, ideas, created_at FROM signups ORDER BY created_at";

// Runs wrangler through node directly, so no shell can split or mangle the SQL.
const out = execFileSync(
  process.execPath,
  [wrangler, "d1", "execute", "DB", target, "--json", "--command", sql],
  { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] },
);
const rows = JSON.parse(out)[0].results;

const columns = ["email", "utm_source", "referrer", "page", "ideas", "created_at"];
const cell = (value) => {
  let s = value == null ? "" : String(value);
  // Spreadsheets run cells that start with these as formulas; a tagged link could carry one.
  if (/^[=+\-@]/.test(s)) s = `'${s}`;
  return /[",\r\n]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
};
const csv = [columns, ...rows.map((row) => columns.map((c) => row[c]))]
  .map((line) => line.map(cell).join(","))
  .join("\r\n");

mkdirSync(new URL("../exports/", import.meta.url), { recursive: true });
const file = `exports/signups-${new Date().toISOString().slice(0, 10)}.csv`;
writeFileSync(new URL(`../${file}`, import.meta.url), `${csv}\r\n`);
console.log(`${rows.length} signups written to ${file}`);
