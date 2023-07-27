import React, { useEffect, useState } from 'react'
import "../styles/Register.css"
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import art from "../assets/art.png";
import { Link, useNavigate } from 'react-router-dom';
function Register() {
  const navigate=useNavigate();
  const [name,setname]=useState("");
  const [phone,setphone]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  // console.log(person_id);
  
  async function handleregister(e){
    e.preventDefault();
    try{
      const person_id=Math.floor(Math.random()*Date.now()).toString(8).slice(-2);
      
      const body={person_id,name,email,phone,password};
      const result = await fetch("https://batwarabackend.adaptable.app/register",{
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(body)
      }) 
      navigate("/");
      
    }catch(e){
      console.log(e);
        }

        setname("")
        setphone("")
        setemail("")
        setpassword("")
  }
  useEffect(()=>{

  })

  return (
    <div className='allover'>
        <div className='signup'>
          <h3>Batwara</h3>

          <div className='box'>
            <button className='dash'>
              <Link style={{textDecoration:"none",color:"black"}} to="/register">
            SignUp
            </Link>
            </button>
            <button className='dash'>
              <Link style={{textDecoration:"none",color:"black"}} to="/">
              LogIn
              </Link>
              </button>
          </div>
          {/* <br /> */}
          <div className="form">

        <Form onSubmit={handleregister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" value={name} onChange={(e)=>setname(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="phone no" placeholder="Enter Phone no" value={phone} onChange={(e)=>setphone(e.target.value)} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)}/>
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} />
      </Form.Group>
     
      <button className="lower" type="Submit">
        Submit
      </button>
    </Form>
          </div>
        </div>

        {/* //design */}
        <div className="design">
        <img className="main" src={art} alt="" />
        <span className='state'>"Split Your Bill With Friends"</span>
        {/* <span className="state">With Friends</span> */}
        </div>
    </div>
  )
}

export default Register