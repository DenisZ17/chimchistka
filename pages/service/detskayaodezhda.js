import Header from "../../components/Header";
import Head from "next/head";

function DetskayaOdezhda() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <h1 className="template3">ДЕТСКАЯ ОДЕЖДА</h1>;
    </>
  );
}

export default DetskayaOdezhda;
