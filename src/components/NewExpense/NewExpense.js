import ExpenseForm from "./ExpenseForm";
import { NewExpenseParent } from "./FormStyling";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <NewExpenseParent>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </NewExpenseParent>
  );
}
