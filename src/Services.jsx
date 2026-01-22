import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

// Import images individually
import cityCentral from "./images/grid1.jpeg";
import mumbaiNaka from "./images/grid2.jpeg";
import ashokStambh from "./images/grid3.jpeg";
import gangapurRoad from "./images/grid1.jpeg";
import collegeRoad from "./images/grid2.jpeg";
import pathardiPhata from "./images/grid3.jpeg";
import jihandcircle from "./images/grid1.jpeg";
import dongarewastigruh from "./images/grid2.jpeg";
import mycocircle from "./images/grid1.jpeg";
import abpcircle from "./images/grid2.jpeg";
import indiranagar from "./images/grid3.jpeg";
import nashikroad from "./images/grid1.jpeg";
import jailroad from "./images/grid2.jpeg";
import adgaonnaka from "./images/grid3.jpeg";
import trimurtichauck from "./images/grid1.jpeg";
import cbs from "./images/grid2.jpeg";
import panchavati from "./images/grid3.jpeg";
import ravivarkaranja from "./images/grid1.jpeg";
import satputmidc from "./images/grid2.jpeg";
import devlalicamproad from "./images/grid3.jpeg";
import bitcopoint from "./images/grid1.jpeg";
import ashokamark from "./images/grid2.jpeg";
import pipelineroad from "./images/grid3.jpeg";
import trimbakroad from "./images/grid1.jpeg";

function Hoardings() {
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
      name: "ABP Circle",
      area: "ABP Circle, Nashik",
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
      image: bitcopoint
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

  return (
    <>
      <br /><br /><br />

      <h2 className="page-title">Our Hoarding Locations</h2>

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
