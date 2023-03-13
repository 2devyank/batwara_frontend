import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeModal } from '../features/split/group';
import "../styles/Add.css"
// import { Form } from 'react-router-dom'

export default function GroupModal() {
    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    const {isgrpOpen}=useSelector((store)=>store.group)
    const dispatch=useDispatch()
    const navigate=useNavigate();
    const username=localStorage.getItem("username")
  
    const [grpname, setgrpname] = useState("");
  const [input, setinput] = useState("");
  const [grpmember, setgrpmember] = useState([username]);
  const [list, setlist] = useState([]);

    useEffect(() => {
        getmember(input);
      }, [input]);

      async function getmember(query) {
        // e.preventDefault();
        const result = await fetch(`http://localhost:5000/user/${query}`)
        const data = await result.json();
        setlist(data);
    
      }
      // console.log(list[0]);
    
    
    
      const handleadd = (e) => {
        e.preventDefault();
        setgrpmember(prevState => [...prevState, list[0].name]);
        // setlist('')
        setinput('')
        
    
      }
    async function postgroup(e) {
        let person_id = localStorage.getItem("pid")
        let group_id = Math.floor(Math.random()*Date.now()).toString(6).slice(-5);
        try {
    
          const body = { group_id, person_id, grpname, grpmember }
          const result = await fetch("http://localhost:5000/group", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(body)
          })
          dispatch(closeModal())
          navigate("/dash")
         
        } catch (e) {
          console.log(e)
        }
      }
  return (
    <>
        <Modal show={isgrpOpen} >
        <Modal.Header >
          <Modal.Title>Create Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Group Name</Form.Label>
              <Form.Control type="group name" placeholder="Enter Group Name" value={grpname} onChange={(e) => setgrpname(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Add Group Member</Form.Label>
              {/* {grpmember.map((data)=>{
return <span>{data}</span>
    }
  )} */}
              <Form.Control type="name" placeholder="Enterrr Member" value={input} onChange={(e) => setinput(e.target.value)} />

              {list.map((li,i) => {
                return <div className='under'>

                  <span key={i}>{li.email}</span>
                  <button onClick={handleadd}>ADD</button>
                </div>
              })}
            </Form.Group>

          </Form>



        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={()=>{
            dispatch(closeModal())
            navigate("/dash")
        }}>
            close
          </Button>
          <Button variant="primary" onClick={postgroup}>
            CREATE GROUP
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
