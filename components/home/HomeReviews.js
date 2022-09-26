import Image from "next/image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import divider from "../../static/bg-title-line.png";
import Slider from "react-slick";
import { v4 as uuidv4, v4 } from "uuid";
import Modal from "../Modal";
import { useState } from "react";
import ReviewsForm from "../forms/ReviewsForm";
import useTranslation from "next-translate/useTranslation";
function ArrowPrev(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="slick-btn homeproj__slick-prev"
      onClick={onClick}
    >
      <HiOutlineChevronLeft color="#1176bc" size="35px" />
    </button>
  );
}
function ArrowNext(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="slick-btn homeproj__slick-next"
      onClick={onClick}
    >
      <HiOutlineChevronRight color="#1176bc" size="35px" />
    </button>
  );
}
function HomeReviews() {
  let { t } = useTranslation();
  const homeRev = t("home:home-reviews", {}, { returnObjects: true });
  const [modal, setModal] = useState(false);
  const settings = {
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    responsive: [
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home__reviews">
      <div className="home__reviews-container">
        <h2 className="home__reviews-h2">{t("home:home-reviewsTitle")}</h2>
        <div className="home__reviews-imgdivider">
          <Image src={divider} width={122} height={12} />
        </div>

        <Slider {...settings} className="home__reviews-slider">
          {homeRev.map((item) => (
            <div className="home__reviews-item">
              <div className="home__reviews-text">{item.text}</div>
              <div className="home__reviews-avatar">
                <Image src={item.img} width={48} height={48} />
                <div className="home__reviews-avatarND">
                  <p className="home__reviews-avatarName">{item.name}</p>
                  <p className="home__reviews-avatarDate">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="home__reviews-wrapbtn">
          <button onClick={() => setModal(true)} className="home__reviews-btn">
            {t("home:home-reviewsBtn")}
          </button>
          <Modal active={modal} setActive={setModal}>
            <button
              onClick={() => setModal(false)}
              type="button"
              className="modal__close-btn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <ReviewsForm />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default HomeReviews;
