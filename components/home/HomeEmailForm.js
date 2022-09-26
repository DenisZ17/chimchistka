import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import divider from "../../static/bg-title-line.png";
function HomeEmailForm() {
  let { t } = useTranslation();
  return (
    <section className="home__email">
      <div className="home__email-container">
        <h2 className="home__email-h2">{t("home:home-emailTitle")}</h2>
        <div className="home__email-imgdivider">
          <Image src={divider} width={122} height={12} />
        </div>
        <p className="home__email-descr">{t("home:home-emailDescr")}</p>
        <form className="home__email-form">
          <input
            type="email"
            placeholder={t("home:home-emailPlaceh")}
            required
          />
          <button type="button">{t("home:home-emailBtn")}</button>
        </form>
      </div>
    </section>
  );
}

export default HomeEmailForm;
