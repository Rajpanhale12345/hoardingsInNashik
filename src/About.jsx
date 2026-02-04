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
          <h2 id="who-we-are" className="title">About Us</h2>

          <p className="normalText" style={{ fontSize: "14px" }}>
            Brand Banao.Ai offers Hoardings across the Nashik OOH sector, aimed at providing effective high-visibility
            hoarding and billboard advertising for local advertisers looking for locations where they want to advertise.
            As many advertisers have made us their 'Top Choice' in Hoarding Advertising via our reputation as the 'Best
            Hoarding Agency in Nashik' will provide you support on strategic location-driven media planning, support with
            executing your campaigns, and provide you ongoing ground level support with maintenance of your hoardings in
            the Nashik region.
          </p>
        </section>

        <section aria-labelledby="experience" style={{ marginTop: "14px" }}>
          <h2 id="experience" className="title">Experience & media foundation</h2>

          <p className="normalText" style={{ fontSize: "14px" }}>
            Functioning under the umbrella of AHP Resolute Pvt. Ltd. and backed by PANA Enterprises (a well-established
            Out-of-Home media owner), our roots are grounded in more than 16 years of practical outdoor advertising
            experience. We use our extensive experience and knowledge to provide a comprehensive solution for businesses
            providing creative direction, production and execution of your campaign make us a premier option for advertisers
            searching for a 'Top Hoarding Agency in Nashik' who have provided them the level of confidence and ability to
            execute their advertising campaigns through creative local knowledge.
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
