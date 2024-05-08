import React, { useEffect, useState } from 'react';
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Mainpage from './components/Pages/Landingpage/Mainpage'
import Buynowpage from './components/Pages/Buynow/Buynowpage'
// import FAQPage from './components/Faqs/Faqpage.jsx';
// import About from './components/About/About.jsx';
// import Earning from './components/Earning/Earning.jsx';
// import Steps from './components/Steps/Steps.jsx';
// import Usp from './components/USP/Usp.jsx';
// import Roadmap from './components/Roadmap/Roadmap.jsx';
// import Hero from './components/Hero/Hero.jsx';
// import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// gsap.registerPlugin(useGSAP);

function App() {


  useEffect(() => {

    // reveal

    // Select all sections
    const sections = document.querySelectorAll('[gsap="group"]');

    // Loop through each section
    sections.forEach(section => {
      // Select all reveal="frombottom" elements within the current section
      const revealElements = section.querySelectorAll('[reveal="frombottom"]');

      // Check if there are multiple reveal elements within the section
      if (revealElements.length > 1) {
        // Apply stagger effect to reveal elements within this section
        gsap.fromTo(revealElements, {
          y: '200px',
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.1, // Stagger between elements
          scrollTrigger: {
            trigger: revealElements, // Use the section as the trigger
            //markers: true,
            start: 'top 80%', // Start when the section is 10% visible
            end: 'bottom bottom'
          }
        });
      } else {
        // If there's only one reveal element within the section, animate it without stagger
        gsap.fromTo(revealElements, {
          y: '200px',
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: revealElements, // Use the reveal element as the trigger
            //markers: true,
            start: 'top 80%', // Start when the element is 10% visible
            end: 'bottom bottom'
          }
        });
      }
    });


    // Reavel end


    const revealfgrow = document.querySelectorAll('[reveal="grow"]');
    revealfgrow.forEach((element1) => {
      gsap.fromTo(element1, {
        scale: '0.6',
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: element1,
          //markers: true,
          start: 'top 95%', // Start when the element is 10% visible
          end: 'bottom bottom'
        }
      });
    });


  }, []);


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} exact />
        <Route path="/home" element={<Mainpage />} exact />
        <Route path="/buy-page" element={<Buynowpage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
