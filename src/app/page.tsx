//import Image from "next/image";

import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCards from "@/components/TestimonialCards";
import UpcommingWebinar from "@/components/UpcommingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased">
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChooseUs/>
        <TestimonialCards/>
        <UpcommingWebinar/>
        <Instructor/>
        <Footer/>
    </main>
   
  );
}
//antialiased used for smooth front
