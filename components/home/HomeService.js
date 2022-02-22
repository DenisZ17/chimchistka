import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { homeServiceCat } from "../../static/data/homeServiceCat";
import { homeServiceSubCat } from "../../static/data/homeServiceSubCat";

function HomeService() {
  return (
    <section className="home__service">
      <div className="container">
        <h2 className="home__service-h2">Услуги химчистки</h2>
        <div className="home__service-arrowdown">
          <BsChevronCompactDown color="#1176bc" size="50px" />
        </div>
        <div className="home__service-grid">
          {homeServiceCat.map((item, index) => (
            <Link href={item.link}>
              <a key={index} className="home__service-item">
                <div className="home__service-itemimg">
                  <Image src={item.img} width={80} height={80} />
                </div>
                <div className="home__service-itemcontent">
                  <div className="home__service-itemtitle">{item.title}</div>
                  <div className="home__service-itemprice">{item.price}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className="home__service-divider">
          <span></span>
        </div>
        <div className="home__service-grid">
          {homeServiceSubCat.map((item, index) => (
            <Link href={item.link}>
              <a key={index} className="home__service-item">
                <div className="home__service-itemimg">
                  <Image src={item.img} width={90} height={90} />
                </div>
                <div className="home__service-itemcontent">
                  <div className="home__service-itemtitle">{item.title}</div>
                  <div className="home__service-itemprice">{item.price}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeService;
