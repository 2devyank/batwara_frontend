import React from 'react'
import "../styles/Register.css"
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import art from "../assets/art.png";
import { Link } from 'react-router-dom';
function Register() {

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
              <Link style={{textDecoration:"none",color:"black"}} to="/login">
              LogIn
              </Link>
              </button>
          </div>
          {/* <br /> */}
          <div className="form">

        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="phone no" placeholder="Enter Phone no" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
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

export default Register