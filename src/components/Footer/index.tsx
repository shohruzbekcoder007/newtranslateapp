import React from 'react'
import lang from "./language.json"
import { useSelector } from 'react-redux';

interface Language {
  footer_title1: {
    uz: string,
    eng: string
  }
}

const language: Language = lang;

type Props = {}

export default function Footer({}: Props) {

  const lang: string = "" + useSelector<"uz"|"eng">((state: any) => state.language)

  return (
    <footer id="footer">

    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>{language.footer_title1[lang]}</h4>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Yuborish"/>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="container footer-bottom clearfix">
      <div className="copyright">
        &copy; Copyright <strong><span>Cyber Park LLC</span></strong>. Barcha huquqlar himoyalangan
      </div>
      <div className="credits">
        Designed by <a href="https://cyberpark.uz">Cyber Team</a>
      </div>
    </div>
  </footer>
  )
}