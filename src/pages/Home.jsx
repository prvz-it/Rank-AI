import React from 'react';
import Banner from '../components/Banner';
import Testimonial from '../components/Testimonial';
import Course from '../components/Course';
import FAQ from '../components/FAQ';
import SliderPart from '../components/SliderPart';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Banner />
      <Testimonial />
      <Course />
      <FAQ />
      <SliderPart />
      <CTA />
    </>
  )
}

export default Home;