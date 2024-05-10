import React from 'react';
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Mainpage from './components/Pages/Landingpage/Mainpage'
import Buynowpage from './components/Pages/Buynow/Buynowpage'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Privacypolicy from './components/Pages/Privacypolicy/Privacypolicy.jsx';
import Termspage from './components/Pages/Termspage/Termspage.jsx';
gsap.registerPlugin(useGSAP);

function App() {

  useGSAP(() => {
   

    gsap.utils.toArray(".section-tag").forEach(sectionTag=>{
      gsap.fromTo(sectionTag,{
        y:200,
        opacity:0,
      },{
        y:0,
        opacity:1,
        rotation:0,
        duration:0.5,
        delay:0,
        scrollTrigger: {
          trigger: sectionTag,
          start: 'top bottom-=20%',
          end: 'bottom center+=20%',
          markers:{startColor: "yellow", endColor: "yellow"}
        }
      })
    })

    gsap.utils.toArray("h2").forEach(h2=>{
      gsap.fromTo(h2,{
        y:200,
        opacity:0,
      },{
        y:0,
        opacity:1,
        rotation:0,
        duration:0.5,
      
        scrollTrigger: {
          trigger: h2,
          start: 'top bottom-=25%',
          end: 'bottom center+=25%',
          markers:{startColor: "green", endColor: "green"}
        
        },
       
      })
    })

    gsap.utils.toArray("[contentwrap]").forEach(contentwrap=>{
      gsap.fromTo(contentwrap,{
        y:200,
        opacity:0,
      },{
        y:0,
        opacity:1,
        rotation:0,
        duration:0.5,
        
       
        // scrollTrigger:contentwrap,
        scrollTrigger: {
          trigger: contentwrap,
          start: 'top bottom-=30%',
          end: 'bottom center+=30%',
          markers:true,},
        
        
      })
    })
 
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} exact />
        <Route path="/buy-page" element={<Buynowpage />} />
        <Route path="/privacy-policy-page" element={<Privacypolicy />} />
        <Route path="/terms-page" element={<Termspage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
