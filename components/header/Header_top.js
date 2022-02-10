import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faClock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../static/logo.png";
import Modal_callback from "./Modal_callback";
import Phone_dropdown from "./Phone_dropdown";
import Logomin from "../../static/logo-mn.png";

export default function Header_top() {
  const [logo, setLogo] = useState(false);
  const handleLogo = () => {
    if (window.matchMedia("(max-width: 500px)").matches) {
      setLogo(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleLogo);
  });
  return (
    <>
      <div className="header__top">
        <div className="header__container-top">
          <Link href="/">
            <a className="logo">
              <Image src={logo ? Logomin : Logo} />
            </a>
          </Link>

          <div className="header__emailDelivery">
            <div className="header__email">
              <FontAwesomeIcon icon={faEnvelope} color="#1176bc" />
              <p>info@aqualide.com.ua</p>
            </div>
            <div className="header__delivery">
              <FontAwesomeIcon icon={faTruck} color="#1176bc" />
              <p>Доставка по Харькову и области</p>
            </div>
          </div>
          <div className="header__phones">
            <Phone_dropdown />
            <div className="header__shedule-flex">
              <FontAwesomeIcon icon={faClock} color="#1176bc" />
              <p>ПН - СБ с 8:00 до 18:00 ч</p>
            </div>
          </div>
          <div className="header__modal-callback">
            <Modal_callback />
          </div>
        </div>
      </div>
    </>
  );
}
