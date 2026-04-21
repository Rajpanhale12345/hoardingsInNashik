import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import Blog from "./Blog/Blog";
import BestHoardingLocationBlog from "./Blog/BestHoardingLocationBlog";
import HoardingAdvertisingNashik from "./Blog/HoardingAdvertisingNashik";
import ChooseHoardingLocation from "./Blog/Choose-Hoarding-Location"
import Sitemap from "./Sitemap";
import PageTracker from "./PageTracker";



function App() {
  return (
    <BrowserRouter>
      <PageTracker />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/best-hoarding-location-in-nashik-for-maximum-brand-visibility" element={<BestHoardingLocationBlog />} />
        <Route path="/blog/hoarding-advertising-in-nashik-guide" element={<HoardingAdvertisingNashik />} />
        <Route path="/blog/how-to-choose-the-best-hoarding" element={< ChooseHoardingLocation />} />
      </Routes>
      <br /><br />
      <Footer />
    </BrowserRouter>
  )
}
export default App;