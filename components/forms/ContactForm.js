import { TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const schema = yup.object({
  firstName: yup
    .string()
    .trim()
    .max(25, "* Максимальное количество символов 25")
    .required("* Поле обязательное для заполнения")
    .matches(/^[a-zA-Zа-яёА-ЯЁ]+$/u, "* Имя введено неверно"),
  yourEmail: yup
    .string()
    .max(50, "Максимальное количество символов 50")
    .email("Email имеет неверный формат"),
  yourPhone: yup
    .string()
    .trim()
    .required("* Поле обязательное для заполнения")
    .min(9, "* Номер телефона имеет неверный формат")
    .max(19, "* Номер телефона имеет неверный формат")
    .matches(
      /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/,
      "* Номер телефона имеет неверный формат"
    ),
  yourMess: yup
    .string()      
    .trim()
    .max(1000, "Количество символов сообщения не должно превышать 1000"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  async function mySubmit(values) {
    let config = {
      method: "post",
      url: "http://localhost:3000/api/send-request/",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const response = await axios(config);
      if (response.data.status == 200) {
      }
    } catch (error) {
      console.error(error);
    }

    reset();
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit(mySubmit)} noValidate>
      <TextField
        variant="outlined"
        label="Ваше имя *"
        margin="normal"
        {...register("firstName")}
      />
      <div className="contactForm__error">
        {errors?.firstName && <p>{errors?.firstName?.message || "Ошибка!"}</p>}
      </div>

      <TextField
        variant="outlined"
        label="Ваш номер телефона *"
        margin="normal"
        {...register("yourPhone")}
      />
      <div className="contactForm__error">
        {errors?.yourPhone && <p>{errors?.yourPhone?.message || "Ошибка!"}</p>}
      </div>

      <TextField
        variant="outlined"
        label="Ваш email "
        margin="normal"
        type="email"
        {...register("yourEmail")}
      />
      <div className="contactForm__error">
        {errors?.yourEmail && <p>{errors.yourEmail?.message || "Ошибка!"}</p>}
      </div>

      <TextField
        id="outlined-multiline-flexible"
        variant="outlined"
        label="Ваш сообщение "
        margin="normal"
        multiline
        maxRows={4}
        type="text"
        {...register("yourMess")}
      />
      <div className="contactForm__error">
        {errors?.yourMess && <p>{errors.yourMess?.message || "Ошибка!"}</p>}
      </div>

      <button type="submit" className="contactForm__btn" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
