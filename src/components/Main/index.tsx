import React from 'react'

type Props = {}

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
  cyber_tarjimon: {
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
  }
}

export default function Main({}: Props) {
  return (
    <main id="main">    
    <div id="service" className="service-custom">
      <div className="section-title">
        <h2>{language.section_title1.uz}</h2>
      </div>
      <div className="col-lg-6 messaging-section">
        <div className="messages-container">
          <div className="message-home"> 
            <div className="message-user">
            {language.message_user.uz}
            </div>
            <div className="message-text message-text-response">
            {language.message_example.uz}
            </div>
          </div>
          <div className="message">
            <div className="message-user">
            {language.message_user_cyber.uz}
            </div>
            <div className="message-text message-text-response">
            {language.message_example_cyber.uz}
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
          <h2>{language.cyber_use_cases.uz}</h2>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon-1"><img src={require('../../img/icons/checklist 1.png')} alt=""/></div>
              <h2>{language.cyber_use_cases2_h1.uz}</h2>
              <p>{language.cyber_use_cases2.uz}</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="500">
            <div className="icon-box">
              <div className="icon-5"><img src={require('../../img/icons/5 1.png')} alt=""/></div>
              <h2>{language.cyber_use_cases3_h1.uz}</h2>
              <p>{language.cyber_use_cases3.uz}</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon-3"><img className="services-icon" src={require('../../img/icons/icon-headset.png')} alt=""/></div>
              <h2>{language.cyber_use_cases4_h1.uz}</h2>
              <p>{language.cyber_use_cases4.uz}</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon-4"><img className="services-icon" src={require('../../img/icons/checklist 2.png')} alt=""/></div>
              <h2>{language.cyber_use_cases5_h1.uz}</h2>
              <p>{language.cyber_use_cases5.uz}</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="600">
            <div className="icon-box blur-image">
              <div className="icon-6"><img className="services-icon" src={require('../../img/icons/icon-lan.png')} alt=""/></div>
              <h2>{language.cyber_use_cases6_h1.uz}</h2>
              <p>{language.cyber_use_cases6.uz}</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon-2"><img className="services-icon" src={require('../../img/icons/icon-write.png')} alt=""/></div>
              <h2>{language.cyber_use_cases7_h1.uz}</h2>
              <p>{language.cyber_use_cases7.uz}</p>
            </div>
          </div>  
        </div>
      </div>
    </section>
    <section className="container translator-design" id="translation">
      <div className="section-title">
        <h2>{language.cyber_tarjimon.uz}</h2>
      </div>
      <div className="main-translation">
        <div className="title-translation">
          <button>English</button>
          <button><i className="bi bi-arrow-left-right"></i></button>
          <button>Russian</button>
        </div>
        <div className="inner-translation">
          <div className="left-side col-lg-6">
            <div className="cancel-text">
              <div className="text-input">
                <textarea 
                // spellcheck="false" 
                className="from-text" placeholder="What is testing?">What is testing?</textarea>
              </div>
              <button><img src={require('../../img/icons/cancel.png')} alt=""/></button>
            </div>
            <div className="box-panel box-panel_bottom">
              <div className="box-panel-container box-panel-container_left state-fadeaway">
                <div className="box-button box-button-hidden">
                 <button> <i className="bi bi-volume-up-fill"></i></button>
                 <button> <i className="bi bi-mic-fill"></i></button>
                 <button> <i className="bi bi-clipboard"></i></button>
                </div>
              </div>
              <div className="box-panel-container box-panel-container_right">
                <div id="textCounter"  className="src-textCounter state-unselectable state-fadeaway">
                  <span id="textCounterContent">2</span>
                  <span>/</span>
                  <span id="textCounterLimit">1000</span>
                  <button><i className="bi bi-keyboard"></i></button>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
          <div className="right-side col-lg-6">
            <div className="copy-text">
              <div className="text-input">
                <textarea 
                // spellcheck="false" 
                // readonly 
                disabled className="to-text" placeholder="Sinov nima?">Sinov nima?</textarea>
              </div>
              <button><img src={require('../../img/icons/copy.png')} alt=""/></button>
            </div>
            <div className="box-panel box-panel_bottom">
              <div className="box-panel-container box-panel-container_left state-fadeaway">
                <div className="box-button box-button-hidden">
                 <button className="volume"> <i className="bi bi-volume-up-fill"></i></button>
                </div>
              </div>
              <div className="box-panel-container box-panel-container_right">
                <div id="textCounter" className="src-textCounter state-unselectable state-fadeaway">
                  <button className="volume"><i className="bi bi-bookmark-star"></i></button>
                  <button className="volume"><i className="bi bi-share-fill"></i></button>
                 <div className="hand">
                  <button className="volume-hand"><i className="bi bi-hand-thumbs-up-fill"></i></button>
                  <button className="volume-hand"><i className="bi bi-hand-thumbs-down-fill"></i></button>   
                 </div>
                </div>
              </div>
              <div>
              </div>
            </div>      
          </div>
        </div>
        </div>
    </section>
    <section id="skills" className="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-6  order-2 order-lg-1 hero-img">
            <img src={require('../../img/man-working.png')} className="img-fluid animated" alt=""/>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-2 text-info">
            <h1>{language.use_case1_h1.uz}</h1>
            <p>{language.use_case1.uz}</p>
          </div>
        </div>
      </div>
    </section>
    <section id="skill" className="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 text-info">
          <h1>{language.use_case2_h1.uz}</h1>
            <p>{language.use_case2.uz}</p>
            </p>
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