import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	// const item = expenses.map((e, i) => (
	// 	<div>
	// 		<ExpenseItem title={e.title} amount={e.amount} date={e.date} />
	// 	</div>
	// ));

	// return <Card className="expenses">{item}</Card>;

	const [filteredYear, setFilteredYear] = useState(2023);

	const filteredYearHandler = (selectedYear) => {
		const year = selectedYear;

		setFilteredYear(year);

		console.log(`Year from Expenses component ${year}`);
	};

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onSelectedYear={filteredYearHandler}
				/>
				<ExpenseItem
					title={props.items[0].title}
					amount={props.items[0].amount}
					date={props.items[0].date}
				/>
				<ExpenseItem
					title={props.items[1].title}
					amount={props.items[1].amount}
					date={props.items[1].date}
				/>
				<ExpenseItem
					title={props.items[2].title}
					amount={props.items[2].amount}
					date={props.items[2].date}
				/>
				<ExpenseItem
					title={props.items[3].title}
					amount={props.items[3].amount}
					date={props.items[3].date}
				/>
			</Card>
		</div>
	);
};

export default Expenses;
