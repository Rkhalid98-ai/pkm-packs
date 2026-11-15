// Next 16.4's static export builds nested segment-file names with path.relative,
// so on Windows `shop/__next.shop.__PAGE__.txt` is written as
// `shop/__next.shop/__PAGE__.txt` and the router's prefetches 404. Linux builds
// (Cloudflare Pages) are unaffected. This flattens them back; it's a no-op when
// nothing is nested. Runs automatically after `npm run build`.
import { readdir, rename, rm } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("out");

async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((e) => {
      const p = path.join(dir, e.name);
      return e.isDirectory() ? files(p) : [p];
    }),
  );
  return nested.flat();
}

async function fix(dir) {
  let moved = 0;
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const p = path.join(dir, e.name);
    if (!e.name.startsWith("__next.")) {
      moved += await fix(p);
      continue;
    }
    for (const file of await files(p)) {
      const flat = [e.name, ...path.relative(p, file).split(path.sep)].join(".");
      await rename(file, path.join(dir, flat));
      moved++;
    }
    await rm(p, { recursive: true });
  }
  return moved;
}

const moved = await fix(outDir);
if (moved) console.log(`fix-export-segments: flattened ${moved} segment files`);
