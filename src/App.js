import Expenses from "./components/Expenses/Expenses";
import { MainApp, AppHeader } from "./styles/AppStyling";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const init_expenses = [
  {
    id: "exp1",
    title: "Insurance",
    amount: 394,
    date: new Date(2022, 2, 30),
  },
  { id: "exp2", title: "Pet food", amount: 54, date: new Date(2021, 2, 29) },
  {
    id: "exp3",
    title: "Phone bill",
    amount: 104,
    date: new Date(2021, 2, 27),
  },
  {
    id: "exp4",
    title: "Electricity",
    amount: 84,
    date: new Date(2020, 2, 20),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(init_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <MainApp>
      <AppHeader>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </AppHeader>
    </MainApp>
  );
}
