import React, {useState} from "react";
import Expense from "./components/Expense";
import "./index.css"
import ExpenseCard from "./components/ExpenseCard";
import ExpensesFilter from "./components/ExpsensesFilter";
import ExpensesChart from "./components/ExpensesChart";

const App = () => {

  const expenses = [
    {
      id : "1200",
      title : "Tv stand",
      amount : "140.00",
      date : new Date(2021, 3, 21)
    },
    {
      id : "1390",
      title : "Tooth brush",
      amount : "5.50",
      date : new Date(2020, 7, 3)
    },
    {
      id : "8",
      title : "Carpet",
      amount : "110.00",
      date : new Date(2019, 8, 3)
    },
    {
      id : "56",
      title : "TV",
      amount : "560.50",
      date : new Date(2021, 4, 3)
    },
    {
      id : "23",
      title : "Fridge",
      amount : "370.00",
      date : new Date(2022, 1, 23)
    },
    {
      id : "580",
      title : "Washing machine",
      amount : "450.50",
      date : new Date(2022, 5, 11)
    },
  ]
  
  // state to filter by year
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString())
  // state to update expenses
  const  [newExpense, setNewExpense] =  useState(expenses)
  // state to display expense form
  const [displayForm, setDisplayForm] = useState(false)

  // update state when year filter is clicked
  const actionfilterByYear = (year) => {
    setFilteredYear(year)
  }

  // filtered expenses state according to year
  const filterdExpenses = newExpense.filter(item => item.date.getFullYear().toString() === filteredYear);
 
  // mapping data items from a set to avoid repetion
  const expenseItems = filterdExpenses.map(item => {
    return(
      filterdExpenses.length === 0 ? <p className="msg">No expenses found.</p> :
      <ExpenseCard 
        key={item.id}
        date={item.date}
        amount={item.amount} 
        title = {item.title} /> 
    )
  })
  
  // updating state that has the array of expenses
    const addExpenseHandler = (expense) => {
      setNewExpense((prevExpense)=>{
        return [expense, ...prevExpense]
    })
  }

  //click add expense button to open form
  const openForm = (event) => {
    event.preventDefault()
    setDisplayForm(true)
  }

  const closeForm = () => {
    setDisplayForm(false)
  }

  return (
    <div>
      {
      displayForm === true ? <Expense onCancelForm={closeForm} onAddExpense={addExpenseHandler}/> : 
        <div className="wrapper d-flex justify-content-center">
          <button onClick={openForm} className="btn">Add Expense</button>
        </div>
      }
      <ExpensesFilter 
        onFilterByYear={actionfilterByYear}
        selected={filteredYear}/>
      <ExpensesChart expenses={filterdExpenses}/>
      <div className="cont">
        {expenseItems}
      </div>
    </div>
  );
}

export default App;
