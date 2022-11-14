import React, { useState } from "react";
import styles from "./Form.module.css";

function Form(props) {
  const [enteredText, setEnteredText] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const ShowForm = (e) => {
    e.preventDefault();
    if (enteredText.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (enteredAge < 1) {
      return;
    }

    console.log(enteredText, enteredAge);
    setEnteredAge("");
    setEnteredText("");
  };
  const Username = (event) => {
    setEnteredText(event.target.value);
  };
  const Age = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div className={styles["form__container"]}>
      <form className={styles["form__container--general"]} onSubmit={ShowForm}>
        <label>Username</label>
        <input
          type="text"
          name="text"
          value={enteredText}
          onChange={Username}
        />
        <label>Age (Years)</label>
        <input type="number" name="number" value={enteredAge} onChange={Age} />
        <button type="submit" className={styles["button"]}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default Form;
