import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import divider from "../../static/bg-title-line.png";

function HomePhoneForm() {
  let { t } = useTranslation();
  return (
    <section className="home__phone">
      <div className="home__phone-container">
        <h2 className="home__phone-h2">{t("home:home-phoneTitle")}</h2>
        <div className="home__phone-imgdivider">
          <Image src={divider} width={122} height={12} />
        </div>
        <p className="home__phone-descr">{t("home:home-phoneDescr")}</p>
        <form className="home__phone-form">
          <input type="tel" placeholder="Ваш номер телефона" required />
          <button type="button">{t("home:home-phoneBtn")}</button>
        </form>
      </div>
    </section>
  );
}

export default HomePhoneForm;
