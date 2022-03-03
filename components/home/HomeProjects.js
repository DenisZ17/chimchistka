import Image from "next/image";
import React, { Component, useState } from "react";
import hmpr1 from "../../static/hmproj1.jpg";
import hmpr2 from "../../static/hmproj2.jpg";
import hmpr3 from "../../static/hmproj3.jpg";
import hmpr4 from "../../static/hmproj4.jpg";
import hmpr5 from "../../static/hmproj5.jpg";
import hmpr6 from "../../static/hmproj6.jpg";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Slider from "react-slick";
import { v4 as uuidv4, v4 } from "uuid";
import Modal from "../Modal";
import divider from "../../static/bg-title-line.png";

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
function HomeProjects() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home__projects">
      <div className="home__projects-container">
        <h2 className="home__projects-h2">Наши работы</h2>
        <div className="home__projects-imgdivider">
          <Image src={divider} width={122} height={12} />
        </div>
        <Modal active={modal1} setActive={setModal1}>
          <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <div className="">
              <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <button
                  onClick={() => setModal1(false)}
                  type="button"
                  className="text-black bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              </div>
              <Image src={hmpr1} width={1048} height={980} />
            </div>
          </div>
        </Modal>
        <Modal active={modal2} setActive={setModal2}>
          <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <div className=" ">
              <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <button
                  onClick={() => setModal2(false)}
                  type="button"
                  className=" text-black bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              </div>
              <Image src={hmpr2} width={1048} height={980} />
            </div>
          </div>
        </Modal>
        <Modal active={modal3} setActive={setModal3}>
          <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <div className=" ">
              <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <button
                  onClick={() => setModal3(false)}
                  type="button"
                  className=" text-black bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              </div>
              <Image src={hmpr3} width={1048} height={980} />
            </div>
          </div>
        </Modal>
        <Modal active={modal4} setActive={setModal4}>
          <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <div className=" ">
              <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <button
                  onClick={() => setModal4(false)}
                  type="button"
                  className=" text-black bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              </div>
              <Image src={hmpr4} width={1048} height={980} />
            </div>
          </div>
        </Modal>
        <Modal active={modal5} setActive={setModal5}>
          <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <div className="">
              <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <button
                  onClick={() => setModal5(false)}
                  type="button"
                  className="text-black bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              </div>
              <Image src={hmpr5} width={1048} height={980} />
            </div>
          </div>
        </Modal>
        <Modal active={modal6} setActive={setModal6}>
          <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <div className="">
              <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <button
                  onClick={() => setModal6(false)}
                  type="button"
                  className="text-black bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              </div>
              <Image src={hmpr6} width={1048} height={980} />
            </div>
          </div>
        </Modal>

        <Slider {...settings} className="home__projects-slider">
          <div
            onClick={() => setModal1(true)}
            className="home__projects-item1"
            // href={process.env.NEXT_PUBLIC_API_URL + "/static/hmproj1.jpg"}
            key={v4()}
          >
            <Image src={hmpr1} />
          </div>

          <div
            onClick={() => setModal2(true)}
            className="home__projects-item2"
            // href={process.env.NEXT_PUBLIC_API_URL + "/static/hmproj2.jpg"}
            key={v4()}
          >
            <Image src={hmpr2} />
          </div>
          <div
            onClick={() => setModal3(true)}
            className="home__projects-item3"
            // href={process.env.NEXT_PUBLIC_API_URL + "/static/hmproj3.jpg"}
            key={v4()}
          >
            <Image src={hmpr3} />
          </div>
          <div
            onClick={() => setModal4(true)}
            className="home__projects-item4"
            // href={process.env.NEXT_PUBLIC_API_URL + "/static/hmproj4.jpg"}
            key={v4()}
          >
            <Image src={hmpr4} />
          </div>
          <div
            onClick={() => setModal5(true)}
            className="home__projects-item1"
            // href={process.env.NEXT_PUBLIC_API_URL + "/static/hmproj1.jpg"}
            key={v4()}
          >
            <Image src={hmpr5} />
          </div>
          <div
            onClick={() => setModal6(true)}
            className="home__projects-item1"
            // href={process.env.NEXT_PUBLIC_API_URL + "/static/hmproj1.jpg"}
            key={v4()}
          >
            <Image src={hmpr6} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default HomeProjects;
