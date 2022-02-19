import Head from "next/head";
import Myheader from "../components/Myheader";

function Promotions() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Myheader />
      <h1 className="template5">АКЦИИ</h1>;
    </>
  );
}

export default Promotions;
