import React from 'react'
import "../styles/Dashboard.css"
import "../styles/Groups.css"
import p1 from "../assets/p1.svg"
import s1 from "../assets/s1.png"
import h1 from "../assets/h1.png"
import jg from "../assets/jg.png"
import user from "../assets/user.png"
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
function Groups() {
  const [grpmember,setgrpmember]=useState("");

  async function getgrpdata() {
    const result = await fetch("http://localhost:5000/expense")
    const data = await result.json();
    setgrpmember(data);
  }
  return (
    <div className="dashboard">
           <div className='leftbar'>
        <div className="menu">
        <span><Link to="/"  className='dashboarding'>
    <img src={h1} alt="" style={{width:"20px",height:"20px"}} />
        Dashboard
        </Link>
        </span>
       
        <button className='addgroup'> <img src={jg} alt="" style={{width:"30px",height:"30px"}} />Add Group +</button>
        <button className='addgroup'> <img src={user} alt="" style={{width:"30px",height:"30px"}} />Add Member +</button>
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

      </div>
    <div className='grpmembers'>
    <h3>
        Group Members
        </h3>
    <Table >
      <thead>
        <tr>
          <th>#</th>
          <th >Group Name</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#</td>
          <td >Mark</td>
      
        </tr>
       
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Groups