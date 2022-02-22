import Image from "next/image";
import React from "react";
import divider from "../../static/bg-title-line.png";

function HomePhoneForm() {
  return (
    <section className="home__phone">
      <div className="home__phone-container">
        <h2 className="home__phone-h2">Быстрый заказ</h2>
        <div className="home__phone-imgdivider">
          <Image src={divider} width={122} height={12} />
        </div>
        <p className="home__phone-descr">
          Оставьте заявку* прямо сейчас и мы перезвоним Вам в течение часа для
          уточнения деталей и ответим на все интересующие Вас вопросы!
        </p>
        <form className="home__phone-form">
          <input type="tel" placeholder="Ваш номер телефона" required />
          <button type="button">ХОЧУ ПОСТИРАТЬ</button>
        </form>
      </div>
    </section>
  );
}

export default HomePhoneForm;
