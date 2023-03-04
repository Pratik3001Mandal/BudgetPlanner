import React from 'react';
import Budget from './Budget';
import Remaining from './Remaining';
import Spent from './Spent';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';

export default function Analysis() {
  return (
      <div className="container bg-text">
        <h1 className='mt-3'>My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Spent />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expenses</h3>
        <div className="row">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
  )
}
