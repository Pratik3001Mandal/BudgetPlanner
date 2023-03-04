import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList() {
  const [ searchfilter, setsearchfilter ] = useState("");
  const {expenses} = useContext(AppContext);

  return (
    <>
      {expenses.length !== 0 ? <input type="text" className="form-control my-3" placeholder='Type something to search' onChange={(e)=>{setsearchfilter(e.target.value)}}/> : "Nothing to Preview"}
      <ul className='list-group'>
        {expenses.filter((val)=>{
          if(searchfilter===""){
            return val;
          }else if(val.name.toLowerCase().includes(searchfilter)){
            return val;
          }
        }).map((val)=>{
          return <ExpenseItem name={val.name} id={val.id} cost={val.cost}/>
        })}
      </ul>
    </>
  )
}
