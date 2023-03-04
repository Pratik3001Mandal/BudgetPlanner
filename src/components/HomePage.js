import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AppContext } from '../context/AppContext';

export default function HomePage() {
    const [mybudget, setmybudget] = useState("");

    const { dispatch } = useContext(AppContext);

    const submitBuget = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_BUDGET",
            payload: mybudget
        })
    }
    

    return (
        <div>
            <div className="container text-center bg-text">
                <h1>Budget Planner</h1>
                <form>
                    <div className="row">
                        <div className="col-sm mt-3">
                            <input type="number" className="form-control budgetField numberField" placeholder='Enter your budget here' onChange={(e)=>setmybudget(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm mt-3">
                            <button disabled={mybudget===""} className="btn btn-success submitAction" onClick={submitBuget}><Link to="/analysis">Submit</Link></button>
                        </div>
                    </div> 
                </form>
            </div>
        </div>
    )
}
