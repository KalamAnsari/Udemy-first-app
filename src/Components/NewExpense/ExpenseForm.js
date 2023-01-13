import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enterTitle, setEnterTitle] = useState('');

    const [enterAmount, setEnterAmount] = useState('');

    const [enterDate, setEnterDate] = useState('');

    // const [userInput,setUserInput]=useState({
    //     enterTitle:'',
    //     enterAmount:'',
    //     enterDate:'',
    // })

    const titleChangeHangler = (event) => {
        setEnterTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterTitle:event.target.value
        // })

        // setUserInput((prevState)=>{
        //     return {...prevState,enterTitle:event.target.value}
        // })

    }

    const amountChangeHangler = (event) => {
        setEnterAmount(event.target.value)
        //  setUserInput({
        //     ...userInput,
        //     enterAmount:event.target.value
        // })

    }

    const dateChangeHangler = (event) => {
        setEnterDate(event.target.value)
        //  setUserInput({
        //     ...userInput,
        //     enterDate:event.target.value
        // })

    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate),
        }

        // console.log("submit!", props.onExpenseData());

        props.onExpenseData(expenseData);

        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label htmlFor="">title</label>
                    <input 
                    type="text" 
                    value={enterTitle}
                    onChange={titleChangeHangler}
                     />
                </div>
                <div className="new-expense-control">
                    <label htmlFor="">amount</label>
                    <input 
                    type="number" min='0.01' max='0.51' 
                    value={enterAmount}
                    onChange={amountChangeHangler} 
                    />
                </div>
                <div className="new-expense-control">
                    <label htmlFor="">date</label>
                    <input type="date" min='2020-12-13' max='2023-01-01'  value={enterDate} onChange={dateChangeHangler} />
                </div>
            </div>
            <div className="new-expense-action">
                <button type='submit'>Add new expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm