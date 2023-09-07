import React from 'react'
import lang from "./language.json"
import { useSelector } from 'react-redux'
import Translate from '../Translate'

interface Language {
  section_title1: {
    uz: string,
    eng: string
  },
  message_user: {
    uz: string,
    eng: string
  },
  message_example: {
    uz: string,
    eng: string
  },
  message_example_cyber: {
    uz: string,
    eng: string
  },
  cyber_use_cases: {
    uz: string,
    eng: string
  },
  cyber_use_cases1: {
    uz: string,
    eng: string
  },
  cyber_use_cases2_h1: {
    uz: string,
    eng: string
  },
  cyber_use_cases2: {
    uz: string,
    eng: string
  },
  cyber_use_cases3_h1: {
    uz: string,
    eng: string
  },
  cyber_use_cases3: {
    uz: string,
    eng: string
  },
  cyber_use_cases4_h1: {
    uz: string,
    eng: string
  },
  cyber_use_cases4: {
    uz: string,
    eng: string
  },
  cyber_use_cases5_h1: {
    uz: string,
    eng: string
  },
  cyber_use_cases5: {
    uz: string,
    eng: string
  },
  cyber_use_cases6_h1: {
    uz: string,
    eng: string
  },
  cyber_use_cases6: {
    uz: string,
    eng: string
  },
  cyber_use_cases7_h1: {
    uz: string,
    eng: string
  },
  cyber_use_cases7: {
    uz: string,
    eng: string
  },
  testing_nima: {
    uz: string,
    eng: string
  },
  use_case1_h1: {
    uz: string,
    eng: string
  },
  use_case1: {
    uz: string,
    eng: string
  },
  use_case2_h1: {
    uz: string,
    eng: string
  },
  use_case2: {
    uz: string,
    eng: string
  },
  message_user_cyber: {
    uz: string,
    eng: string
  }
}

const language: Language = lang;

type Props = {}

export default function Main({}: Props) {

  const lang: string = "" + useSelector<"uz"|"eng">((state: any) => state.language)

  return (
    <main id="main">    
    <div id="service" className="service-custom">
      <div className="section-title">
        <h2>{language.section_title1[lang]}</h2>
      </div>
      <div className="col-lg-6 messaging-section">
        <div className="messages-container">
          <div className="message-home"> 
            <div className="message-user">
            {language.message_user[lang]}
            </div>
            <div className="message-text message-text-response">
              {language.message_example[lang]}
            </div>
          </div>
          <div className="message">
            <div className="message-user">
              {language.message_user_cyber[lang]}
            </div>
            <div className="message-text message-text-response">
              {language.message_example_cyber[lang]}
            </div>
          </div>
        </div>
        <div className="message-input">
          <button className="record-btn"><i className="bi bi-mic"></i></button>
        </div>
      </div> 
    </div>
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>{language.cyber_use_cases[lang]}</h2>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon-1"><img src={require('../../img/icons/checklist 1.png')} alt=""/></div>
              <h2>{language.cyber_use_cases2_h1[lang]}</h2>
              <p>{language.cyber_use_cases2[lang]}</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="500">
            <div className="icon-box">
              <div className="icon-5"><img src={require('../../img/icons/5 1.png')} alt=""/></div>
              <h2>{language.cyber_use_cases3_h1[lang]}</h2>
              <p>{language.cyber_use_cases3[lang]}</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon-3"><img className="services-icon" src={require('../../img/icons/icon-headset.png')} alt=""/></div>
              <h2>{language.cyber_use_cases4_h1[lang]}</h2>
              <p>{language.cyber_use_cases4[lang]}</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon-4"><img className="services-icon" src={require('../../img/icons/checklist 2.png')} alt=""/></div>
              <h2>{language.cyber_use_cases5_h1[lang]}</h2>
              <p>{language.cyber_use_cases5[lang]}</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="600">
            <div className="icon-box blur-image">
              <div className="icon-6"><img className="services-icon" src={require('../../img/icons/icon-lan.png')} alt=""/></div>
              <h2>{language.cyber_use_cases6_h1[lang]}</h2>
              <p>{language.cyber_use_cases6[lang]}</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon-2"><img className="services-icon" src={require('../../img/icons/icon-write.png')} alt=""/></div>
              <h2>{language.cyber_use_cases7_h1[lang]}</h2>
              <p>{language.cyber_use_cases7[lang]}</p>
            </div>
          </div>  
        </div>
      </div>
    </section>
    <Translate/>
    <section id="skills" className="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-6  order-2 order-lg-1 hero-img">
            <img src={require('../../img/man-working.png')} className="img-fluid animated" alt=""/>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300" className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-2 text-info">
            <h1>{language.use_case1_h1[lang]}</h1>
            <p>{language.use_case1[lang]}</p>
          </div>
        </div>
      </div>
    </section>
    <section id="skill" className="skills">
      <div className="container">
        <div className="row">
          <div data-aos="zoom-in" data-aos-delay="300" className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 text-info">
            <h1>{language.use_case2_h1[lang]}</h1>
            <p>{language.use_case2[lang]}</p>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src={require('../../img/man-working-2.png')} className="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}