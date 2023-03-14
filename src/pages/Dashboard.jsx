import React, { lazy, Suspense, useEffect, useState } from 'react'
import "../styles/Dashboard.css"
import p1 from "../assets/p1.svg"
import s1 from "../assets/s1.png"

import { Link, useNavigate } from 'react-router-dom'


const Rightdash=lazy(()=>import("../components/Rightdash"))
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { getpersondata } from '../api'

const Transaction=lazy(()=>import("../components/Transaction"))
const Settle=lazy(()=>import("../components/Settle"))

import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../features/split/group'
function Dashboard() {
 
  const navigate = useNavigate();

  const {getm,givem}=useSelector((store)=>store.split)
  localStorage.removeItem("pid");

  let username = localStorage.getItem("username");
  const dispatch=useDispatch();

  const personQuery = useQuery({
    queryKey: ["person"],
    queryFn: getpersondata
  })

  if (personQuery.status === "loading") return <h1>Loading ...</h1>
  if (personQuery.status === "error") {
    return <h1>{JSON.stringify(personQuery.error)}</h1>
  }
  
  localStorage.setItem("username", personQuery.data[0].name)
  localStorage.setItem("pid", personQuery.data[0].person_id)
  return (
    <>

      <div className='dashboard'>
        <div className='leftbar'>
          <div className="menu">
            <button className='addgroup' onClick={()=>navigate("/dash")}>
              
              Dashboard
           
            </button>
            <button className='addgroup' onClick={()=>{
              navigate("/addgroup")
              dispatch(openModal());
            }}>
              
               Add Group +</button>
            
          </div>
          <div className='belowmenu'>
            <div className='back'>
              <img src={p1} alt="" style={{ width: "35px", height: "35px" }} />
              <div className='rs'>

                welcome back


                <p>
                  {personQuery.data[0].name}
                </p>

              </div>
            </div>
            <div className='out' onClick={() => navigate("/")}><img src={s1} alt="" style={{ width: "25px", height: "25px" }} />Sign Out</div>
          </div>
        </div>
        <div className='middlebar'>
          <div className='mentos'>

            <div className='info'>
              <img src="" alt="" />
              <p className='camila'>{personQuery.data[0].name}</p>
              <p>Phone No : +91 {personQuery.data[0].phone}</p>
              <p>Email : {personQuery.data[0].email}</p>
            </div>

            <div className='rightinfo'>
              <div className='aboveinfo'>
                Owe You
                <p >
                  + ₹{localStorage.getItem("get")}
                </p>
              </div>
              <div className='belowinfo'>
                You Owe
                <p>
                  - ₹{localStorage.getItem("youowe")}
                </p>
              </div>
            </div>
          </div>
          <div className='downmentos'>
            <div className='tr'>
            <Suspense fallback={<div>Loading ...</div>}>
            <Transaction member={username}/>
            </Suspense>
            </div>
            <div className='se'>
            <Suspense fallback={<div>Loading ...</div>}>
            <Settle member={username}/>
            </Suspense>
            </div>
          </div>
        </div>
        <div className="rightbar">
        <Suspense fallback={<div>Loading ...</div>}>
          <Rightdash username={username} />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Dashboard