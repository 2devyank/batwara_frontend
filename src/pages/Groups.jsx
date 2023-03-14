import React, { lazy, Suspense, useEffect, useState } from 'react'
import "../styles/Dashboard.css"
import "../styles/Groups.css"
import p1 from "../assets/p1.svg"
import s1 from "../assets/s1.png"

import {  Link, useNavigate, useParams } from 'react-router-dom'


const Rightgroup=lazy(()=>import("../components/Rightgroup"))

const GroupExpenses=lazy(()=>import("../components/GroupExpenses"))

import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../features/split/split'
import { openMember } from '../features/split/member'


function Groups() {

  const username=localStorage.getItem("username")
 
  
const groupid=useParams();

localStorage.setItem("groupid",groupid.id)
 

 const navigate=useNavigate()

const dispatch=useDispatch();
const {isOpen}=useSelector((store)=>store.split);

  return (
    <>
    <div className="dashboard">
           <div className='leftbar'>
        <div className="menu">
        <button className='addgroup' onClick={()=>navigate("/dash")}>
    
        Dashboard
       
        </button>
       
        
        <button className='addgroup' onClick={()=>{
          navigate("/addmember")
          dispatch(openMember())
        }}> Add Member +</button>
        <button className='addgroup' onClick={()=>{
          navigate("/addexpense")
          dispatch(openModal())
          }} > Add Expense +</button>
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
      <div className='out' onClick={()=>navigate("/")}><img src={s1} alt=""style={{width:"25px",height:"25px"}} />Sign Out</div>
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
   
    </>
  )
}

export default Groups