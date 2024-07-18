import Main from "@/components/Home/page";
import Center from "@/components/Center/page";
import Projects from "@/components/projects/page";
import Hero from "@/components/Hero/page";
import Image from "next/image";
import Skills from "@/components/Skills/page";
import Contact from "@/components/Contact/page";
// import Footer from "@/components/Footer/page";



export default function Home() {
  return (
   <>
    <Main/>
    <Hero/>
    <Skills/>
    <Center/>
    <Projects/>
    {/* <Footer/> */}
    <Contact/>

   </>
  );
}
