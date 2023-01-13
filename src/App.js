import './App.css';
import React ,{useState}from 'react';
import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense';
let Initial_Expenses = [
  {
      id: 1,
      title: "Toilet paper",
      amount: "34435",
      date: new Date(2022, 11, 9)
  },
  {
      id: 2,
      title: "car Insurance",
      amount: "4344",
      date: new Date(2021, 9, 3)
  }, {
      id: 3,
      title: "new Wooden",
      amount: "564",
      date: new Date(2020, 10, 2)
  },
];

function App() {

const [ExpensesItems, setExpensesItems] = useState(Initial_Expenses);

  const expenseDateHandler=newExpense=>{
    setExpensesItems([newExpense,...ExpensesItems]);
    console.log(newExpense)
  }

  return (
    <div className="App">

    <NewExpense onExpenseDate={expenseDateHandler}/>
    <Expenses items={ExpensesItems}/>
    </div>
  );
}

export default App;
