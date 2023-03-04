import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';


export default function AddExpenseForm() {
    const { dispatch } = useContext(AppContext);
    const [name, setname] = useState("");
    const [cost, setcost] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        const expenses = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }
        dispatch({
            type: "ADD_EXPENSE",
            payload: expenses
        })
        setname("");
        setcost("")
    }
  return (
    <form onSubmit={onSubmit}>
        <div className="row mt-3">
            <div className="col-sm">
                <label htmlFor='name'>Name</label>
                <input required="required" type="text" className="form-control" value={name} onChange={(e)=>setname(e.target.value)}/>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-sm">
                <label htmlFor='cost'>Cost</label>
                <input required="required" type="number" className="form-control numberField" value={cost} onChange={(e)=>setcost(e.target.value)}/>
            </div>
        </div>
        <div className="row mt-3">
            <button type='submit' className="submitAction btn btn-success" disabled={name==="" && cost===""}>Submit</button>
        </div>        
    </form>
  )
}
