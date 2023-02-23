import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItems = (props) => {
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<Card className='expense-item__price'>
					{props.amount} &euro;
				</Card>
			</div>
		</Card>
	);
};

export default ExpenseItems;
