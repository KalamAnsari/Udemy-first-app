import React from 'react'
import "./ExpenseFilter.css"

const ExpenseFilter = (props) => {

    const dropDownHandler=event=>{props.onChangeFilter(event.target.value)};

    

    return (
        <div className='expenses_filter'>
            <div className='expense_filter_control'>

            <label>Filter by year</label>
            <select name="" value={props.selected} id="" onChange={dropDownHandler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>

            </select>
            </div>
        </div>
    )
}

export default ExpenseFilter