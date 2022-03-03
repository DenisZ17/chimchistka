import Link from "next/link";
import React from "react";
import footerMenuList from "../static/data/footerMenuList";

function Myfooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__info">
            <h3 className="footer__info-title">Прачечная "Аквалайд"</h3>
            <div className="footer__divider"></div>
            <p className="footer__info-text">Освобождаем от лишних забот. </p>
            <p className="footer__info-text">
              Забудьте про стирку, чистку, сушку и глажку!
            </p>
            <p className="footer__info-text">Доставка по Харькову и области</p>
          </div>
          <div className="footer__contact">
            <h3 className="footer__contact-title">Контакты</h3>
            <div className="footer__divider"></div>
            <p className="footer__contact-item">
              г.Харьков, Lorem Ipsum Lorem Ipsum{" "}
            </p>
            <p className="footer__contact-item">+38 (066) 681-24-22 </p>
            <p className="footer__contact-item">info@aqualide.com.ua </p>
            <p className="footer__contact-item">ПН - СБ с 8:00 до 18:00 ч </p>
          </div>
          <div className="footer__menu">
            <h3 className="footer__menu-title">Меню</h3>
            <div className="footer__divider"></div>
            <div className="footer__menu-list">
              {footerMenuList.map((item) => (
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
