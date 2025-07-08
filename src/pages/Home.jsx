import React from 'react';
import Banner from '../components/Banner';
import Chatbot from '../components/Chatbot';
import Course from '../components/Course';
import Accordion from '../components/Accordion';
import SliderPart from '../components/SliderPart';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Banner />
      <Chatbot />
      <Course />
      <Accordion />
      <SliderPart />
      <CTA />
    </>
  )
}

export default Home;