import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { NewExpenseParent, NewExpenseButton } from "./FormStyling";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <NewExpenseParent>
      {!isEditing && (
        <NewExpenseButton onClick={startEditingHandler}>
          Add new expense
        </NewExpenseButton>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </NewExpenseParent>
  );
}
