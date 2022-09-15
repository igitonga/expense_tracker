import React, {useState} from "react";
import "../index.css"

const ExpenseForm = (props) => {

    const [enteredTitle, setTitle] = useState('')
    const [enteredAmount, setAmount] = useState('')
    const [enteredDate, setDate] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()

        //obj for data being submitted
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate) 
        }

        //sending obj to parent component through props and being received function
        props.onSaveExpenseData(expenseData)
        //after submitting clear data
        setTitle('')
        setAmount('')
        setDate('')
    }

    //updating state of the inputs
    const enteredTitleHandler = (event) => {
        setTitle(event.target.value)
    }

    const enteredAmountHandler = (event) => {
        setAmount(event.target.value)
    }

    const enteredDateHandler = (event) => {
        setDate(event.target.value)
    }

    const closeForm = (event) => {
        event.preventDefault()
        props.onCancelExpense(false)
    }

    return(

        <div className="wrapper">
            <form onSubmit={submitHandler}>
                <div className="row">
                    <div className="col-md-6">
                        <label>Title</label>
                        <br />
                        <input type="text"
                         value={enteredTitle} 
                         onChange={enteredTitleHandler}
                         required/>
                    </div>
                    <div className="col-md-6">
                        <label>Amount</label>
                        <br />
                        <input type="number"
                         min="0.01" step="0.01"
                         value={enteredAmount}
                         onChange={enteredAmountHandler}
                         required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label>Date</label>
                        <br />
                        <input type="date"
                         min="2019-01-01"
                         max="2022-08-11"
                         value={enteredDate}
                         onChange={enteredDateHandler}
                         required/>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button onClick={closeForm} className="btn mr-3">Cancel</button>
                    <button type="submit" className="btn">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm