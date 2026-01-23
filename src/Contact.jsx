import React, { useState } from 'react';
import './Contact.css';
import { Helmet } from "react-helmet";


function Contact() {
  const SITE_NAME = "Your Brand Name";
  const SITE_URL = "https://hoardingsinnashik.com/contact";
  const PAGE_PATH = "/contact";
  const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
  const OG_IMAGE = `https://hoardingsinnashik.com/assets/Nashiklogo-D7jJA0bl.png`;

  const title = `Contact Us | ${SITE_NAME}`;
  const description =
    "Get in touch with our team for questions, support, partnerships, or quotes. We typically respond within 1-2 business days.";

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://sheetdb.io/api/v1/i7c0yknz2m4zb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Try again later.");
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    // Add these if you have them:
    // logo: `${SITE_URL}/assets/logo.png`,
    // sameAs: ["https://www.linkedin.com/company/...", "https://twitter.com/..."],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    url: PAGE_URL,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {OG_IMAGE ? <meta property="og:image" content={OG_IMAGE} /> : null}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {OG_IMAGE ? <meta name="twitter:image" content={OG_IMAGE} /> : null}
        <meta name="theme-color" content="#0b0b0b" />
        
        
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
      </Helmet>


      <div className="contact-wrapper">
        <h1 className="contact-heading">Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="form-button">Send Message</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </>
  );
}

export default Contact;
