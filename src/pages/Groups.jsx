import React, { useEffect, useState } from 'react'
import "../styles/Dashboard.css"
import "../styles/Groups.css"
import p1 from "../assets/p1.svg"
import s1 from "../assets/s1.png"
import h1 from "../assets/h1.png"
import jg from "../assets/jg.png"
import user from "../assets/user.png"
import { Link, useParams } from 'react-router-dom'
import { Modal, Table } from 'react-bootstrap'
function Groups() {
  const [grpmember,setgrpmember]=useState([]);
  const [ex,setex]=useState([]);
const groupid=useParams();
console.log(groupid.id);
  async function getexpense() {
    const result = await fetch(`http://localhost:5000/expense/${groupid.id}`)
    const data = await result.json();
    setex(data);
  }
  useEffect(()=>{
    getgrpmates();
    getexpense();
  },[])

  const id =localStorage.getItem("pid");
  async function getgrpmates() {
    const result = await fetch(`http://localhost:5000/group/${id}`)
    const data = await result.json();
    setgrpmember(data);
  }
  console.log(ex);



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <button className='addgroup'> Add Expense +</button>
        </div>
        <div className='belowmenu'>
      <div className='back'>
        <img src={p1} alt="" style={{width:"35px",height:"35px"}} />
        <div className='rs'>

        welcome back
       <p>
        camila
        </p>
        </div>
       </div>
      <div className='out'><img src={s1} alt=""style={{width:"25px",height:"25px"}} />Sign Out</div>
        </div>
      </div>





      <div className='grpexpenses'>
    <h3>Expenses</h3>
    <div></div>
    <div>
   
      {!ex ?(
<div></div>
      ):(
        <Table >
        <thead>
          <tr>
            <th>#</th>
            <th>topic</th>
            <th>payer</th>
            <th>totalprice</th>
            {/* <th >{grpmember[0].grpname}</th> */}
           
          </tr>
        </thead>
        {
          ex.map((mem)=>(
            <tbody>
            <tr>
              <td>#</td>
              <td >{mem.topic}</td>
              <td >{mem.payer}</td>
              <td >{mem.totalprice}</td>
          
            </tr>
           
          </tbody>
          ))
        }
        </Table>
      )}
      
     
    </div>

      </div>









    <div className='grpmembers'>
    <h3>
        Group Members
        </h3>
        {
          !grpmember ? (
<div>working ....</div>
          ) :(
            <Table >
            <thead>
              <tr>
                <th>#</th>
                <th >{grpmember[0].grpname}</th>
               
              </tr>
            </thead>
            
              {grpmember[0].grpmember.map((mem)=>(
                <tbody>
                <tr>
                  <td>#</td>
                  <td >{mem}</td>
              
                </tr>
               
              </tbody>
              ))}
            
           
          </Table>
          )
        }
    
    </div>
    </div>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default Groups