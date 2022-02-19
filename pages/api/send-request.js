import sendEmail from "../../components/forms/mailer";

export default function handler(req, res) {
  const { firstName, yourPhone, yourEmail, yourMess } = req.body;
  const message = {
    to: "denopt17@mail.ru",
    subject: `Письмо с сайта от ${req.body.firstName}`,
    text: `
    Имя: ${req.body.firstName},
    Телефон: ${req.body.yourPhone},
    Email: ${req.body.yourEmail},
    Сообщение: ${req.body.yourMess},
    `,
  };
  sendEmail(message);
  console.log(message);
  res.send(`Спасибо за заявку, ${req.body.firstName}`);
}
