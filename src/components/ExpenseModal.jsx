import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getallgroupsmember } from '../api';
import { closeModal } from '../features/split/split';

export default function ExpenseModal({id}) {
    
        const {isOpen}=useSelector((store)=>store.split);
        const dispatch=useDispatch();
        const groupmemQuery=useQuery({
            queryKey:["groupsmem",id],
            queryFn:()=>getallgroupsmember(id)
        })
    
        if(groupmemQuery.status==="loading") return <h1>Loading...</h1>
        if(groupmemQuery.status==="error") {
          return <h1>{JSON.stringify(groupmemQuery.error)}</h1>
        }

const payerref=useRef();
const topicref=useRef();
const totalpriceref=useRef();
const queryClient=useQueryClient();

    function createexpense({payer,topic,totalprice}){
        return axios.post("http://localhost:5000/expense",{
        expense_id:Math.random().toString(3).slice(-4),
        payer:payer,
        topic:topic,
        totalprice:totalprice,
        group_id:id,
        member:groupmemQuery.data[0].grpmember,
    
        })
    }

    const createExpensebygroup=useMutation({
        mutationFn:createexpense,
        onSuccess:data=>{
            queryClient.setQueryData(["expenses",data.id],data)
            queryClient.invalidateQueries(["expenses"],{exact:true})
            dispatch(closeModal())
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
                    <Button variant="primary" onClick={handleexpense} >
                        ADD EXPENSE
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
