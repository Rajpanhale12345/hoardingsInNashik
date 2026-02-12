import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Billboard1 from './images/Billboard1.jpg';
import mockup from './images/mockup2.jpg';
import './Home.css';
import collegeroad from './images/collegeroad.png';
import Dwarka from './images/Dwarka.png';
import MGroad from './images/MGroad.png';
import mumbainaka from './images/mumbainaka.png';
import CBS from './images/CBS.png';
import Satpur from './images/Satpur.png';
import Sinnar from './images/Sinnar.png';
import Untewadi from './images/Untewadi.png';
import Pachavati from './images/panchavati.png';
import Nashikroad from './images/Nashikroad.png';
import { Helmet } from "react-helmet";



function Home() {
  const words = ['skippable', 'missable', 'forgettable'];
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [typedText, setTypedText] = useState('');

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
      }, 2000); // wait before starting next word
      return () => clearTimeout(pause);
    }
  }, [letterIndex, wordIndex]);

  return (

    <>

      <Helmet>
        <title>Top Hoardings in Nashik | Best Hoardings in Nashik</title>
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
            <img src={mockup} alt="Slide 1" />
          </div>
          <div>
            <img src={Billboard1} alt="Slide 2" />
          </div>
        </Carousel>

        <br /><br /><br />
        <h2 className='punchline'>Access top-tier OOH placements, seamlessly and strategically...</h2>
        <br /><br /><br />

        <div style={{ color: 'black' }} className='vector-images'>

          <img src={mumbainaka} alt="Mumbai Naka Nashik" />
          <img src={collegeroad} alt="College Road Nashik" />
          <img src={MGroad} alt="MG Road Nashik" />
          <img src={Dwarka} alt="Dwarka Nashik" />
          <img src={CBS} alt="CBS Nashik" />
          <img src={Satpur} alt="Satpur Nashik" />
          <img src={Sinnar} alt="Sinner Nashik" />
          <img src={Untewadi} alt="Untewadi Nashik" />
          <img src={Pachavati} alt="Panchavati Nashik" />
          <img src={Nashikroad} alt="Nashik Road Nashik" />

        </div>
      </div>
    </>

  );
}

export default Home;
