import Link from "next/link";
import React, { Component } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";

import Slider from "react-slick";
import withTranslation from "next-translate/withTranslation";
function ArrowPrev(props) {
  const { onClick } = props;
  return (
    <button type="button" className="slick-btn my-slick-prev" onClick={onClick}>
      <HiOutlineChevronLeft color="#1176bc" size="30px" />
    </button>
  );
}
function ArrowNext(props) {
  const { onClick } = props;
  return (
    <button type="button" className="slick-btn my-slick-next" onClick={onClick}>
      <HiOutlineChevronRight color="#1176bc" size="30px" />
    </button>
  );
}

class HomeSlider extends Component {
  render() {
    const { t } = this.props.i18n;

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <ArrowNext />,
      prevArrow: <ArrowPrev />,
    };
    return (
      <div className="home__slider">
        <div className="home__slider-container">
          <Slider {...settings}>
            <div className="home__slider-item">
              <div className="home__slider-location">
                <MdOutlineLocationOn color="#1176bc" size="25px" />
                &nbsp;
                <Link href="/contact">
                  <a>{t("home:home-sliderPunkt")}</a>
                </Link>
                <span className="w-2"></span>
                {t("home:home-sliderCharkov")}
              </div>
              <h1 className="home__slider-title">
                {t("home:home-sliderTitle")}
              </h1>
              <p className="home__slider-descr">{t("home:home-sliderDescr")}</p>
            </div>
            <div className="home__slider-item">
              <div className="home__slider-location">
                <MdOutlineLocationOn color="#1176bc" size="25px" />
                &nbsp;
                <Link href="/contact">
                  <a>{t("home:home-sliderPunkt")}</a>
                </Link>
                {t("home:home-sliderCharkov")}
              </div>
              <h1 className="home__slider-title">
                {t("home:home-sliderTitle")}
              </h1>
              <p className="home__slider-descr">{t("home:home-sliderDescr")}</p>
            </div>
          </Slider>
          <p className="home__slider-exdescr">{t("home:home-sliderExdescr")}</p>
          <div className="home__slider-wrapbtnflex">
            <div className="home__slider-wrapbtndeliv">
              <a href="#" className="home__slider-delivbtn">
                {t("home:home-sliderBtn")}
              </a>

              <p className="home__slider-btndescr">
                {t("home:home-sliderBtnDescr")}
              </p>
            </div>
            <div className="home__slider-wrapbtnorder">
              <a href="#" className="home__slider-orderbtn ">
                {t("home:home-sliderBtnOrder")}
              </a>

              <p className="home__slider-btndescr">
                {t("home:home-sliderBtnOrdDescr")}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withTranslation(HomeSlider);
