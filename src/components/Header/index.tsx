import React from 'react'
import lang from "./language.json"

interface Language {
  contact_us: {
    uz: string,
    eng: string
  }
}
const language: Language = lang;

type Props = {}

export default function Header({}: Props) {
  return (
    <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="index.html">Cyber.AI</a></h1>
      <nav id="navbar" className="navbar">
        <ul>
          <li className="dropdown">
            <a href="#"><i className="bi bi-globe"></i></a>
            <ul className="lang-img">
              <li><a href="index.html"><img src="./assets/img/icons/uz.png" alt="uz"/></a></li>
              <li><a href="index.html"><img src="./assets/img/icons/uk.png" alt="ru"/></a></li>
            </ul>
          </li>
          <li><a className="getstarted scrollto" href="#footer">{language.contact_us.uz}</a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}