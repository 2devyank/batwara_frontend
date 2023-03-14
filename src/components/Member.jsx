import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import "../styles/Add.css"
// import { Form } from 'react-router-dom';
import { closeMember } from '../features/split/member'

export default function Member() {
    const [input, setinput] = useState("");
    const [list, setlist] = useState([]);
    const [member, setmember] = useState("");
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(() => {
        getmember(input);
      }, [input]);

      async function getmember(query) {
        // e.preventDefault();
        const result = await fetch(`https://batwarabackend-production.up.railway.app/user/${query}`)
        const data = await result.json();
        setlist(data);
    
      }
      const handleadd = (e) => {
        e.preventDefault();
        setmember( list[0].name);
        // setlist('')
   
      }

    const {ismemOpen}=useSelector((store)=>store.member)
    const id=localStorage.getItem("groupid")
    async function postgroup(e) {
        try {
          const body = { grpmember:member }
          const result = await fetch(`https://batwarabackend-production.up.railway.app/group/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(body)
          })
          dispatch(closeMember())
          navigate(`/groups/${id}`)
        } catch (e) {
          console.log(e)
        }
      }

  return (
    <div>
        <Modal show={ismemOpen} >
        <Modal.Header >
          <Modal.Title>Add New Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Add Group Member</Form.Label><br/>

             <div className='bos'>
                 {member}
                </div>
            
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
            dispatch(closeMember())
            navigate(`/groups/${id}`)
        }}>
            close
          </Button>
          <Button variant="primary" onClick={postgroup}>
           ADD Member
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
