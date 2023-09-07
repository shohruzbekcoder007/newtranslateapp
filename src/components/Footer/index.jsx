import React from 'react'
import { useTranslation } from "react-i18next";

export default function Footer({ }) {

    const { t } = useTranslation();

    return (
        <footer id="footer">

            <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h4>{t('footer_title1')}</h4>
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Yuborish" />
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