import Link from "next/link";
import React, { Component } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";

import Slider from "react-slick";

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

export default class HomeSlider extends Component {
  render() {
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
                  <a>Пункты приема </a>
                </Link>
                &nbsp; в Харькове
              </div>
              <h1 className="home__slider-title">
                Химчистка вещей с доставкой на дом
              </h1>
              <p className="home__slider-descr">
                Забираем, чистим и доставляем обратно! 100% дезинфекция,
                бесконтактная передача заказа и безналичная оплата.
              </p>
            </div>
            <div className="home__slider-item">
              <div className="home__slider-location">
                <MdOutlineLocationOn color="#1176bc" size="25px" />
                &nbsp;
                <Link href="/contact">
                  <a>Пункты приема </a>
                </Link>
                &nbsp; в Харькове
              </div>
              <h1 className="home__slider-title">
                Химчистка вещей с доставкой на дом
              </h1>
              <p className="home__slider-descr">
                Забираем, чистим и доставляем обратно! 100% дезинфекция,
                бесконтактная передача заказа и безналичная оплата.
              </p>
            </div>
          </Slider>
          <p className="home__slider-exdescr">
            Если Вы хотите забрать или сдать вещи - звоните мы приедем!
          </p>
          <div className="home__slider-wrapbtnflex">
            <div className="home__slider-wrapbtndeliv">
              <a href="#" className="home__slider-delivbtn">
                Заказать доставку
              </a>

              <p className="home__slider-btndescr">
                Бесплатно на заказы от 3000 руб
              </p>
            </div>
            <div className="home__slider-wrapbtnorder">
              <a href="#" className="home__slider-orderbtn ">
                Рассчитать заказ
              </a>

              <p className="home__slider-btndescr">Это займет 5-10 минут</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
