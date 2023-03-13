import React, { useEffect, useState } from 'react'
import "../styles/Dashboard.css"
import p1 from "../assets/p1.svg"
import s1 from "../assets/s1.png"
import h1 from "../assets/h1.png"
import jg from "../assets/jg.png"
import user from "../assets/user.png"
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Modal, Table } from 'react-bootstrap'

import Rightdash from '../components/Rightdash'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { getpersondata } from '../api'
import Transaction from '../components/Transaction'
import Settle from '../components/Settle'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../features/split/group'
function Dashboard() {
 
  const navigate = useNavigate();

  const {getm,givem}=useSelector((store)=>store.split)
  localStorage.removeItem("id");

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
  return (
    <>

      <div className='dashboard'>
        <div className='leftbar'>
          <div className="menu">
            <button className='addgroup' onClick={()=>navigate("/dash")}>
              {/* <img src={h1} alt="" style={{ width: "20px", height: "20px" }} /> */}
              Dashboard
           
            </button>
            <button className='addgroup' onClick={()=>{
              navigate("/addgroup")
              dispatch(openModal());
            }}>
               {/* <img src={jg} alt="" style={{ width: "30px", height: "30px" }} /> */}
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
            <Transaction member={username}/>

            </div>
            <div className='se'>

            <Settle member={username}/>
            </div>
          </div>
        </div>
        <div className="rightbar">
          <Rightdash username={username} />
        </div>
      </div>
    </>
  )
}

export default Dashboard