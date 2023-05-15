import React from 'react'
import lang from "./language.json"

interface Language {
  top: {
    uz: string,
    eng: string
  },
  bottom: {
    uz: string,
    eng: string
  }
}
const language: Language = lang;

type Props = {}

export default function Hero({}: Props) {
  return (
    <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>{language.top.uz}</h1>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#service" className="btn-get-started scrollto">{language.bottom.uz}</a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src={require('../../img/Saly-19 (5).png')} className="img-fluid-custom animated" alt=""/>
        </div>
      </div>
    </div> 

  </section>
  )
}