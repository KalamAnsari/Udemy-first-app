import React, { useState } from 'react'
import Card from '../UI/Card'
import './expense.css'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
    // let expenses = [
    //     {
    //         id: 1,
    //         title: "Toilet paper",
    //         amount: "$34435",
    //         date: new Date(2022, 11, 9)
    //     },
    //     {
    //         id: 2,
    //         title: "car Insurance",
    //         amount: "$4344",
    //         date: new Date(2021, 9, 3)
    //     }, {
    //         id: 3,
    //         title: "new Wooden",
    //         amount: "$564",
    //         date: new Date(2022, 10, 2)
    //     },
    // ];

    const [filterYear, setFilterYear] = useState('2020');

    const filterHandler = (selectDropDownYear) => {
        setFilterYear(selectDropDownYear);
        console.log(selectDropDownYear)
    }

    let filterExpenses = props.items.filter((filter) => filter.date.getFullYear().toString() === filterYear);

    let expenseContent=<p>no found value this 3 approch </p>

    if(filterExpenses.length > 0){
        expenseContent= filterExpenses.map((filterDate) => { return <ExpenseItem key={filterDate.id} title={filterDate.title} amount={filterDate.amount} date={filterDate.date} /> })
                
    }

    return (
        <>
            <Card className="expense">

                <ExpenseFilter selected={filterYear} onChangeFilter={filterHandler} />

                {/* {expenses.map((expense)=>{<ExpenseItem title="kalam" amount="333" date="2022-02-12"/>})} */}

                {/* {props.items.map((arr)=>{
                return<ExpenseItem key={arr.id} title={arr.title} amount={arr.amount} date={arr.date}/>
                })} */}

                {/* {filterExpenses.length === 0 ? <p>no items present</p> : filterExpenses.map((filterDate) => { return <ExpenseItem key={filterDate.id} title={filterDate.title} amount={filterDate.amount} date={filterDate.date} /> })} */}

                {/* {filterExpenses.length===0 && <p>no items found in this date</p> }
              {
                filterExpenses.length > 0 && filterExpenses.length === 0 ? <p>no items present</p> : filterExpenses.map((filterDate) => { return <ExpenseItem key={filterDate.id} title={filterDate.title} amount={filterDate.amount} date={filterDate.date} /> })
              } */}

             {expenseContent}

                {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} /> */}
            </Card>
        </>
    )
}

export default Expenses