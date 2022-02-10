import Link from "next/link";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import Header_cart from "./Header_cart";

export default function Header_bottom() {
  const [click, setClick] = useState(false);
  const [arrowClick, setArrowClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    var h_header = 117;
    const scrollY = window.scrollY;

    if (scrollY >= h_header) {
      return setScroll(true);
    } else if (scroll < h_header) setScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className={scroll ? "header__bottom  sticky" : "header__bottom"}>
        <div className="header__container">
          <div className="header__menu menu">
            <div
              onClick={() => setClick(!click)}
              className={click ? "menu__icon _active" : "menu__icon"}
            >
              <span></span>
            </div>
            <nav className={click ? "menu__body _active" : "menu__body"}>
              <ul className="menu__list">
                <li>
                  <Link href="/">
                    <a className="menu__link">Главная</a>
                  </Link>
                </li>
                <li
                  onMouseEnter={() => setArrowClick(true)}
                  onMouseLeave={() => setArrowClick(false)}
                  className={arrowClick ? "_active" : " "}
                >
                  <Link href="/service">
                    <a className="menu__link">Услуги</a>
                  </Link>

                  <span className="menu__arrow">
                    <FontAwesomeIcon
                      icon={arrowClick ? faChevronUp : faChevronDown}
                      color={"#fff"}
                      size={"1x"}
                    />
                  </span>

                  <ul className="sub-menu__list grid grid-cols-3 gap-3">
                    <li>
                      <Link href="/service/detskayaodezhda">
                        <a className="sub-menu__link" href="">
                          Детская одежда
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/puhoviki">
                        <a className="sub-menu__link" href="">
                          Пуховики
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/specodezhda">
                        <a className="sub-menu__link" href="">
                          Спецодежда
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/myagkayamebel">
                        <a className="sub-menu__link" href="">
                          Мягкая мебель
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/detskayaodezhda">
                        <a className="sub-menu__link" href="">
                          Детская одежда
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/puhoviki">
                        <a className="sub-menu__link" href="">
                          Пуховики
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/specodezhda">
                        <a className="sub-menu__link" href="">
                          Спецодежда
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/myagkayamebel">
                        <a className="sub-menu__link" href="">
                          Мягкая мебель
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/detskayaodezhda">
                        <a className="sub-menu__link" href="">
                          Детская одежда
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/puhoviki">
                        <a className="sub-menu__link" href="">
                          Пуховики
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/specodezhda">
                        <a className="sub-menu__link" href="">
                          Спецодежда
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/myagkayamebel">
                        <a className="sub-menu__link" href="">
                          Мягкая мебель
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/detskayaodezhda">
                        <a className="sub-menu__link" href="">
                          Детская одежда
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/puhoviki">
                        <a className="sub-menu__link" href="">
                          Пуховики
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/specodezhda">
                        <a className="sub-menu__link" href="">
                          Спецодежда
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/myagkayamebel">
                        <a className="sub-menu__link" href="">
                          Мягкая мебель
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/detskayaodezhda">
                        <a className="sub-menu__link" href="">
                          Детская одежда
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/puhoviki">
                        <a className="sub-menu__link" href="">
                          Пуховики
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/specodezhda">
                        <a className="sub-menu__link" href="">
                          Спецодежда
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/myagkayamebel">
                        <a className="sub-menu__link" href="">
                          Мягкая мебель
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/detskayaodezhda">
                        <a className="sub-menu__link" href="">
                          Детская одежда
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/puhoviki">
                        <a className="sub-menu__link" href="">
                          Пуховики
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/specodezhda">
                        <a className="sub-menu__link" href="">
                          Спецодежда
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/myagkayamebel">
                        <a className="sub-menu__link" href="">
                          Мягкая мебель
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/promotions">
                    <a className="menu__link" href="">
                      Акции
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/corporativnymclientam">
                    <a className="menu__link" href="">
                      Корпоративным клиентам
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/oplatadostavka">
                    <a className="menu__link" href="">
                      Оплата и доставка
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="menu__link" href="">
                      Контакты
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <Header_cart />
        </div>
      </div>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `'use strict'
    var mediaQuery = window.matchMedia("(max-width: 768px)");
if (mediaQuery.matches) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}
  `,
        }}
      />
    </>
  );
}
