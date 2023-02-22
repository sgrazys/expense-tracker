import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const saveExpenseHandler = (enteredExpenseDate) => {
		const expenseData = {
			...enteredExpenseDate,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseHandler} />
		</div>
	);
};

export default NewExpense;
