import { Parent, Description, ItemTitle, ItemPrice } from '../styles/ExpenseItem.styling'

export default function ExpenseItem() {
    const expenseDate = new Date(2022, 8, 17)
    const expenseTitle = 'Car insurance'
    const expenseAmount = 293

    return (
        <Parent>
            <div>{expenseDate.toISOString()}</div>
            <Description>
                <ItemTitle>{expenseTitle}</ItemTitle>
                <ItemPrice>{expenseAmount}</ItemPrice>
            </Description>
        </Parent>
    );
}
