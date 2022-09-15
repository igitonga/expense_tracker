import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseCard = (props) => {
    return (
        <div>
            <div className="card__cont d-flex justify-content-between align-items-center mb-2"> 
                <div className="d-flex align-items-center">
                    <ExpenseDate date={props.date}/>
                    <div className="ml-3">
                        <p className="item">{props.title}</p>
                    </div>
                </div>
                <div className="">
                    <p className="price">${props.amount}</p>
                </div>
            </div>
        </div>
    )
}

export default ExpenseCard