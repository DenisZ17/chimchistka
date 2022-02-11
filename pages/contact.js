import Head from "next/head";
import ContactForm from "../components/forms/ContactForm";
import Myheader from "../components/Myheader";

function Contact() {
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
      <Myheader />
      <h1 className="template4">КОНТАКТЫ</h1>
      <div className="m-10 p-3">
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
