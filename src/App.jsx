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


function App() {

  

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
