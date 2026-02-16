import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./BlogPost.css";
import { blogPosts } from "./blogData";

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="post-wrap">
        <h1 className="post-title">Blog not found</h1>
        <Link className="post-back" to="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.seoTitle || post.title}</title>
        <meta name="description" content={post.seoDescription || post.excerpt} />
      </Helmet>

      <br /><br /><br />

      <div className="post-wrap">
        <Link className="post-back" to="/blog">← Back to Blog</Link>

        <h1 className="post-title">{post.title}</h1>

        <div className="post-meta">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <img src={post.image} alt={post.title} className="post-cover" />

        <div className="post-content">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="post-cta">
          <h3>Want to Promote Your Brand in Nashik?</h3>
          <Link to="/contact" className="post-button">Get in Touch</Link>
        </div>
      </div>

      <br /><br />
    </>
  );
}

export default BlogPost;
