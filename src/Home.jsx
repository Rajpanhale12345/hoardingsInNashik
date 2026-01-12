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
    <div style={{ width: '100%', margin: '0 auto', paddingTop: '2rem' }}>
        <br /><br /><br />
      <div className="headline-typewriter">
        <span className="un" style={{color : 'orange'}}> Be Un</span>
        <span className="typed"> {typedText}</span>
        <span className="cursor">|</span>
      </div>

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

      <div style={{ color : 'black'}} className='vector-images'>

<img src={mumbainaka} alt="" />
<img src={collegeroad} alt="" />
<img src={MGroad} alt="" />
<img src={Dwarka} alt="" />
<img src={CBS} alt="" />
<img src={Satpur} alt="" />
<img src={Sinnar} alt="" />
<img src={Untewadi} alt="" />
<img src={Pachavati} alt="" />
<img src={Nashikroad} alt="" />

    </div>
    </div>
    
  );
}

export default Home;
