import Image from "next/image"
import SocialLink from "@/components/SocialMedia/SocialLink"
import Link from 'next/link'


export default function Hero() {
  return (
<div className="grid grid-cols-1 md:grid-cols-12 gap-2 mx-auto max-w-screen-xl lg:px-30 lg:space-x-8 p-10 md:p-20">
  <div className="col-span-12 md:col-span-3 flex justify-center">
      <Image       
        src="/assets/profile.webp"
        width={250}
        height={250}
        alt="Abdul Hakkeem P A"
        className="rounded-full"
        priority
      />
  </div>
  <div className="col-span-12 md:col-span-9 mt-10 md:mt-0 sm:mx-auto sm:flex sm:flex-col justify-center">
    <p className="text-xl text-3xl text-slate-300 font-semibold"><span className="text-white">Hey, I'm Abdul Hakkeem P A.</span> I'm a product enthusiast.</p>
    <p className="text-base text-slate-400 font-normal mt-2 md:text-justify">
      I’m a full-stack developer who loves to explore web technologies, artificial intelligence, and startups. I enjoy working in a startup environment and have a keen interest in AI. I’m also part of the executive committee at <Link href="https://gdg.community.dev/gdg-cloud-kochi/" target="_blank"  className="hover:text-white hover:underline  hover:underline-offset-4 transition-colors duration-200">Google Developer Groups, Cloud Kochi</Link>.
      <br></br> 
      <br></br> 
      Please contact me at <Link href="mailto:abdulhakkeempa2002@gmail.com" className="hover:text-white hover:underline  hover:underline-offset-4 transition-colors duration-200">abdulhakkeempa2002@gmail.com </Link>for any queries.
      <br></br> 
      <br></br> 

    </p>
    <div className="flex flex-col md:flex-row md:items-center gap-x-4 gap-y-5 mt-4">
      <SocialLink platform="github" iconPath="/social_icons/github.svg" text="abdulhakkeempa" link="https://github.com/abdulhakkeempa"/>
      <SocialLink platform="linkedin" iconPath="/social_icons/linkedin.svg" text="abdul-hakkeem-pa" link="https://www.linkedin.com/in/abdul-hakkeem-pa/"/>
      <SocialLink platform="twitter" iconPath="/social_icons/twitter.svg" text="abdulhakkeempa" link="https://twitter.com/abdulhakkeempa"/>
      <SocialLink platform="instagram" iconPath="/social_icons/instagram.svg" text="_.hakkeem_" link="https://www.instagram.com/_.hakkeem_"/>
    </div>
  </div>
</div>
  )  
}