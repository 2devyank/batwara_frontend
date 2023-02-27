import React, { useEffect, useState } from 'react'
import "../styles/Dashboard.css"
import p1 from "../assets/p1.svg"
import s1 from "../assets/s1.png"
import h1 from "../assets/h1.png"
import jg from "../assets/jg.png"
import user from "../assets/user.png"
import { Link, useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { useUserAuth } from '../context/UserAuthcontext'
function Dashboard() {
  const [grpdata, setgrpdata] = useState([])
  const [persondata, setpersondata] = useState([])
  const [loading, setloading] = useState(false);
const navigate=useNavigate();
  useEffect(() => {
    getgrpdata();
    getpersondata();
  }, [])

const {name}=useUserAuth();
console.log(name);

  async function getgrpdata() {
    const result = await fetch(`http://localhost:5000/group/${localStorage.getItem("pid")}`)
    const data = await result.json();
    setgrpdata(data);
  }
  localStorage.removeItem("id");
  async function getpersondata() {
    const token = localStorage.getItem("token");
    const result = await fetch("http://localhost:5000/user", {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` }
    })
    const data = await result.json();
    setpersondata(data);
    setloading(true);
  }
  if (loading) {

    localStorage.setItem("pid", persondata[0].person_id)
  }
  console.log(grpdata);
  // console.log(persondata[0].email);
  return (
    <>

      <div className='dashboard'>
        <div className='leftbar'>
          <div className="menu">
            <span><Link to="/" className='dashboarding'>
              <img src={h1} alt="" style={{ width: "20px", height: "20px" }} />
              Dashboard
            </Link>
            </span>

            <button className='addgroup'> <img src={jg} alt="" style={{ width: "30px", height: "30px" }} />Add Group +</button>
            <button className='addgroup'> <img src={user} alt="" style={{ width: "30px", height: "30px" }} />Add Member +</button>
          </div>
          <div className='belowmenu'>
            <div className='back'>
              <img src={p1} alt="" style={{ width: "35px", height: "35px" }} />
              <div className='rs'>

                welcome back
                <p>
                  camila
                </p>
              </div>
            </div>
            <div className='out'><img src={s1} alt="" style={{ width: "25px", height: "25px" }} />Sign Out</div>
          </div>
        </div>
        <div className='middlebar'>
          <div className='mentos'>
            {loading ? (
              <div className='info'>
                <img src="" alt="" />
                <p className='camila'>{persondata[0].name}</p>
                <p>Phone No : +91 {persondata[0].phone}</p>
                <p>Email : {persondata[0].email}</p>
              </div>
            ) : (
              <div>Working ....</div>
            )
            }
            <div className='rightinfo'>
              <div className='aboveinfo'>
                Owe You
                <p >
                  + ₹300
                </p>
              </div>
              <div className='belowinfo'>
                You Owe
                <p>
                  - ₹500
                </p>
              </div>
            </div>
          </div>
          <div className='downmentos'>
            <div className='lended'></div>
            <div className='pay'> </div>
          </div>
        </div>
        <div className="rightbar">
          <h2>
            My Groups
          </h2>
          <Table >
            <thead>
              <tr>
                <th>#</th>
                <th >Group Name</th>

              </tr>
            </thead>
            {grpdata.map((data) => (
              <tbody>
                <tr onClick={()=>navigate(`/groups/${data.group_id}`)} >
                  <td>#</td>
                  <td >{data.grpname}</td>

                </tr>

              </tbody>
            ))}

          </Table>
        </div>
      </div>

    </>
  )
}

export default Dashboard