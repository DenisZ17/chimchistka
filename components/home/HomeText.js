import useTranslation from "next-translate/useTranslation";
import React from "react";

function HomeText() {
  let { t } = useTranslation();
  return (
    <section className="home__text">
      <div className="container">
        <h2 className="home__text-h2">{t("home:home-textTitle")}</h2>
        <p className="home__text-descr">{t("home:home-textDescr")}</p>
      </div>
    </section>
  );
}

export default HomeText;
