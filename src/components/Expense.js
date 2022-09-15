import React from "react";
import ExpenseForm from "./ExpenseForm";

const Expense = (props) => {
    //submit from parent component >>>> data came from child component
    const savedExpenseData = (expenseData) => {
        const enteredExpenseData = {
            ...expenseData, 
            id : Math.random().toString()
        }
         props.onAddExpense(enteredExpenseData)
    }

    const closeForm = () => {
        props.onCancelForm(false)
    }
    
    return(
        <div>
            <ExpenseForm onCancelExpense={closeForm} onSaveExpenseData={savedExpenseData}/>
        </div>
    )
}

export default Expense