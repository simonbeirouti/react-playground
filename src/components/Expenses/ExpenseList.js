import ExpenseItem from "./ExpenseItem";
import { ExpenseListStyle, ExpenseFallback } from "./ExpenseStyling";

export default function ExpenseList(props) {
  if (props.items.length === 0) {
    return <ExpenseFallback>Found no expenses</ExpenseFallback>;
  }

  return (
    <ExpenseListStyle>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </ExpenseListStyle>
  );
}
