import React, { useEffect } from 'react';
import Header from './components/Header'
import Hero from './components/Hero';
import Footer from './components/Footer';
import Main from './components/Main';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header/>
      <Hero/>
      <Main/>
      <Footer/>
      {/* <div id="preloader"></div> */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
}

export default App;
