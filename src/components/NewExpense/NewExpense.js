
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onCreateNewExpense(expenseData);
    }

    let defaultContent = <button onClick={startEditingHandler}>Add new Expense</button>;
    if (isEditing) {
        defaultContent = <ExpenseForm onCancelExpenseData={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>;
    }

    return <div className="new-expense"> {defaultContent} </div>
}

export default NewExpense;