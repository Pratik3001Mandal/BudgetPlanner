import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Remaining() {
    const { budget, expenses } = useContext(AppContext);
    const totalExpense = expenses.reduce((total, item)=> {
        return (total = total + item.cost)
    }, 0)

  return (
    <div>
      <div className="alert alert-success">
        Remaining: ${budget - totalExpense}
      </div>
    </div>
  )
}
