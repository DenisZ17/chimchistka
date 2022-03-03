import Image from "next/image";
import divider from "../../static/bg-title-line.png";
function HomeEmailForm() {
  return (
    <section className="home__email">
      <div className="home__email-container">
        <h2 className="home__email-h2">Выгодная рассылка</h2>
        <div className="home__email-imgdivider">
          <Image src={divider} width={122} height={12} />
        </div>
        <p className="home__email-descr">
          Подпишитесь на нашу рассылку, чтобы выгодно и дешево стирать Ваши вещи
          в нашей прачечной.
        </p>
        <form className="home__email-form">
          <input type="email" placeholder="Ваш email" required />
          <button type="button">ПОДПИСАТЬСЯ</button>
        </form>
      </div>
    </section>
  );
}

export default HomeEmailForm;
