import type { NextConfig } from "next";

// Static export for Cloudflare Pages: `next build` writes plain HTML/CSS/JS to
// ./out. Checkout, Discord linking, and the admin need a server, so when v1
// moves to Railway (docs/PLAN.md §7) drop `output: "export"` and keep the rest.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
