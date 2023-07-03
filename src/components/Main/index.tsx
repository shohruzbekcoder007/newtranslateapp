import React from 'react'

type Props = {}

export default function Main({}: Props) {
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
              Salom! CYBER.AI Cyberpark tomonidan ishlab chiqilgan, bir nechta sun'iy intellekt modeli jamlanmas.
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
              <p>Bizning STT modelimizni suhbatlaringizni transkripsiya qilish uchun ishlatishingiz mumkin. Bu ishtirokchilarga qaydnomalarni yozishdan ko'ra, muhokama qilinayotgan 
                suhbat va fikrlarga e'tibor qaratish imkonini beradi.</p>
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
              <p>Bizning STT modelimi,  mijozlarga xizmat qo'ng'iroqlarini transkripsiya qilish uchun ishlatilishi mumkin. 
                Bu orqali kompaniyalar mijozlariga xizmat ko'rsatish aloqalarini yaxshilash imkonini beradi.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon-4"><img className="services-icon" src={require('../../img/icons/checklist 2.png')} alt=""/></div>
              <h2>Jonli tadbirlar uchun avtomatlashtirilgan subtitr</h2>
              <p>Bu xizmat konferensiyalar uchun jonli subtitr yaratish uchun ishlatilishi mumkin, bu esa imkoniyati cheklangan yoki eshitish 
                qobiliyati past bo'lgan ishtirokchilarga taqdimotlarni kuzatib borish imkonini beradi</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="600">
            <div className="icon-box blur-image">
              <div className="icon-6"><img className="services-icon" src={require('../../img/icons/icon-lan.png')} alt=""/></div>
              <h2>Til o'rganish</h2> 
              <p>Nutqni aniqlash texnologiyasi, real vaqt rejimida nutqni bir tildan ikkinchi tilga tarjima qilish imkonini beradi.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon-2"><img className="services-icon" src={require('../../img/icons/icon-write.png')} alt=""/></div>
              <h2>Diktant</h2>
              <p>Bizning STT modelimiz, foydalanuvchilarga elektron pochta xabarlari, 
                hisobotlar va boshqa audio xabarlarni matn ko'rinishiga o'girishga yordam beradi.</p>
            </div>
          </div>  
        </div>
      </div>
    </section>
    <section className="container translator-design" id="translation">
      <div className="section-title">
        <h2>CYBER.AI tarjimon</h2>
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
            <h1>Uy jihozlarini ovozli xabar orqali avtomatlashtirish</h1>
            <p>Bizning STT modelimiz, uyingizni ovozli buyruqlar bilan avtomatlashtirishn orqali, chiroqlar, termostatlar kabi qurilmalarni boshqarishga imkon beradi. 
              Energiya samaradorligini oshirish, xavfsizlikni yaxshilash va qulaylik kabi bir qator afzalliklarni beruvchi ushbu ximzt, so'nggi yillarda 
              uylarni avtomatlashtirish tizimlarini ommalashishiha sabab bo'lmoqda.             
              Ushbu tizimlar odatda smartfon yoki planshet yordamida masofadan boshqarilishi mumkin bo'lgan bir qator aqlli qurilmalarni o'z ichiga oladi, 
              foydalanuvchilarga dunyoning istalgan nuqtasidan chiroqlarni yoqish, termostatni sozlashga ruxsat beradi.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="skill" className="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 text-info">
            <h1>Ta'limda nutqni aniqlash</h1>
            <p>Nutqni aniqlash texnologiyasi, o'quv ehtiyojlari keng bo'lgan talabalarni qo'llab-quvvatlash uchun maxsus ta'limda tobora ko'proq foydalanilmoqda. 
              Diktant dasturi va ovozli xabardan matngacha bo'lgan jarayonlar, 
              barcha talabalar uchun o'rganishni yanada qulayroq, qiziqarli va sifatli qilishga yordam beradi.
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