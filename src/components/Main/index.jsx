import React from 'react'
import Translate from '../Translate'


export default function Main({}) {

  return (
    <main id="main">    
    <div id="service" className="service-custom">
      <div className="section-title">
        <h2>Ovozli xabarni matnli ko'rinishga aylantirish</h2>
      </div>
      <div className="col-lg-6 messaging-section">
        <div className="messages-container">
          <div className="message-home"> 
            <div className="message-user">
                Siz
            </div>
            <div className="message-text message-text-response">
                Salom! Menga CYBER.AI haqida ma'lumot ber!
            </div>
          </div>
          <div className="message">
            <div className="message-user">
                CYBER.AI
            </div>
            <div className="message-text message-text-response">
                Salom! CYBER.AI Cyberpark tomonidan ishlab chiqilgan, bir nechta sun'iy intellekt modeli jamlanmasi.
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
          <h2>Qo'llanish mumkin bo'lgan sohalar</h2>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon-1"><img src={require('../../img/icons/checklist 1.png')} alt=""/></div>
              <h2>Suhbatlarni yozib borish</h2>
              <p>Bizning STT modelimizni suhbatlaringizni transkripsiya qilish uchun ishlatishingiz mumkin. Bu ishtirokchilarga qaydnomalarni yozishdan kora, muhokama qilinayotgan suhbat va fikrlarga e'tibor qaratish imkonini beradi.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="500">
            <div className="icon-box">
              <div className="icon-5"><img src={require('../../img/icons/5 1.png')} alt=""/></div>
              <h2>Audio qidiruv tizimlarini optimallashtirish</h2>
              <p>Ushbu modelizmiz orqali, siz o'z platforfangizdagi qidiruv tizimini yaxshilash imkoniyatiga ega bo'lasiz</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon-3"><img className="services-icon" src={require('../../img/icons/icon-headset.png')} alt=""/></div>
              <h2>Call center transkripsiyasi</h2>
              <p>Bizning STT modelimi, mijozlarga xizmat qo'ng'iroqlarini transkripsiya qilish uchun ishlatilishi mumkin. Bu orqali kompaniyalar mijozlariga xizmat ko'rsatish aloqalarini yaxshilash imkonini beradi.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon-4"><img className="services-icon" src={require('../../img/icons/checklist 2.png')} alt=""/></div>
              <h2>{'language.cyber_use_cases5_h1[lang]'}</h2>
              <p>{'language.cyber_use_cases5[lang]'}</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="600">
            <div className="icon-box blur-image">
              <div className="icon-6"><img className="services-icon" src={require('../../img/icons/icon-lan.png')} alt=""/></div>
              <h2>{'language.cyber_use_cases6_h1[lang]'}</h2>
              <p>{'language.cyber_use_cases6[lang]'}</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon-2"><img className="services-icon" src={require('../../img/icons/icon-write.png')} alt=""/></div>
              <h2>{'language.cyber_use_cases7_h1[lang]'}</h2>
              <p>{'language.cyber_use_cases7[lang]'}</p>
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
            <h1>{'language.use_case1_h1[lang]'}</h1>
            <p>{'language.use_case1[lang]'}</p>
          </div>
        </div>
      </div>
    </section>
    <section id="skill" className="skills">
      <div className="container">
        <div className="row">
          <div data-aos="zoom-in" data-aos-delay="300" className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 text-info">
            <h1>{'language.use_case2_h1[lang]'}</h1>
            <p>{'language.use_case2[lang]'}</p>
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