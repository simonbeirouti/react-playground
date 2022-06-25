import { useState } from "react";
import {
  NewExpenseButton,
  NewExpenseControls,
  NewExpenseLabel,
  NewExpenseInput,
  NewExpenseAction,
  BackButton,
} from "./FormStyling";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Puting each state object into one useState
  // Doing this will lead to issues if not implemented correctly
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // Taking in preious state values
    // Just to change one value
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })

    // always operating on the latest snapshot
    // Used mainly for projects that rely the previous state values
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value}
    // })
  };

  const submitHandler = (event) => {
    // Stop the browser from reloading the page
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <NewExpenseControls>
        <div>
          <NewExpenseLabel>Title</NewExpenseLabel>
          <NewExpenseInput
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <NewExpenseLabel>Amount</NewExpenseLabel>
          <NewExpenseInput
            type="number"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <NewExpenseLabel>Date</NewExpenseLabel>
          <NewExpenseInput
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </NewExpenseControls>
      <NewExpenseAction>
        <BackButton type="button" onClick={props.onCancel}>
          Cancel
        </BackButton>
        <NewExpenseButton type="submit">Add expense</NewExpenseButton>
      </NewExpenseAction>
    </form>
  );
}
