import ExpenseItem from './components/ExpenseItem';
import { MainApp, AppHeader } from './styles/MainApp.styling';

export default function App() {
  return (
    <MainApp>
      <AppHeader>
        <h1>Hello world!</h1>
        <ExpenseItem />
      </AppHeader>
    </MainApp>
  );
}