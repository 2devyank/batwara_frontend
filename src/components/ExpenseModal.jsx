import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { getallgroupsmember } from '../api';
import { closeModal } from '../features/split/split';

export default function ExpenseModal() {
    const id=localStorage.getItem("groupid")
    
        const {isOpen}=useSelector((store)=>store.split);
        const dispatch=useDispatch();
       const {members}=useSelector((store)=>store.split)
       const navigate=useNavigate();

const payerref=useRef();
const topicref=useRef();
const totalpriceref=useRef();
const queryClient=useQueryClient();

    function createexpense({payer,topic,totalprice}){
        return axios.post("http://localhost:5000/expense",{
        expense_id:Math.random().toString(3).slice(-5),
        payer:payer,
        topic:topic,
        totalprice:totalprice,
        group_id:id,
        member:members[0],
    
        })
    }

    const createExpensebygroup=useMutation({
        mutationFn:createexpense,
        onSuccess:async(data)=>{
            console.log(data);
            queryClient.setQueryData(["expenses",data.id],data)
            queryClient.invalidateQueries(["expenses"],{exact:true})
            dispatch(closeModal())
            navigate(`/groups/${id}`)
        }
    })
    function handleexpense(e){
        e.preventDefault();
        createExpensebygroup.mutate({
            payer:payerref.current.value,
            topic:topicref.current.value,
            totalprice:totalpriceref.current.value
        })
    }

    return (
        <>
        {createExpensebygroup.isLoading && <div>Loading ...</div>}
            <Modal show={isOpen} >
                <Modal.Header >
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="description" placeholder="Enter Description" ref={topicref}/>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="amount" placeholder="Enterrr Amount" ref={totalpriceref}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Who Payed</Form.Label>
                            <Form.Control type="name" placeholder="Enter payer" ref={payerref}/>

                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>dispatch(closeModal())}>
                        close
                    </Button>
                    <Button variant="primary" onClick={handleexpense}  >
                        ADD EXPENSE
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
