import Image from 'next/image'
import Navbar from '@/section/Navbar/Navbar';
import Hero from '@/section/Hero/Hero';
import Title from '@/components/Titles/Heading';
import Projects from '@/section/Projects/Projects';
import Footer from '@/section/Footer/Footer';
import Blogs from '@/section/Blogs/blogs';
import GoogleAnalytics from "@bradgarropy/next-google-analytics"

export default function Home() {
  return (
    <div>
      <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      <Navbar/>
      <Hero/>
      <Title title="Blogs" container_spacing='p-10 pb-1 pt-7 md:pr-20 md:pl-20'/>
      <Blogs/>
      <Title title="Projects" container_spacing='p-10 pb-1 pt-7 md:pr-20 md:pl-20'/>
      <Projects n_display={4} />
      <Footer/>
    </div>
  )
}
