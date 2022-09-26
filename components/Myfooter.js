import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";

function Myfooter() {
  let { t } = useTranslation();
  const footMenu = t("common:footer-menuArr", {}, { returnObjects: true });
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__info">
            <h3 className="footer__info-title">{t("common:footer-name")}</h3>
            <div className="footer__divider"></div>
            <p className="footer__info-text">{t("common:footer-info1")} </p>
            <p className="footer__info-text">{t("common:footer-info2")}</p>
            <p className="footer__info-text">{t("common:footer-info3")}</p>
          </div>
          <div className="footer__contact">
            <h3 className="footer__contact-title">
              {t("common:footer-contact")}
            </h3>
            <div className="footer__divider"></div>
            <p className="footer__contact-item">
              {t("common:footer-addres")}, Lorem Ipsum Lorem Ipsum{" "}
            </p>
            <p className="footer__contact-item">+38 (066) 681-24-22 </p>
            <p className="footer__contact-item">info@aqualide.com.ua </p>
            <p className="footer__contact-item">{t("common:footer-time")}</p>
          </div>
          <div className="footer__menu">
            <h3 className="footer__menu-title">{t("common:footer-menu")}</h3>
            <div className="footer__divider"></div>
            <div className="footer__menu-list">
              {footMenu.map((item) => (
                <Link href={item.link}>
                  <a className="footer__menu-link">{item.title}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Myfooter;
