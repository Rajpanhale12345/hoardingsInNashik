import React from 'react';
import"./Services.css";
import grid1 from './images/grid1.jpeg';
import grid2 from './images/grid2.jpeg';
import grid3 from './images/grid3.jpeg';
import { Link } from 'react-router-dom';

 function Services() {
  return (
   <>
   <br /><br /><br />
    <div className="image-grid">
      <img src={grid1} alt="Horizontal 1" className="grid1" />
      <img src={grid2} alt="Vertical" className="grid2" />
      <img src={grid3} alt="Horizontal 2" className="grid3" />
    </div>
<br /><br /><br />
<h4 className='emotional'>Let the city feel your story...💙</h4>
<br /><br /><br />
<div className="button-container">
  <Link to="/contact" className='button'>
    Get in Touch
  </Link>
</div>

 </>
  )
}
export default Services;
