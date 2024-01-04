import React from 'react';
import Navbar from '@/section/Navbar/Navbar';
import Title from '@/components/Titles/Heading';
import Footer from '@/section/Footer/Footer';
import About from '@/section/About/About';

export default function AboutSection() {
  return (
    <div>
      <Navbar/>
      <Title title="Hey, I'm Hakkeem 👋" container_spacing='p-10 pb-1 pt-7 md:pr-20 md:pl-20'/>
      <About/>
      <Footer/>
    </div>
  )
}


