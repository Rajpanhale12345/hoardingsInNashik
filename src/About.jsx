import React from 'react';
import hoarding from './images/hoarding.gif';
import './About.css';
import { Helmet } from "react-helmet";


function About() {
  return (
    <>

    <Helmet>
        <title>About | Hoardings in Nashik</title>
        <meta name="description" content="Learn about hoardings in Nashik, premium outdoor advertising solutions offering high-visibility billboard placements, planning, execution, and maintenance." />
        <meta name="keywords" content="Hoardings in Nashik, Billboard Advertising Nashik, Outdoor Advertising, OOH Media Nashik" />
        <meta name="author" content="Hoardings in Nashik" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hoardingsinnashik.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Hoardings in Nashik | Outdoor Advertising Experts" />
        <meta property="og:description" content="Discover how Hoardings in Nashik delivers impactful outdoor advertising with premium hoarding locations and end-to-end campaign execution." />
        <meta property="og:url" content="https://hoardingsinnashik.com/about" />
        <meta property="og:image" content="https://hoardingsinnashik.com/assets/Nashiklogo-D7jJA0bl.png" />
        <meta property="og:site_name" content="Hoardings in Nashik" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Hoardings in Nashik" />
        <meta name="twitter:description" content="Premium hoarding and billboard advertising solutions in Nashik with 16+ years of OOH expertise." />
        <meta name="twitter:image" content="https://hoardingsinnashik.com/assets/Nashiklogo-D7jJA0bl.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </Helmet>

      
      <br /><br /><br /><br />

      {/* Hero Section */}
      <div className='main'>
        <span className='about'>About Hoardings in Nashik</span>-
        <img src={hoarding} alt="Hoardings in Nashik" className='image' />
      </div>

      <br /><br /><br />

      {/* Content Section */}
      <div className='text'>
        <h4 className='mainText'>

          <span className='title'>About Hoardings in Nashik</span>

          <span className='normalText' style={{ fontSize: "14px" }}>
            <p>
              Hoardings in Nashik is an exclusive outdoor advertising solution provided by BrandBanao.Ai, designed specifically for brands that require effective and visible hoarding solutions in Nashik and other areas. Leveraging our experience in the field, media assets, and planning capabilities, we exclusively provide hoarding and billboard advertising solutions that make a tangible impact.
            </p>
            <br />

            <p>
             Functioning under the umbrella of AHP Resolute Pvt. Ltd. and fueled by PANA Enterprises, a well-established Out-of-Home (OOH) media owner, our roots are grounded in more than 16+ years of direct outdoor advertising experience. This enables us to integrate creativity with logistics, planning with execution, and visibility with consistency.
            </p>
            <br />

            <p>
              Hoardings in Nashik was launched with a purpose to enable brands to have direct access to high-impact locations for hoardings without any complexity. Whether it is the crossing of a city or a highway, or a business area or a new residential area, we assist brands in accessing the right locations that are of importance to their target audience. All the hoardings that we provide are chosen on the basis of visibility and relevance.
            </p>
            <br />

            <p>
              Our company provides complete advertising solutions for hoardings, including site selection, creative assistance, printing, and ongoing maintenance of the hoardings. Whether it is a branding exercise, real estate launch, political campaign, or a promotional activity, our hoardings are managed in such a way that they look fresh, bold, and effective throughout the campaign period. What makes us unique is our ownership and control of our media and referral devices. Our business can provide pricing, timelines, and delivery transparency through our owned hoardings/media partnerships. Brands can see exactly where their ads are placed, the length of time they are placed, and what the on-the-ground results are.
            </p>
            <br />

            <p>
              As Nashik develops into a business and real estate hub, outdoor or hoarding advertising is an excellent way of establishing brand presence, trust, and recognition with the local community. Unlike scrolling or disappearing digital ads/media, outdoor ads remain visible all the time, day and night, in all the locations that people are likely to make purchases.
            </p>
            <br />

            <p>
              In summary, hoarding advertising in Nashik is not just about putting up a billboard or hoarding. To sum up, hoardings in Nashik isn't just about erecting hoardings or billboards this is about getting the brand in a place that will resonate with local residents in their daily lives, via the roads they travel, where they have a history of using, and the physical areas where they will remember the brand. We're able to utilize our extensive knowledge and extensive experience in outdoor advertising, as well as our logistics and distribution capabilities and our regional network to help brands create an effective and reliable distinction in Nashik.
            </p>
            <br />
          </span>

        </h4>
      </div>
    </>
  );
}

export default About;
