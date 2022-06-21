import { ExpenseItemList } from "../styles/ExpenseItem.styling"
import ExpenseItem from "./ExpenseItem"

export default function ExpensesList(props) {
  return (
    <ExpenseItemList>
      {props.items.map(item => {
        <ExpenseItem 
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      })}
      {/* <ExpenseItem 
        key={props.items[0].id}
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <ExpenseItem 
        key={props.items[1].id}
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <ExpenseItem 
        key={props.items[2].id}
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
      <ExpenseItem 
        key={props.items[3].id}
        date={props.items[3].date}
        title={props.items[3].title}
        amount={props.items[3].amount}
      /> */}
    </ExpenseItemList>
  )
}

