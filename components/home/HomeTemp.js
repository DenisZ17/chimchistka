import { TextField } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import React from "react";

function ReviewsForm() {
  let { t } = useTranslation();
  return (
    <form className="home__reviews-form">
      <TextField
        variant="outlined"
        label="Ваше имя *"
        margin="normal"
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Ваше email *"
        margin="normal"
        fullWidth
        type="email"
      />
      <TextField
        id="outlined-multiline-flexible"
        variant="outlined"
        label="Ваш отзыв"
        fullWidth
        margin="normal"
        multiline
        maxRows={4}
        type="text"
      />

      <button className="home__reviews-formbtn" type="submit">
        {t("home:home-sendReview")}
      </button>
    </form>
  );
}

export default ReviewsForm;
