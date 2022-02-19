import mailer from "nodemailer";

const smtpTransport = mailer.createTransport(
  {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "denopt17@gmail.com",
      pass: "391691771",
    },
    tls: { rejectUnauthorized: false },
  },
  {
    from: "chimchistka-test <denopt17@gmail.com>",
  }
);

const sendEmail = (message) => {
  smtpTransport.sendMail(message, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully", info);
    }
    smtpTransport.close();
  });
};

export default sendEmail;
