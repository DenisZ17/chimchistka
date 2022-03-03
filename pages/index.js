import Myheader from "../components/Myheader";
import Head from "next/head";
import HomeSlider from "../components/home/HomeSlider";
import HomeService from "../components/home/HomeService";
import HomePhoneForm from "../components/home/HomePhoneForm";
import HomeText from "../components/home/HomeText";
import HomeStage from "../components/home/HomeStage";
import HomePrice from "../components/home/HomePrice";

import HomeReviews from "../components/home/HomeReviews";
import HomeProjects from "../components/home/HomeProjects";
import Myfooter from "../components/Myfooter";
import HomeEmailForm from "../components/home/HomeEmailForm";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Myheader />
      <HomeSlider />
      <HomeService />
      <HomePhoneForm />
      <HomeText />
      <HomeStage />
      <HomePrice />
      <HomeEmailForm />
      <HomeProjects />
      <HomeReviews />
      <Myfooter />
    </div>
  );
}
