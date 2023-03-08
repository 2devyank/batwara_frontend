import React, { useEffect, useState } from 'react'
import "../styles/Dashboard.css"
import "../styles/Groups.css"
import p1 from "../assets/p1.svg"
import s1 from "../assets/s1.png"
import h1 from "../assets/h1.png"
import jg from "../assets/jg.png"
import user from "../assets/user.png"
import {  Link, useParams } from 'react-router-dom'
import { Button, Modal, Table,Form } from 'react-bootstrap'
// import { useUserAuth } from '../context/UserAuthcontext'
import Rightgroup from '../components/Rightgroup'
import GroupExpenses from '../components/GroupExpenses'
import { useUserAuth } from '../context/UserAuthcontext'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../features/split/split'
import ExpenseModal from '../components/ExpenseModal'
function Groups() {
  // const {username}=useUserAuth();
  const username=localStorage.getItem("username")
 
  
const groupid=useParams();
// console.log(groupid.id);
 

 



  // const [show, setShow] = useState(false);
  const [topic, settopic] = useState("");
  const [payer, setpayer] = useState("");
  const [amount, setamount] = useState("");

  // async function handleClose(e){
  //   e.preventDefault();
  // const group_id=groupid.id;
  // const totalprice=amount;
  // try{

  //   const expense_id=Math.random().toString(3).slice(-4);
  //  let member=grpmember[0].grpmember;
  //   const body={expense_id,payer,topic,totalprice,group_id,member}
  //   const result=await fetch("http://localhost:5000/expense",{
  //     method:"POST",
  //     headers:{"Content-type":"application/json"},
  //     body:JSON.stringify(body)
  //   })
    
  //   setShow(false)
  //   setpayer("")
  //   setamount("")
  //   settopic("")
  // }catch(e){
  //   console.log(e);
  // }
  // }
  // const handleShow = () => setShow(true);
  // const handlestop = () => setShow(false);
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
        <GroupExpenses id={groupid.id}/>
   

      </div>




    <div className='grpmembers'>
      <Rightgroup id={groupid.id}/>
   
    
    </div>
    </div>
      {/* <Modal show={show} onHide={handleClose}>
      <Modal.Header >
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
<Form>
  
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="description" placeholder="Enter Description" value={topic} onChange={(e)=>settopic(e.target.value)}/>
 
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Amount</Form.Label>
    <Form.Control type="amount" placeholder="Enterrr Amount" value={amount} onChange={(e)=>setamount(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Who Payed</Form.Label>
    <Form.Control type="name" placeholder="Enter payer" value={payer} onChange={(e)=>setpayer(e.target.value)}/>
 
  </Form.Group>
</Form>



      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" onClick={handlestop}>
         close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          ADD EXPENSE
        </Button>
      </Modal.Footer>
    </Modal> */}
    {isOpen&&<ExpenseModal id={groupid.id}/>}
    </>
  )
}

export default Groups