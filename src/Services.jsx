import React from "react";
import "./Services.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Import images individually
import cityCentral from "./images/CCM.png";
import mumbaiNaka from "./images/Mumbai_naka.png";
import ashokStambh from "./images/grid3.jpeg";
import gangapurRoad from "./images/Gangapur_Road.png";
import collegeRoad from "./images/College_Road.png";
import pathardiPhata from "./images/Pathardi_road.png";
import jihandcircle from "./images/grid1.jpeg";
import dongarewastigruh from "./images/grid2.jpeg";
import mycocircle from "./images/grid1.jpeg";
import abpcircle from "./images/grid2.jpeg";
import indiranagar from "./images/Indira_nagar.png";
import nashikroad from "./images/Nashik_road.png";
import jailroad from "./images/Jail_Road.png";
import adgaonnaka from "./images/grid3.jpeg";
import trimurtichauck from "./images/Trimurti_chowk.png";
import cbs from "./images/grid2.jpeg";
import panchavati from "./images/grid3.jpeg";
import ravivarkaranja from "./images/grid1.jpeg";
import satputmidc from "./images/grid2.jpeg";
import devlalicamproad from "./images/grid3.jpeg";
import bytcopoint from "./images/Byto_chowk.png";
import ashokamark from "./images/Ashoka_marg.png";
import pipelineroad from "./images/Pipeline_road.png";
import trimbakroad from "./images/grid3.jpeg";

function Hoardings() {
  const SITE_NAME = "Hoardings In Nashik";
  const SITE_URL = "https://hoardingsinnashik.com"; 
  const PAGE_PATH = "/services";
  const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
  const OG_IMAGE = `https://hoardingsinnashik.com/assets/Nashiklogo-D7jJA0bl.png`;


  const title = `Services | Top Hoarding Locations In Nashik`;
  const description =
    "Explore prime hoarding (billboard) locations across Nashik including City Central Mall, Mumbai Naka, College Road, Panchavati, and more. Book your outdoor advertising today.";


  const hoardings = [
    {
      id: 1,
      name: "City Central Mall",
      area: "City Central Mall, Nashik",
      image: cityCentral
    },
    {
      id: 2,
      name: "Mumbai Naka",
      area: "Mumbai Naka, Nashik",
      image: mumbaiNaka
    },
    {
      id: 3,
      name: "Ashok Stambh",
      area: "Ashok Stambh, Nashik",
      image: ashokStambh
    },
    {
      id: 4,
      name: "Gangapur Road",
      area: "Gangapur Road, Nashik",
      image: gangapurRoad
    },
    {
      id: 5,
      name: "College Road",
      area: "College Road, Nashik",
      image: collegeRoad
    },
    {
      id: 6,
      name: "Pathardi Phata",
      area: "Pathardi Phata, Nashik",
      image: pathardiPhata
    },
    {
      id: 7,
      name: "Jehan Circle",
      area: "Jehan Circle, Nashik",
      image: jihandcircle
    },
    {
      id: 8,
      name: "Dongre Vasti Gruh",
      area: "Dongre Vasti Gruh, Nashik",
      image: dongarewastigruh
    },
    {
      id: 9,
      name: "Trimbak Road",
      area: "Trimbak Road, Nashik",
      image: trimbakroad
    },
    {
      id: 10,
      name: "MICO Circle",
      area: "MICO Circle, Nashik",
      image: mycocircle
    },
    {
      id: 11,
      name: "ABB Circle",
      area: "ABB Circle, Nashik",
      image: abpcircle
    },
    {
      id: 12,
      name: "Indira Nagar",
      area: "Indira Nagar, Nashik",
      image: indiranagar
    },
    {
      id: 13,
      name: "Nashik Road",
      area: "Nashik Road, Nashik",
      image: nashikroad
    },
    {
      id: 14,
      name: "Jail Road",
      area: "Jail Road, Nashik",
      image: jailroad
    },
    {
      id: 15,
      name: "Adgaon Naka",
      area: "Adgaon Naka, Nashik",
      image: adgaonnaka
    },
    {
      id: 16,
      name: "Trimurti Chowk",
      area: "Trimurti Chowk, Nashik",
      image: trimurtichauck
    },
    {
      id: 17,
      name: "CBS",
      area: "CBS, Nashik",
      image: cbs
    },
    {
      id: 18,
      name: "Panchavati",
      area: "Panchavati, Nashik",
      image: panchavati
    },
    {
      id: 19,
      name: "Raviwar Karanja",
      area: "Raviwar Karanja, Nashik",
      image: ravivarkaranja
    },
    {
      id: 20,
      name: "Satpur MIDC",
      area: "Satpur MIDC, Nashik",
      image: satputmidc
    },
    {
      id: 21,
      name: "Deolali Camp Road",
      area: "Deolali Camp Road, Nashik",
      image: devlalicamproad
    },
    {
      id: 22,
      name: "Bytco Point",
      area: "Bytco Point, Nashik",
      image: bytcopoint
    },
    {
      id: 23,
      name: "Ashoka Marg",
      area: "Ashoka Marg, Nashik",
      image: ashokamark
    },
    {
      id: 24,
      name: "Pipeline Road",
      area: "Pipeline Road, Nashik",
      image: pipelineroad
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    areaServed: ["Nashik, Maharashtra, India"],
    knowsAbout: ["Outdoor Advertising", "Hoardings", "Billboards", "OOH Advertising"]
  };

  // Optional: ItemList schema for your location list
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hoarding Locations in Nashik",
    itemListElement: hoardings.map((h, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: h.name,
      item: {
        "@type": "Place",
        name: h.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nashik",
          addressRegion: "Maharashtra",
          addressCountry: "IN"
        }
      }
    }))
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
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <br /><br /><br />

      <h1 className="page-title">Our Hoarding Locations</h1>

      <div className="hoardings-flex">
        {hoardings.map((item) => (
          <div className="hoarding-card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="hoarding-image"
            />

            <div className="hoarding-info">
              <h4>{item.name}</h4>
              <p>{item.area}</p>
            </div>
          </div>
        ))}
      </div>

      <br /><br />

      <h4 className="emotional">Let the city feel your story...💙</h4>

      <br /><br />

      <div className="button-container">
        <Link to="/contact" className="button">
          Get in Touch
        </Link>
      </div>

      <br /><br />
    </>
  );
}

export default Hoardings;
