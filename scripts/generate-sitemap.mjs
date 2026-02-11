import fs from "fs";
import path from "path";

const DOMAIN = "https://hoardingsinnashik.com"; 

const routes = ["/", "/about", "/services", "/contact"];

const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const priority = route === "/" ? "1.0" : "0.8";
    return `  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

const publicDir = path.resolve("public");
const filePath = path.join(publicDir, "sitemap.xml");

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

fs.writeFileSync(filePath, xml, "utf8");
console.log("✅ Generated public/sitemap.xml");
