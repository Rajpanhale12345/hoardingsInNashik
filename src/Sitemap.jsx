import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Sitemap.css";

function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Services", url: "/services" },
        { name: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Blog Pages",
      links: [
        { name: "Blog", url: "/blog" },
        {
          name: "Best Hoarding Location in Nashik for Maximum Brand Visibility",
          url: "/blog/best-hoarding-location-in-nashik-for-maximum-brand-visibility",
        },
        {
          name: "Hoarding Advertising in Nashik Guide",
          url: "/blog/hoarding-advertising-in-nashik-guide",
        },
      ],
    },
    {
      title: "Other Pages",
      links: [{ name: "Sitemap", url: "/sitemap" }],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap | Hoardings in Nashik</title>
        <meta
          name="description"
          content="Explore all pages of Hoardings in Nashik including home, about, services, contact, blog posts, and sitemap."
        />
        <meta
          name="keywords"
          content="sitemap, hoardings in nashik, website pages, blog pages, nashik advertising"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hoardingsinnashik.com/sitemap" />
      </Helmet>

      <section className="sitemap-page">
        <div className="sitemap-container">
          <header className="sitemap-header">
            <h1 className="sitemap-title">Sitemap</h1>
            <p className="sitemap-subtitle">
              Find all important pages of our website here.
            </p>
          </header>

          <div className="sitemap-grid">
            {sitemapSections.map((section, index) => (
              <div className="sitemap-card" key={index}>
                <h2>{section.title}</h2>
                <ul>
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link to={link.url}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Sitemap;