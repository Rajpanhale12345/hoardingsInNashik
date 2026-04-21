import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Billboard1 from './Blog/Images/Jail_Road.png';
import mockup from './Blog/Images/BestHoardingLocation.webp';
import './Home.css';
import collegeroad from './images/College_Road.png';
import Dwarka from './images/Ashoka_marg.png';
import MGroad from './images/CCM.png';
import mumbainaka from './images/Mumbai_naka.png';
import CBS from './images/Byto_chowk.png';
import Satpur from './images/Gangapur_Road.png';
import Sinnar from './images/Trimurti_chowk.png';
import Untewadi from './images/Indira_nagar.png';
import Pachavati from './images/Pathardi_road.png';
import Nashikroad from './images/Nashik_road.png';
import { Helmet } from "react-helmet";



function Home() {
  const words = ['skippable', 'missable', 'forgettable'];
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (letterIndex <= currentWord.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentWord.slice(0, letterIndex));
        setLetterIndex(letterIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setLetterIndex(0);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2000);
      return () => clearTimeout(pause);
    }
  }, [letterIndex, wordIndex]);

  const locationImages = [
    {
      src: mumbainaka,
      name: "Mumbai Naka",
      title: "Hoarding at Mumbai Naka, Nashik"
    },
    {
      src: collegeroad,
      name: "College Road",
      title: "Hoarding at College Road, Nashik"
    },
    {
      src: MGroad,
      name: "MG Road",
      title: "Hoarding at MG Road, Nashik"
    },
    {
      src: Dwarka,
      name: "Dwarka",
      title: "Hoarding at Dwarka, Nashik"
    },
    {
      src: CBS,
      name: "CBS",
      title: "Hoarding at CBS, Nashik"
    },
    {
      src: Satpur,
      name: "Satpur",
      title: "Hoarding at Satpur MIDC, Nashik"
    },
    {
      src: Sinnar,
      name: "Sinnar",
      title: "Hoarding at Sinnar area, Nashik"
    },
    {
      src: Untewadi,
      name: "Indira Nagar",
      title: "Hoarding at Untewadi, Nashik"
    },
    {
      src: Pachavati,
      name: "Panchavati",
      title: "Hoarding at Panchavati, Nashik"
    },
    {
      src: Nashikroad,
      name: "Nashik Road",
      title: "Hoarding at Nashik Road, Nashik"
    }
  ];

  return (

    <>

      <Helmet>
        <title>Top Hoardings in Nashik - Best Hoardings in Nashik</title>
        <meta name="description" content="Book premium hoardings in Nashik across Mumbai Naka, College Road, MG Road, Dwarka, CBS, Satpur, Sinnar, Panchavati and more. Strategic OOH placements made simple." />
        <meta name="keywords" content="hoardings in nashik, billboard advertising nashik, outdoor advertising nashik, ooh advertising nashik, hoarding locations nashik" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hoardingsinnashik.com/" />
        <meta property="og:title" content="Hoardings in Nashik | Premium Outdoor (OOH) Advertising Locations" />
        <meta property="og:description" content="Access top-tier outdoor advertising placements across Nashik's highest-visibility locations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hoardingsinnashik.com/" />
        <meta property="og:image" content="https://hoardingsinnashik.com/assets/Nashiklogo-D7jJA0bl.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hoardings in Nashik | Premium Outdoor (OOH) Advertising Locations" />
        <meta name="twitter:description" content="Premium hoarding & billboard advertising locations in Nashik — planned strategically, booked seamlessly." />
        <meta name="twitter:image" content="https://hoardingsinnashik.com/assets/Nashiklogo-D7jJA0bl.png" />
      </Helmet>



      <div style={{ width: '100%', margin: '0 auto', paddingTop: '2rem' }}>
        <br /><br /><br />
        <h1 className="headline-typewriter">
          <span className="un" style={{ color: 'orange' }}>Be Un</span>
          <span className="typed"> {typedText}</span>
          <span className="cursor">|</span>
        </h1>


        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img
              src={mockup}
              alt="Best hoarding locations in Nashik"
              loading="lazy"
            />
            <p className="legend">
              Best Hoarding Locations in Nashik for Maximum Visibility
            </p>
          </div>

          <div>
            <img
              src={Billboard1}
              alt="Billboard at Jail Road Nashik"
              loading="lazy"
            />
            <p className="legend">
              Outdoor Advertising Billboard at Jail Road, Nashik
            </p>
          </div>
        </Carousel>

        <br /><br /><br />
        <h2 className='punchline'>Best hoarding locations in Nashik. Easy booking. Maximum visibility....</h2>
        <br /><br /><br />

        <div className='vector-images'>
          {locationImages.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.name}
              title={item.title}
              loading="lazy"
              onClick={() => {
                setSelectedIndex(index);
                setShowModal(true);
              }}
            />
          ))}
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">

              <button
                className="close-btn"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                ×
              </button>

              <Carousel
                selectedItem={selectedIndex}
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                emulateTouch
              >
                {locationImages.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item.src}
                      alt={item.name}
                      title={item.title}
                      loading="lazy"
                    />
                  </div>
                ))}
              </Carousel>

            </div>
          </div>
        )}
      </div>
    </>

  );
}

export default Home;
