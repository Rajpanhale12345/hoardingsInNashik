import fs from "fs";
import path from "path";

const DOMAIN = "https://hoardingsinnashik.com";

// Static pages
const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/blog"
];

// Blog posts (FIXED: lowercase + added missing one)
const blogSlugs = [
  "best-hoarding-location-in-nashik-for-maximum-brand-visibility",
  "hoarding-advertising-in-nashik-guide",
  "how-to-choose-the-best-hoarding"
];

const blogRoutes = blogSlugs.map(slug => `/blog/${slug}`);

const routes = [...staticRoutes, ...blogRoutes];

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => {
  const priority =
    route === "/" ? "1.0" :
    route === "/services" ? "0.9" :
    route === "/blog" ? "0.9" :
    "0.8";

  const changefreq =
    route.startsWith("/blog/") ? "weekly" : "monthly";

  return `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join("")}
</urlset>`;

// IMPORTANT: write to dist (not public) for deployment
const distPath = path.resolve("dist");
const filePath = path.join(distPath, "sitemap.xml");

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

fs.writeFileSync(filePath, sitemap, "utf8");

console.log("✅ Sitemap generated in /dist!");