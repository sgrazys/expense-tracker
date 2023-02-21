import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItems = (props) => {
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle('Updated title');
		console.log(title);
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<Card className="expense-item__price">
					{props.amount} &euro;
				</Card>
			</div>
			<button onClick={clickHandler}>Change title</button>
		</Card>
	);
};

export default ExpenseItems;
