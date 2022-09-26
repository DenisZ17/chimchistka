import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import CounterProduct from "../../components/CounterProduct";

import Myheader from "../../components/Myheader";
import Myfooter from "../../components/Myfooter";

import chimchistkaKovrov from "../../static/data/chimchistkaKovrov";

function Chistkakovrov() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Myheader />
      <div className="product__header-bg">
        <h1 className="product__h1">Чистка ковров</h1>
      </div>

      <div className="product__item">
        <div className="container">
          <div className="product__item-content">
            <div
              className="product__item-wrapper"
              style={{
                backgroundColor: "#fafafa",
              }}
            >
              <h3 className="product__item-title">Наименование изделия</h3>
              <div className="product__item-measure">Ед. изм.</div>
              <div className="product__item-sum">Количество</div>
              <p className="product__item-price">Цена</p>
            </div>

            {chimchistkaKovrov.map((item, index) => (
              <div
                className="product__item-wrapper"
                style={{
                  backgroundColor: index % 2 == 0 ? "#f1f1f1" : "#fafafa",
                }}
              >
                <h3 className="product__item-title">{item.title}</h3>
                <div className="product__item-measure">{item.measure}</div>
                <div className="product__item-sum">
                  <CounterProduct />
                </div>
                <p className="product__item-price">
                  {item.price}
                  {item.currency}
                </p>
                <button className="product__item-btn">в корзину</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Myfooter />
    </>
  );
}

export default Chistkakovrov;
