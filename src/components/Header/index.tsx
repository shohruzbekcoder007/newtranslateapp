import React, { useEffect, useState } from 'react'
import lang from "./language.json"
import { useDispatch } from 'react-redux'
import store from '../../redux/store'
import { useSelector } from 'react-redux'
const { setLanguage } = require('../../redux/action/languageActions')

export type AppDispatch = typeof store.dispatch
interface Language {
  contact_us: {
    uz: string,
    eng: string
  }
}
const language: Language = lang;

type Props = {}

export default function Header({ }: Props) {

  const lang: string = "" + useSelector<"uz"|"eng">((state: any) => state.language)
  const dispatch: AppDispatch = useDispatch()


  const changeLanguage = (_: React.MouseEvent<HTMLElement>, lang: string) => {
    dispatch(setLanguage(lang))
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
                <li onClick={(event: React.MouseEvent<HTMLElement>) => changeLanguage(event, "uz")}><a><img src={require("../../img/icons/uz.png")} alt="uz" /></a></li>
                <li onClick={(event: React.MouseEvent<HTMLElement>) => changeLanguage(event, "eng")}><a><img src={require("../../img/icons/uk.png")} alt="ru" /></a></li>
              </ul>
            </li>
            <li><a className="getstarted scrollto" href="#footer">{language.contact_us[lang]}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}