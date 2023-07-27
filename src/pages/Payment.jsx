import React, { useState } from 'react'
import '../styles/payment.css'
import img from "../assets/pay.svg"
import { FloatingLabel, Form } from 'react-bootstrap';

export default function Payment() {
console.log(import.meta.env.VITE_RAZORPAY_KEY);

const [amount,setamount]=useState(0);
const [name,setname]=useState("");
console.log(amount);
    const intializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';

            script.onload = () => {
                resolve(true);
            }
            script.onerror = () => {
                resolve(false);
            }
            document.body.appendChild(script);
        })
    }
    const makePayment = async () => {
        const res = await intializeRazorpay();

        if (!res) {
            alert('RazorPay SDK failed to load');
            return;
        }
        const body={amount}
        const data = await fetch("http://localhost:3000/createOrder", { method: "POST", headers:{"Content-type":"application/json"},body:JSON.stringify(body) }).then((t) => t.json());
        console.log(data);

        var options = {
            key: import.meta.env.VITE_RAZORPAY_KEY,
            name: name,
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: "thank you for donation",
            image: "https://media.geeksforgeeks.org/wp-content/uploads/20210806114908/dummy-200x200.png",
            handler: function (response) {
                alert("Payment succesfull !");
              
            },
            prefill: {
                name: name,
                email: "devyanknagpal2002@gmail.com",
                contact: "9090909090",
            },

        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

    }


    return (
        <div className='pay'>
            <div className='leftpay'>
                <p className='paymentspice'>
                    <span className='spicegrey'>
                    Secure
                    </span>
                     <span className='spiceWhite'>Payment !</span></p>
                     <span className='hype'>The most hype generation payment </span>

                <div className='paycheck'>
                     <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
        >
        <Form.Control type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Amount To Pay"
        className="mb-3"
        >
        <Form.Control type="text"  value={amount} onChange={(e)=>setamount(e.target.value)}placeholder="name@example.com" />
      </FloatingLabel>
                <button className='paybut' onClick={makePayment}>
                    SEND PAYMENT
                </button>
          </div>
            </div>
            <div className='rightpay'>
                <img src={img} className='paymentimage' />
            </div>
        </div>
    )
}
