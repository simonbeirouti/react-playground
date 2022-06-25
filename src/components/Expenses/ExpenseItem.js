import ExpenseDate from "./ExpenseDate";
import { Parent, Description, ItemTitle, ItemPrice } from "./ExpenseStyling";

export default function ExpenseItem(props) {
  return (
    <li>
      <Parent>
        <ExpenseDate date={props.date} />
        <Description>
          <ItemTitle>{props.title}</ItemTitle>
          <ItemPrice>${props.amount}</ItemPrice>
        </Description>
      </Parent>
    </li>
  );
}
