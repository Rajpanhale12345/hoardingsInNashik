import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Blog.css";
import blog1 from "./Images/BestHoardingLocation.webp";
import blog2 from "./Images/Jail_Road.png";

function Blog() {
  const SITE_NAME = "Hoardings In Nashik";
  const SITE_URL = "https://hoardingsinnashik.com";
  const PAGE_URL = `${SITE_URL}/blog`;

  const OG_IMAGE = "https://hoardingsinnashik.com/assets/Nashiklogo-D7jJA0bl.png";

  const title = "Outdoor Advertising Blog | Hoardings In Nashik";
  const description =
    "Expert guides on best hoarding locations in Nashik, outdoor advertising cost, booking process, and brand visibility strategies.";

  const blogs = [
    {
      id: 1,
      slug: "best-hoarding-location-in-nashik-for-maximum-brand-visibility",
      image: blog1,
      title: "Best Hoarding Locations in Nashik for Maximum Visibility (2026)",
      excerpt: "Discover high traffic hoarding locations in Nashik that deliver maximum impressions and better ROI.",
      datePublished: "2026-02-13"
    },
    {
      id: 2,
      slug: "hoarding-advertising-in-nashik-guide",
      image: blog2,
      title: "Hoarding Design Tips for Nashik: What Works on High-Speed Roads and Signals",
      excerpt: "Design smarter Nashik hoardings for speed, signals, and maximum brand recall",
      datePublished: "2026-02-14"
    }
  ];

  const blogItems = blogs.map((b) => ({
    ...b,
    url: `${SITE_URL}/blog/${b.slug}`
  }));

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: title,
    description,
    url: PAGE_URL,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL
    }
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogItems.map((b, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: b.url,
      name: b.title
    }))
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Hoardings In Nashik - Outdoor Advertising Blog" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <br /><br /><br />

      <h1 className="blog-page-title">
        Outdoor Advertising & Hoarding Blog - Nashik
      </h1>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <Link to={`/blog/${blog.slug}`} className="blog-card-link">

              {/* IMAGE ADDED HERE */}
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-image"
              />

              <div className="blog-card-body">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <span className="blog-read-more">
                  Read Full Guide →
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <br /><br />
    </>
  );
}

export default Blog;
