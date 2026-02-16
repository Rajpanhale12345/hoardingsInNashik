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

  const title = "Outdoor Advertising Blog | Hoardings In Nashik";
  const description =
    "Expert guides on best hoarding locations in Nashik, outdoor advertising cost, booking process, and brand visibility strategies.";

  const blogs = [
    {
      id: 1,
      slug: "best-hoarding-location-in-nashik-for-maximum-brand-visibility",
      image: blog1,
      title:
        "Best Hoarding Locations in Nashik for Maximum Visibility (2026)",
      excerpt:
        "Discover high traffic hoarding locations in Nashik that deliver maximum impressions and better ROI."
    },
    {
      id: 2,
      slug: "hoarding-advertising-in-nashik-guide",
      image: blog2,
      title:
        "Hoarding Design Tips for Nashik: What Works on High-Speed Roads and Signals",
      excerpt:
        "Design smarter Nashik hoardings for speed, signals, and maximum brand recall"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />
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
