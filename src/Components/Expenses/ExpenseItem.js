import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    const clickHandeler=()=>{
        console.log("deleted",props)
    }
  
    return (
        <>
            <Card className="expense_item">
               <ExpenseDate date={props.date}/>
                <div className="expense_item_desc">
                    <h2>{props.title}</h2>
                    <h3 className='amount'>${props.amount} </h3>
                </div>
                <button onClick={clickHandeler}>delete title</button>
            </Card>
        </>
    )
}

export default ExpenseItem