import Image from "next/image";
import React from "react";
import divider from "../../static/bg-title-line.png";
import homest1 from "../../static/ihowwork01.png";
import homest2 from "../../static/howwork02.jpg";
import homest3 from "../../static/howwork03.jpg";
import imgArr1 from "../../static/img-arrow-01.png";
import imgArr2 from "../../static/img-arrow-02.png";
import useTranslation from "next-translate/useTranslation";

function HomeStage() {
  let { t } = useTranslation();
  return (
    <section className="home__stage">
      <div className="home__stage-container">
        <h2 className="home__stage-h2">{t("home:home-stageTitle")}</h2>
        <div className="home__stage-imgdivider">
          <Image src={divider} width={122} height={12} />
        </div>
        <div className="home__stage-list">
          <div className="home__stage-item">
            <div className="home__stage-img">
              <Image src={homest1} width={200} height={200} />

              <span className="home__stage-number">01</span>
            </div>
            <p className="home__stage-descr">{t("home:home-stageDescr1")}</p>
          </div>
          <div className="home__stage-arr1"></div>
          <div className="home__stage-item">
            <div className="home__stage-img">
              <Image src={homest2} width={200} height={200} />
              <span className="home__stage-number">02</span>
            </div>
            <p className="home__stage-descr">{t("home:home-stageDescr2")}</p>
          </div>
          <div className="home__stage-arr2"></div>
          <div className="home__stage-item">
            <div className="home__stage-img">
              <Image src={homest3} width={200} height={200} />
              <span className="home__stage-number">03</span>
            </div>
            <p className="home__stage-descr">{t("home:home-stageDescr3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeStage;
