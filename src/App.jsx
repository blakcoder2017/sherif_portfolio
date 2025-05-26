import React, { useEffect } from 'react';

import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import ExpertiseSection from './components/ExpertSection';
import History from './components/History';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

import { initGA, trackPageView } from './analytics';


function App() {
  useEffect(() => {
    initGA();
    trackPageView();
  }
  , []);
  return (
    <>
      < Header />
      <Hero />
      <section id='expertise'>
        <ExpertiseSection />
      </section> 
      <br />
      <section id='experience'>
        <History />
      </section>  
      <section id='projects'>
        <Projects />
      </section> 
        <section id='contact'>
        <ContactMe />
      </section> 
      <Footer />
     </>
  )
}

export default App
