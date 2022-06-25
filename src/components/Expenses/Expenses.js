import { useState } from "react";
import { ExpenseItemList } from "./ExpenseStyling";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

export default function ExpensesList(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <ExpenseItemList>
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseList items={filteredExpenses} />
    </ExpenseItemList>
  );
}
