import {
  ExpenseDateParent,
  ExpenseMonth,
  ExpenseDay,
  ExpenseYear,
} from "./ExpenseStyling";

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <ExpenseDateParent>
      <ExpenseDay>{day}</ExpenseDay>
      <ExpenseMonth>{month}</ExpenseMonth>
      <ExpenseYear>{year}</ExpenseYear>
    </ExpenseDateParent>
  );
}
