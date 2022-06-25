import { useState } from "react";
import { ExpenseItemList } from "./ExpenseItem.styling";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

export default function ExpensesList(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <ExpenseItemList>
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </ExpenseItemList>
  );
}
