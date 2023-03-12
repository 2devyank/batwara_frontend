import React, { useState } from 'react'

import "../styles/Register.css"
import {Form} from "react-bootstrap";

import art from "../assets/art.png";
import { Link, Navigate, useNavigate } from 'react-router-dom';
function Login() {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const navigate=useNavigate();
localStorage.removeItem("token");
  async function handlelogin(e){
    e.preventDefault();
    try{
      const body={email,password};
      const result=await fetch("http://localhost:5000/login",{
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(body)
      })
      const data=await result.json();
      console.log(data)
      localStorage.setItem("token",data.accessToken);
      navigate("/dash")
    }catch(e){
      console.log(e);
    }
  }
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

    <Form onSubmit={handlelogin}>
  
 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)}/>
 
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
  </Form.Group>
 
  <button className="lower" type="submit">
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

export default Login