import React from 'react';
import hoarding from './images/hoarding.gif';
import './About.css';

function About() {
  return (
    <>
      <br /><br /><br /><br />
      <div className='main'>
        <span className='about'>About Hoardings in Nashik :</span>
        <img src={hoarding} alt="" className='image' />
      </div>

      <br /><br /><br /><br />

      <div className='text'>
        <h4 className='mainText'>
          <span className='title'>Looking to make a bold statement in the heart of Nashik?</span>
          <br /><br />
          <span className='normalText'>
            We bring to you premium hoarding and billboard advertising solutions across Nashik city from high-traffic junctions to key commercial zones.
            <br /><br />
            With support from seasoned industry experts like <i className='brandName'>BrandBanao.Ai</i>, a Mumbai-based branding and OOH agency operating under AHP Resolute Pvt. Ltd., and powered by PANA Enterprises (boasting over 16+ years of experience in Out-of-Home media), we ensure your brand gets the visibility it deserves.
            <br /><br />
            Whether you’re a local business or a national brand, we help you choose the best hoarding spots tailored to your goals.
            <br /><br />
            👉 Contact us today to book top hoardings anywhere in Nashik and let your brand speak louder than words.
          </span>
        </h4>
      </div>

      {/* CTA Section */}
     
    </>
  );
}

export default About;
