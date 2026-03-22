import { useEffect } from 'react';
import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Navbar from './common/Navbar';




function App() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);
 
  return (
    <>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
     
      
      
      

    </>
  );
}

export default App;
