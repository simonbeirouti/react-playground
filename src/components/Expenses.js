import { ExpenseItemList } from "../styles/ExpenseItem.styling"
import ExpenseItem from "./ExpenseItem"

export default function ExpensesList(props) {
  return (
    <ExpenseItemList>
      {props.items.map(item => (
        <ExpenseItem 
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </ExpenseItemList>
  )
}

