import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [addExpenseButton, setAddExpenseButton] = useState(false)

    const startAddExpenseButton = () => {
        setAddExpenseButton(true)
    }
    const stopAddExpenseButton = () => {
        setAddExpenseButton(false)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        addExpenseButton(false);
    }
    return (
        <div className='new-expense'>
            {!addExpenseButton && <button onClick={startAddExpenseButton}>Add New Expense</button>}
            {addExpenseButton && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopAddExpenseButton} />}
        </div>
    )
}

export default NewExpense;