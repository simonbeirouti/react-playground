import ExpenseDate from './ExpenseDate'
import { Parent, Description, ItemTitle, ItemPrice } from '../styles/ExpenseItem.styling'

export default function ExpenseItem(props) {

    return (
        <Parent>
            <ExpenseDate date={props.date} />
            <Description>
                <ItemTitle>{props.title}</ItemTitle>
                <ItemPrice>{props.amount}</ItemPrice>
            </Description>
        </Parent>
    );
}
