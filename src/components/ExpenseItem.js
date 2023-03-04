import React, { useContext } from 'react';
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../context/AppContext';

export default function ExpenseItem({name, id, cost}) {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id
    })
  }

  return (
    <li key={id} className='list-group-item d-flex justify-content-between align-items-center'>
        {name}
        <div>
            <span className="badge rounded-pill text-bg-primary mr-3">
                ${cost}
            </span>
            <TiDelete size='1.5em' onClick={handleDelete}></TiDelete>
        </div>        
    </li>
  )
}
