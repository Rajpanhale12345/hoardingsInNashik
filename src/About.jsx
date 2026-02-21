import React from 'react';
import hoarding from './images/hoarding.gif';
import './About.css';
import { Helmet } from "react-helmet";

function About() {
  // Constants
  const SITE_URL = "https://hoardingsinnashik.com";
  const SITE_NAME = "Hoardings in Nashik";
  const PAGE_PATH = "/about";
  const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
  const OG_IMAGE = `https://hoardingsinnashik.com/assets/Nashiklogo-D7jJA0bl.png`;
  const LEGAL_ENTITY = "AHP Resolute Pvt. Ltd.";
  const BRAND = "BrandBanao.Ai";
  const PARTNER = "PANA Enterprises";

  const title = `About | Outdoor (OOH) Advertising in Nashik`;
  const description =
    "Learn about Hoardings in Nashik—end-to-end outdoor (OOH) advertising support including site planning, printing coordination, execution, and hoarding maintenance across Nashik.";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${PAGE_URL}#aboutpage`,
      url: PAGE_URL,
      name: title,
      description,
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        name: SITE_NAME,
        url: SITE_URL
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: OG_IMAGE
      },
      about: [
        { "@type": "Thing", name: "Outdoor advertising" },
        { "@type": "Thing", name: "Out-of-home advertising" },
        { "@type": "Place", name: "Nashik" }
      ],
      mainEntity: {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "OOH (outdoor) advertising service in Nashik focused on hoardings and billboards with planning, execution, and maintenance.",
      sameAs: [],
      knowsAbout: ["Hoardings", "Billboards", "Outdoor Advertising", "OOH Advertising"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "About", item: PAGE_URL }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={OG_IMAGE} />
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
          <h2 id="who-we-are" className="title">About Us</h2>

          <p className="normalText" style={{ fontSize: "14px" }}>
            Brand Banao.Ai is focused on producing results in the outdoor advertisement and hoarding functionality
            in Nashik. Our billboards provide businesses with a maximum level of visibility to create a strong local
            and regional presence for their brand. We are excited about the success of OOH (Out-of-Home)
            advertising as it helps give brands the chance of reaching their target audience using high-quality
            hoarding products to reach their target audience in Nashik and throughout other very large cities in
            Maharashtra. The ultimate goal is to have your brand create impressions in the right area of the city
            with busy roads, business areas, and high-traffic routes within urban Nashik and Maharashtra.
          </p>
        </section>

        <section aria-labelledby="experience" style={{ marginTop: "14px" }}>
          <h2 id="experience" className="title">Experience & media foundation</h2>

          <p className="normalText" style={{ fontSize: "14px" }}>
            With over 16 years of experience in outdoor advertising, Brand Banao.Ai is a brand of AHP Resolute 
            Pvt. Ltd. and is supported by PANA Enterprises, a renowned player in the OOH media industry. 
            This strong foundation enables us to execute efficient, scalable, and result-oriented campaigns 
            for local businesses, regional brands, and growing companies. We truly understand market trends, 
            location intelligence, and audience movements, which enables us to recommend hoarding locations 
            that maximise visibility and impact.
          </p>
        </section>

        <section aria-labelledby="what-we-do" style={{ marginTop: "14px" }}>
          <h2 id="what-we-do" className="title">What we Do in Nashik</h2>

          <ul className="normalText" style={{ fontSize: "14px", marginTop: "10px" }}>
            <li>Select Promotional Hoarding locations strategically placed throughout Nashik high traffic routes and/or
              prominent areas of Nashik.</li>
            <li>Develop planning for your campaign based on your Advertising Objective; specifically designed to strategically
              reach your Customer.</li>
            <li>Providing you with Creative Assistance when designing your Outdoor Creative (We know what works).</li>
            <li>Coordinating the Printing and Execution of your Hoarding to ensure a process of seamless execution.</li>
            <li>Providing Regular Maintenance of your Hoardings to ensure they remain Clean, Visible, and Easily Visible over
              Time.</li>
          </ul>

          <p className="normalText" style={{ fontSize: "14px", marginTop: "10px" }}>
            We provide the visibility of brands and their relevance to location through the provision of hoardings in Nashik,
            which allows brands to evaluate potential sites for their campaigns by providing a variety of options when selecting
            a hoarding site based on their campaign objectives along highways, commercial and business centers, metro splits,
            and residential areas. Hoarding's market position has been established through our continual development as an
            authorised agency in installation and maintenance of the top three hoarding advertising firms in Nashik for brands
            advertising for a long time when the brand has an outdoor presence.
          </p>
        </section>

        <section aria-labelledby="why-outdoor" style={{ marginTop: "14px" }}>
          <h2 id="why-outdoor" className="title">Why Hoarding Advertising in Nashik is Effective</h2>

          <p className="normalText" style={{ fontSize: "14px" }}>
            The locations for the hoardings are all growing rapidly; therefore, outdoor advertising plays an important role
            in developing brand awareness through building credibility for your brand. Hoarding advertisements provide ongoing
            exposure 24/7 to the people traveling to work and back home each day, thus enabling the establishment of repeat
            exposure in the same geographical area to build an identity for your brand.
          </p>
        </section>

        <section aria-labelledby="summary" style={{ marginTop: "14px" }}>
          <h2 id="summary" className="title">Conclusion</h2>

          <p className="normalText" style={{ fontSize: "14px" }}>
            Hoardings are not simply billboards. It is an opportunity to have your brand on the path(s) of the demographic
            you are targeting, along the same route or in proximity to where they are used to seeing your brand on their
            way to or from work, in an area they already know. Through locally based expertise in the outdoor industry,
            excellent execution, and the ability to deliver long-term branded/campaigns, we help brands achieve marketing
            objectives.
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
