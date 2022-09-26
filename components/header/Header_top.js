import Link from "next/link";
import Image from "next/image";
import Logo from "../../static/logo.png";
import Phone_dropdown from "./Phone_dropdown";
import { FaClock, FaEnvelope, FaTruck } from "react-icons/fa";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import flagRu from "/static/flag-ru.png";
import flagEn from "/static/flag-en.png";
import flagUa from "/static/flag-uk.png";

export default function Header_top() {
  let { t } = useTranslation();
  return (
    <>
      <div className="header__top">
        <div className="header__container-top">
          <Link href="/">
            <a className="logo">
              <Image src={Logo} />
            </a>
          </Link>

          <div className="header__emailDelivery">
            <div className="header__email">
              <FaEnvelope color="#1176bc" />
              <p>info@aqualide.com.ua</p>
            </div>
            <div className="header__delivery">
              <FaTruck color="#1176bc" />

              <p>{t("common:header-top-delivery")}</p>
            </div>
          </div>
          <div className="header__phones">
            <Phone_dropdown />
            <div className="header__shedule-flex">
              <FaClock color="#1176bc" />

              <p>{t("common:header-top-time")}</p>
            </div>
          </div>
          <div className="header__multi-lingual">
            <button onClick={async () => await setLanguage("uk")}>
              <Image src={flagUa} width={20} height={20} alt="flag uk" />
            </button>
            <button
              className="mx-3"
              onClick={async () => await setLanguage("en")}
            >
              <Image src={flagEn} width={20} height={20} alt="flag en" />
            </button>

            <button onClick={async () => await setLanguage("ru")}>
              <Image src={flagRu} width={20} height={20} alt="flag ru" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
