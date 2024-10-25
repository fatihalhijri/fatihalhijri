import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Project from "@/components/Project";
import Service from "@/components/Service";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useRouter } from "next/router";

const Homepage = () => {
  const [showNav,setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  useEffect(()=> {
    AOS.init({
      duration:1000,
      easing:'ease',
      once:true,
      anchorPlacement:'top-bottom'
    })
  })

  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes('#')) {
      const sectionId = router.asPath.split('#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router.asPath]);

  return (
    <div className="overflow-hidden  ">
      <NavMobile showNav={showNav} closeNav ={closeNavHandler} />
      <Nav open={showNavHandler} />
      <Hero/>
      <About/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Homepage;
