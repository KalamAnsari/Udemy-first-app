import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {

  const expenseHandler=(parentData)=>{
    // console.log("parentData",parentData)

    const expenseData={...parentData,
    id:((Math.random()*10).toFixed(5))}
    // console.log(expenseData) 
    props.onExpenseDate(expenseData);
  }

  return (
    <div className='new-expense'>

    <ExpenseForm onExpenseData={expenseHandler}/>

    </div>
  )
}

export default NewExpense