import React from "react";
import "../index.css"

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const date = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear()
    return(
        <div className="date__cont d-flex flex-column align-items-center">
            <p className="month">{month}</p>
            <p className="year">{year}</p>
            <p className="date">{date}</p>
        </div>
    )
}

export default ExpenseDate