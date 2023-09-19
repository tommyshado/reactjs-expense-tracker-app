import Card from "./components/UI/Card";

import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";

const App = () => {
  const expenses = [
    { date: new Date(2023, 8, 15), title: "Car Insurance", amount: 250.76 },
    { date: new Date(2021, 5, 23), title: "Electricity Bill", amount: 500.0 },
    { date: new Date(2020, 2, 5), title: "Water Bill", amount: 1400.46 },
  ];
  return (
    <Card>
      <NewExpense />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </Card>
  );
};

export default App;
