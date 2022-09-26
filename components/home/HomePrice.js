import useTranslation from "next-translate/useTranslation";
import React from "react";

function HomePrice() {
  const { t } = useTranslation();
  return (
    <section className="home__price">
      <div className="container">
        <h2 className="home__price-h2">{t("home:home-priceTitle")}</h2>
        <p className="home__price-descr">{t("home:home-priceDescr1")}</p>
        <br />
        <p className="home__price-descr">{t("home:home-priceDescr2")}</p>
        <br />
        <p className="home__price-descr">{t("home:home-priceDescr3")}</p>
      </div>
    </section>
  );
}

export default HomePrice;
