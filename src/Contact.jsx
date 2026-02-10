import React, { useState } from 'react';
import './Contact.css';
import { Helmet } from "react-helmet";


function Contact() {
  const SITE_NAME = "Hoardings In Nashik";
  const SITE_URL = "https://hoardingsinnashik.com";
  const PAGE_PATH = "/contact";
  const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
  const OG_IMAGE = `https://hoardingsinnashik.com/assets/Nashiklogo-D7jJA0bl.png`

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
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: OG_IMAGE,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["en", "hi", "mr"],
        telephone: "+9156784242",
        areaServed: "IN"
      }
    ],
    sameAs: []
  };


  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${PAGE_URL}#contactpage`,
    name: "Contact Us",
    url: PAGE_URL,
    description,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: SITE_NAME,
      url: SITE_URL
    },
    about: {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL }
    ]
  };



  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OG_IMAGE} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <meta name="theme-color" content="#0b0b0b" />

        <script type="application/ld+json">
          {JSON.stringify([organizationSchema, contactPageSchema, breadcrumbSchema])}
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
              minLength={2}
              autoComplete="name"
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
              autoComplete="email"
              inputMode="email"
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
              minLength={10}
              autoComplete="off"
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
