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

// Blog posts
const blogSlugs = [
  "best-hoarding-location-in-nashik-for-maximum-brand-visibility",
  "hoarding-advertising-in-nashik-guide"
];

const blogRoutes = blogSlugs.map(slug => `/blog/${slug}`);

const routes = [...staticRoutes, ...blogRoutes];

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => {
  const priority =
    route === "/" ? "1.0" :
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

const publicPath = path.resolve("public");
const filePath = path.join(publicPath, "sitemap.xml");

if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
}

fs.writeFileSync(filePath, sitemap, "utf8");

console.log("✅ Sitemap generated successfully!");