import React, { useEffect, useState } from 'react'
import "../styles/Dashboard.css"
import p1 from "../assets/p1.svg"
import s1 from "../assets/s1.png"
import h1 from "../assets/h1.png"
import jg from "../assets/jg.png"
import user from "../assets/user.png"
import {  Link, useNavigate } from 'react-router-dom'
import { Form,Button, Modal, Table } from 'react-bootstrap'
import { useUserAuth } from '../context/UserAuthcontext'
function Dashboard() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);
 
  const [grpdata, setgrpdata] = useState([])
  const [persondata, setpersondata] = useState([])
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getgrpdata();
    getpersondata();
  }, [])

  const { username, setusername, filexp, filesuperexp } = useUserAuth();



  async function getgrpdata() {
    const result = await fetch(`http://localhost:5000/group/${username}`)
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

    setusername(persondata[0].name)
    localStorage.setItem("pid", persondata[0].person_id)
  }

  // console.log(username);
  // console.log(grpdata);
  // console.log(persondata[0].email);





  const [grpname, setgrpname] = useState("");
  const [input, setinput] = useState("");
  const [grpmember, setgrpmember] = useState([]);
  const [list, setlist] = useState([]);


  useEffect(()=>{
getmember(input);
  },[input]);
  async function getmember(query){
    // e.preventDefault();
    const result=await fetch(`http://localhost:5000/user/${query}`)
    const data=await result.json();
setlist(data);

  }
  console.log(list[0]);



const handleadd=(e)=>{
  e.preventDefault();
  setgrpmember(prevState => [...prevState,list[0].name]);
  // setlist('')
  setinput('')


}
console.log(grpmember);

async function postgroup(e){
  let person_id=localStorage.getItem("pid")
  let group_id=Math.random().toString(6).slice(-5);
  try{

    const body={group_id,person_id,grpname,grpmember}
    const result=await fetch("http://localhost:5000/group",{
      method:"POST",
      headers:{"Content-Type":"Application/json"},
      body:JSON.stringify(body)
    })
    setShow(false);
  }catch(e){
    console.log(e)
  }
}

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

            <button className='addgroup' onClick={handleShow}> <img src={jg} alt="" style={{ width: "30px", height: "30px" }} />Add Group +</button>
            <button className='addgroup'> <img src={user} alt="" style={{ width: "30px", height: "30px" }} />Add Member +</button>
          </div>
          <div className='belowmenu'>
            <div className='back'>
              <img src={p1} alt="" style={{ width: "35px", height: "35px" }} />
              <div className='rs'>

                welcome back
                  {
                    loading ? (
                      
                      <p>
                      { persondata[0].name }
                </p>
                    ) : (
                      null
                    )
                  }
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

            {
              filexp ?
                (
                  <Table >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Person</th>
                        <th>Amount</th>

                      </tr>
                    </thead>
                    {
                      filexp.map((data) => {
                        let cost = data.totalprice
                        let num = data.member.length
                        return data.member.map((d) => (
                          d != username ? (
                            <tbody>
                              <tr >
                                <td>#</td>

                                <td>{d}</td>
                                <td>+{cost / num}</td>
                              </tr>
                            </tbody>
                          ) : (<div></div>)

                        ))


                      })}
                    {
                      filesuperexp.map((data) => {
                        let nam = data.payer
                        let cost = data.totalprice
                        let num = data.member.length
                        return data.member.map((d) => (
                          d == nam ? (
                            <tbody>
                              <tr >
                                <td>#</td>

                                <td>{d}</td>
                                <td>-{cost / num}</td>
                              </tr>
                            </tbody>
                          ) : (<div></div>)

                        ))


                      })}
                  </Table>
                ) : (
                  <div></div>

                )
            }


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
                <tr onClick={() => navigate(`/groups/${data.group_id}`)} >
                  <td>#</td>
                  <td >{data.grpname}</td>

                </tr>

              </tbody>
            ))}

          </Table>
        </div>
      </div>



      <Modal show={show} onHide={postgroup}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
<Form>
  
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Group Name</Form.Label>
    <Form.Control type="group name" placeholder="Enter Group Name" value={grpname} onChange={(e)=>setgrpname(e.target.value)}/>
 
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Add Group Member</Form.Label>
    {/* {grpmember.map((data)=>{
return <span>{data}</span>
    }
  )} */}
    <Form.Control type="name" placeholder="Enterrr Member" value={input} onChange={(e)=>setinput(e.target.value)}/>
  
  {list.map((li)=>{
 return<div>

 <span>{li.email}</span>
 <button onClick={handleadd}>ADD</button>
 </div> 
})}
  </Form.Group>
  
</Form>



      </Modal.Body>
      <Modal.Footer>
        
        <Button variant="primary" onClick={postgroup}>
          CREATE GROUP
        </Button>
      </Modal.Footer>
    </Modal>

    </>
  )
}

export default Dashboard