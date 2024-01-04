import React from 'react';
import Navbar from '@/section/Navbar/Navbar';
import Title from '@/components/Titles/Heading';
import Footer from '@/section/Footer/Footer';
import ProjectList from '@/section/Projects/Projects';

export default function AboutSection() {
  return (
    <div>
      <Navbar/>
      <Title title="Projects" container_spacing='p-10 pb-1 pt-7 md:pr-20 md:pl-20'/>
      <ProjectList/>
      <Footer/>
    </div>
  )
}
