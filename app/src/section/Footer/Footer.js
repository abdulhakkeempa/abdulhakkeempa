import SocialLink from "@/components/SocialMedia/SocialLink";
import Link from 'next/link'

export default function Footer(){
  return(
    <div className="mx-auto max-w-screen-xl lg:px-30 p-10 md:pl-20 md:pr-20">
      <div className="flex justify-between">
        <div>
          <Link href='/about' className="text-sm md:text-base">
            &#169; Abdul Hakkeem P A
          </Link>
        </div>
        <div className="flex md:items-center gap-x-2 md:gap-x-4 ">
          <SocialLink platform="github" iconPath="/social_icons/github.svg" text="" link="https://github.com/abdulhakkeempa"/>
          <SocialLink platform="linkedin" iconPath="/social_icons/linkedin.svg" text="" link="https://www.linkedin.com/in/abdul-hakkeem-pa/"/>
          <SocialLink platform="twitter" iconPath="/social_icons/twitter.svg" text="" link="https://twitter.com/abdulhakkeempa"/>
          <SocialLink platform="instagram" iconPath="/social_icons/instagram.svg" text="" link="https://www.instagram.com/_.hakkeem_"/>
        </div>
      </div>
    </div>
  );
}