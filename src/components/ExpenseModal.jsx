import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../features/split/split';

export default function ExpenseModal() {
    const {isOpen}=useSelector((store)=>store.split);
    const dispatch=useDispatch();

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
                            <Form.Control type="description" placeholder="Enter Description" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="amount" placeholder="Enterrr Amount" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Who Payed</Form.Label>
                            <Form.Control type="name" placeholder="Enter payer" />

                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>dispatch(closeModal())}>
                        close
                    </Button>
                    <Button variant="primary" >
                        ADD EXPENSE
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
