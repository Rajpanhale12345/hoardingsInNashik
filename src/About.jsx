import React from 'react';
import hoarding from './images/hoarding.gif';
import './About.css';
import { Helmet } from "react-helmet";

function About() {
  // ✅ ADDED: Reusable page constants (helps consistency + AI extraction)
  const PAGE_URL = "https://hoardingsinnashik.com/about";
  const SITE_NAME = "Hoardings in Nashik";
  const BRAND = "BrandBanao.Ai";
  const LEGAL_ENTITY = "AHP Resolute Pvt. Ltd.";
  const PARTNER = "PANA Enterprises";
  const PRIMARY_KEYWORD = "Hoardings in Nashik";

  // ✅ ADDED: JSON-LD structured data for AI/Answer Engines + rich results
  // Note: No address/phone added because you didn't provide them (avoid SEO trust issues).
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `About | ${SITE_NAME}`,
      "url": PAGE_URL,
      "description":
        "Learn about Hoardings in Nashik—premium outdoor advertising (OOH) solutions including hoarding and billboard site selection, campaign execution, printing support, and maintenance in Nashik.",
      "isPartOf": {
        "@type": "WebSite",
        "name": SITE_NAME,
        "url": "https://hoardingsinnashik.com/"
      },
      "about": [
        { "@type": "Thing", "name": "Outdoor advertising" },
        { "@type": "Thing", "name": "Out-of-home advertising" },
        { "@type": "Place", "name": "Nashik" }
      ],
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://hoardingsinnashik.com/assets/Nashiklogo-D7jJA0bl.png"
      },
      "inLanguage": "en-IN"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": SITE_NAME,
      "url": "https://hoardingsinnashik.com/",
      "brand": { "@type": "Brand", "name": BRAND },
      "description":
        "Outdoor advertising (OOH) service focused on hoardings and billboards in Nashik with end-to-end planning, execution, and maintenance.",
      "sameAs": [
        // ✅ ADDED: Put real social/profile URLs here if you have them (leave empty otherwise)
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>About | Hoarding & Billboard Advertising in Nashik</title>
        <meta name="description" content="About Hoardings in Nashik: premium outdoor advertising (OOH) for Nashik—hoarding & billboard site selection, campaign planning, printing support, execution, and maintenance backed by 16+ years of experience." />
        <meta name="keywords" content="Hoardings in Nashik, Billboard Advertising Nashik, Outdoor Advertising Nashik, OOH Media Nashik, Hoarding Agency Nashik, Billboard Rental Nashik, Outdoor Media Owner Nashik" />
        <meta name="author" content={SITE_NAME} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="en-IN" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`About ${SITE_NAME} | Outdoor Advertising (OOH) in Nashik`} />
        <meta property="og:description" content="Discover how Hoardings in Nashik delivers high-visibility hoarding and billboard advertising in Nashik with end-to-end planning, execution, and maintenance." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content="https://hoardingsinnashik.com/assets/Nashiklogo-D7jJA0bl.png" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`About ${SITE_NAME} | Hoardings & Billboards in Nashik`} />
        <meta name="twitter:description" content="Premium outdoor advertising in Nashik: hoardings & billboards with location planning, execution, and maintenance backed by 16+ years of OOH experience." />
        <meta name="twitter:image" content="https://hoardingsinnashik.com/assets/Nashiklogo-D7jJA0bl.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <br /><br /><br /><br />

      <header className="main" aria-label="About Hoardings in Nashik">
        <h1 className="about">About Hoardings in Nashik</h1>
        <img
          src={hoarding}
          alt="Outdoor advertising hoarding in Nashik showcasing billboard visibility"
          className="image"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </header>

      <br /><br /><br />


      <main className="text" id="about-content">
        <section aria-labelledby="who-we-are">
          <h2 id="who-we-are" className="title">Who we are</h2>

          <p className="normalText" style={{ fontSize: "14px" }}>
            <strong>{PRIMARY_KEYWORD}</strong> is an outdoor advertising (OOH) service by <strong>{BRAND}</strong>,
            focused on delivering high-visibility <strong>hoarding and billboard advertising in Nashik</strong>.
            We help brands plan and run campaigns through location-led media strategy, execution support, and
            on-ground maintenance.
          </p>
        </section>

        <section aria-labelledby="experience" style={{ marginTop: "14px" }}>
          <h2 id="experience" className="title">Experience & media foundation</h2>

          <p className="normalText" style={{ fontSize: "14px" }}>
            Operating under <strong>{LEGAL_ENTITY}</strong> and supported by <strong>{PARTNER}</strong> (an
            Out-of-Home media owner), our foundation is built on <strong>16+ years</strong> of direct outdoor
            advertising experience. This enables reliable coordination across creative guidance, production
            workflows, and campaign execution.
          </p>
        </section>

        <section aria-labelledby="what-we-do" style={{ marginTop: "14px" }}>
          <h2 id="what-we-do" className="title">What we do in Nashik</h2>

          <ul className="normalText" style={{ fontSize: "14px", marginTop: "10px" }}>
            <li><strong>Hoarding site selection</strong> across major routes and hubs in Nashik</li>
            <li><strong>Creating a campaign</strong> based on your target audience and desired duration</li>
            <li><strong>Providing creative</strong> help for outdoor-ready layouts and messaging</li>
            <li><strong>Providing printing</strong> services for production coordination</li>
            <li><strong>Routine upkeep</strong> of the hoardings to ensure they remain clean, bold, and legible
              retroactively</li>
          </ul>

          <p className="normalText" style={{ fontSize: "14px", marginTop: "10px" }}>
            We created hoardings in Nashik to make it easier for brands to find locations with good visibility,
            relevance, and campaign goals (e.g., metro splits, highways, business districts, and emerging
            residential communities).
          </p>
        </section>

        <section aria-labelledby="why-outdoor" style={{ marginTop: "14px" }}>
          <h2 id="why-outdoor" className="title">Why hoarding advertising works in Nashik</h2>

          <p className="normalText" style={{ fontSize: "14px" }}>
            As Nashik continues to evolve into a business and real estate centre, outdoor advertising creates brand
            <strong> presence, trust, and brand recall</strong>. Unlike digital impressions that are temporary,
            hoardings provide consistent, easy, and reliable visibility between daytime and nighttime purchase
            routes within the geographical area.
          </p>
        </section>

        <section aria-labelledby="summary" style={{ marginTop: "14px" }}>
          <h2 id="summary" className="title">Summary</h2>

          <p className="normalText" style={{ fontSize: "14px" }}>
            Hoarding Advertising in Nashik is more than simply putting up a billboard. It means putting your brand 
            where your audience sees it frequently on the routes they travel every day and within the places they 
            already know about. Having significant outdoor experience, local coordination, and a strong capability 
            to execute within the region allows us to help brands run campaigns that will be visible, credible, and 
            remain effective over time.
          </p>
        </section>


        <section aria-labelledby="quick-answers" style={{ marginTop: "18px" }}>
          <h2 id="quick-answers" className="title">Quick answers</h2>
          <div className="normalText" style={{ fontSize: "14px" }}>
            <p><strong>Service area:</strong> Nashik (and nearby regions based on campaign requirements)</p>
            <p><strong>Core offering:</strong> Hoardings and billboards offering end-to-end outdoor advertising solutions</p>
            <p><strong>Best for:</strong> Brand awareness, launches, real estate promotions, retail visibility, local trust-building</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
