import React from 'react'
import { useTranslation } from "react-i18next";

export default function Header({ }) {

    const { t, i18n } = useTranslation();

    const changeLanguage = (_, lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><a href="index.html">Cyber.AI</a></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li className="dropdown">
                            <a><img src={require("../../img/icons/uz.png")} alt="uz" style={{ display: "inline-block", width: "25px" }} /></a>
                            <ul className="lang-img">
                                <li onClick={(event) => changeLanguage(event, "uz")}><a><img src={require("../../img/icons/uz.png")} alt="uz" /></a></li>
                                <li onClick={(event) => changeLanguage(event, "en")}><a><img src={require("../../img/icons/uk.png")} alt="ru" /></a></li>
                            </ul>
                        </li>
                        <li><a className="getstarted scrollto" href="#footer">{t('contact_us')}</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}