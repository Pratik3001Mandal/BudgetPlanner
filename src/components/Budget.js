import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

export default function Budget() {
    const { budget, dispatch } = useContext(AppContext);
    const [editmyBudget, seteditmyBudget] = useState(false);
    const [edittedBudget, setEdittedBudget] = useState(budget);
    const editBudget = () => {
      seteditmyBudget(true)
    }

    const handleSaveNewBudget = () => {
      dispatch({
        type: "UPDATE_BUDGET",
        payload: edittedBudget
      })
      seteditmyBudget(false)
    }

  return (
    <div>
      <div className="alert alert-secondary d-flex justify-content-between align-items-center">
        
        {!editmyBudget ? <div className='budgetValue'>Budget: ${edittedBudget}</div> : 
        
        <div className="editBudget">
          <div className="input-group">
            <div className="input-group-text">$</div>
            <input required="required" type="text" className="budgetField form-control" id="autoSizingInputGroup" placeholder="Username"  value={edittedBudget} onChange={(e)=>setEdittedBudget(e.target.value)} />
          </div>
        </div>
        }
        {!editmyBudget ? <button className="btn btn-success mx-2" onClick={editBudget}>Edit</button> : <button className="btn btn-success mx-2" onClick={handleSaveNewBudget}>Save</button>}
          
      </div>
    </div>
  )
}
