import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Hero({ }) {

    const { t } = useTranslation();

    return (
        <section id="hero" className="d-flex align-items-center">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                        <h1>{t('hero_top')}</h1>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <a href="#service" className="btn-get-started scrollto">{t('hero_bottom')}</a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                        <img src={require('../../img/Saly-19 (5).png')} className="img-fluid-custom animated" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}