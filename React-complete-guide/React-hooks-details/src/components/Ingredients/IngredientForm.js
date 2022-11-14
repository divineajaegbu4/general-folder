import React, { useState } from "react";

import Card from "../UI/Card";
import LoadingIndicator from "../UI/LoadingIndicator";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  // const [inputState, setInputState] = useState({ title: "", amount: 0 });
  // const inputState = useState({ title: "", amount: 0 });//use for managing states

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({
      title: enteredTitle,
      amount: enteredAmount,
    });
  };

  const onChangeInputText = (e) => {
    // const newTitle = e.target.value;
    // inputState[1]((prevInputState) => ({
    //   title: newTitle,
    //   amount: prevInputState.amount,
    // }));

    // const newTitle = e.target.value;
    // setInputState((prevInputState) => ({
    //   title: newTitle,
    //   amount: prevInputState.amount,
    // }));

    setEnteredTitle(e.target.value);
  };

  const onChangeInputAmount = (e) => {
    // const newTitle = e.target.value;
    // inputState[1]((prevInputState) => ({
    //   amount: newTitle,
    //   title: prevInputState.title,
    // }));

    // const newTitle = e.target.value;
    // setInputState((prevInputState) => ({
    //   amount: newTitle,
    //   title: prevInputState.title,
    // }));

    setEnteredAmount(e.target.value);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              // value={inputState[0].title}
              // value={inputState.title}
              value={enteredTitle}
              onChange={onChangeInputText}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              // value={inputState[0].amount}
              // value={inputState.amount}
              value={enteredAmount}
              onChange={onChangeInputAmount}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
