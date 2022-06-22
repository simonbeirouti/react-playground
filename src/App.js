import Expenses from './components/Expenses/Expenses'
import { MainApp, AppHeader } from './styles/MainApp.styling'

export default function App() {
  const expenses = [
    { id: 'exp1', title: 'Insurance', amount: 394, date: new Date(2021, 2, 30)},
    { id: 'exp2', title: 'Pet food', amount: 54, date: new Date(2021, 2, 29)},
    { id: 'exp3', title: 'Phone bill', amount: 104, date: new Date(2021, 2, 27)},
    { id: 'exp4', title: 'Electricity', amount: 84, date: new Date(2021, 2, 20)},
  ]

  return (
    <MainApp>
      <AppHeader>
        <h1>Hello world!</h1>
        <Expenses items={expenses}/>
      </AppHeader>
    </MainApp>
  );
}