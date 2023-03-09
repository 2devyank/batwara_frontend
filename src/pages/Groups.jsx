import React, { lazy, Suspense, useEffect, useState } from 'react'
import "../styles/Dashboard.css"
import "../styles/Groups.css"
import p1 from "../assets/p1.svg"
import s1 from "../assets/s1.png"

import {  Link, useParams } from 'react-router-dom'
import { Button, Modal, Table,Form } from 'react-bootstrap'
// import { useUserAuth } from '../context/UserAuthcontext'
// import Rightgroup from '../components/Rightgroup'
const Rightgroup=lazy(()=>import("../components/Rightgroup"))
// import GroupExpenses from '../components/GroupExpenses'
const GroupExpenses=lazy(()=>import("../components/GroupExpenses"))
import { useUserAuth } from '../context/UserAuthcontext'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../features/split/split'
// import ExpenseModal from '../components/ExpenseModal'
const ExpenseModal =lazy(()=>import("../components/ExpenseModal"))
function Groups() {
  // const {username}=useUserAuth();
  const username=localStorage.getItem("username")
 
  
const groupid=useParams();
// console.log(groupid.id);
 

 



  // const [show, setShow] = useState(false);
  const [topic, settopic] = useState("");
  const [payer, setpayer] = useState("");
  const [amount, setamount] = useState("");

const dispatch=useDispatch();
const {isOpen}=useSelector((store)=>store.split);
// console.log(isOpen);
  return (
    <>
    <div className="dashboard">
           <div className='leftbar'>
        <div className="menu">
        <span><Link to="/"  className='dashboarding'>
    {/* <img src={h1} alt="" style={{width:"20px",height:"20px"}} /> */}
        Dashboard
        </Link>
        </span>
       
        <button className='addgroup'> Add Group +</button>
        <button className='addgroup'> Add Member +</button>
        <button className='addgroup' onClick={()=>dispatch(openModal())} > Add Expense +</button>
        </div>
        <div className='belowmenu'>
      <div className='back'>
        <img src={p1} alt="" style={{width:"35px",height:"35px"}} />
        <div className='rs'>

        welcome back
       <p>
        {username}
        </p>
        </div>
       </div>
      <div className='out'><img src={s1} alt=""style={{width:"25px",height:"25px"}} />Sign Out</div>
        </div>
      </div>





      <div className='grpexpenses'>
     <Suspense fallback={<div>Loading ...</div>}>
        <GroupExpenses id={groupid.id}/>
        </Suspense>

      </div>




    <div className='grpmembers'>
      <Suspense fallback={<div>Loading ...</div>}>
      <Rightgroup id={groupid.id}/>
      </Suspense>
   
    
    </div>
    </div>
    <Suspense fallback={<div>Loading ...</div>}>
    {isOpen&&<ExpenseModal id={groupid.id}/>}
    </Suspense>
    </>
  )
}

export default Groups