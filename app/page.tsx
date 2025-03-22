// pages/index.tsx
"use client"
import React from 'react';
import HeroSection from '@/components/HeroSection';
import HeadNavigation from '@/components/HeadNavigation';
import About from '@/components/About';
import Projects from '@/components/Project';
import Topics from '@/components/Topics';
import TopicsTwo from '@/components/TopicsTwo';
import EventServices from '@/components/EventServices';
import MediaProduction from '@/components/MediaProduction';
import BrandingPrinting from '@/components/BrandingPrinting';
import ITSolutions from '@/components/ITSolutions';
import Brands from '@/components/Brands';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeadNavigation />
      <HeroSection /> 
      <About />
      <Topics />
      <TopicsTwo />
      <Projects />
      <EventServices />
      <MediaProduction />
      <BrandingPrinting />
      <ITSolutions />
      <Brands/>
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
