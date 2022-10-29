import React from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { FaArrowCircleLeft } from "react-icons/fa"

function Payment(price) {
 
    const navigate = useNavigate();
    const amount = localStorage.getItem('amount')
    const myOrder = JSON.parse(localStorage.getItem('order'))
    console.log(myOrder);

    console.log(amount);
    const initPayment = (data) => {
     

        const options = {
            key: 'rzp_test_vhscbVAlxby4Go',
            amount: data.amount,
            currency: data.currency,
            name: myOrder.name,
            description: "Test Transaction",
            image: myOrder.img,
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyUrl = "https://wowcakes.herokuapp.com/api/payment/paymentVerify";
                    const data = await axios.post(verifyUrl, response);
                    console.log(data.path);
                    navigate(data.data.path)

                } catch (error) {
                    console.log(error);
                }
            },
            // callback_url: "http://localhost:3001/api/payment/paymentVerify",
            // handler: function (response){
            //     alert(response.razorpay_payment_id);
            //     alert(response.razorpay_order_id);
            //     alert(response.razorpay_signature)
            // },
            prefill: {                                   //sample name,email,contact;
                "name": "",
                "email": "",
                "contact": ""
            },
            notes: {
                "address": ""
            },
            theme: {
                "color": "#3399cc"
            }
        };
        const rzp1 = new window.Razorpay(options)
        rzp1.open()
    };
    const handlePayment = async () => {
    
            try {
                
                const orderUrl = "https://wowcakes.herokuapp.com/api/payment/order";
                const { data } = await axios.post(orderUrl, { amount: myOrder.amount });
                console.log(data);
                initPayment(data.data);
            } catch (error) {
                console.log(error);
            }
    };
    return (
        <>
            {/* <div className='left w-2/3 text-center  flex border  drop-shadow-lg rounded-md'> */}
            <div className='drop-shadow-lg border-black border-solid flex justify-center mt-32  '>
                <div className='flex m-20   border-solid border-black shadow-md w-2/5'>
                    <div className="p-2 ">
                        <Link to={"/productlist"}>  <FaArrowCircleLeft size={25} />
                        </Link>

                    </div>
                    <img className='w-64 h-64 p-10 rounded-md' src={myOrder.img} alt="" />
                    <div className='text-left mt-10'>
                        <p className='font-bold text-3xl'>{myOrder.name}</p>
                        <p className='font-bold text-xl mt-6'>{myOrder.amount}.Rs</p>
                        <p className='mt-4 font-medium text-lg'>Weight <span className='font-bold'>{myOrder.Quantity}</span> </p>
                        <button onClick={() => {
                            handlePayment()
                        }} className='bg-yellow-300 mb-6 text-black rounded-md px-10 py-3 text-xl font-thin  mt-4'>Buy Now</button>
                    </div>
                </div>
                {/* </div> */}




            </div>
        </>
    );
}

export default Payment;
