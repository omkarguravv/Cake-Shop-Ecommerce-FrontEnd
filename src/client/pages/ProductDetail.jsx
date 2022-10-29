import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import Navbar from '../components/Navbar'
import { useParams, useNavigate } from 'react-router-dom';
import { GiCogLock } from 'react-icons/gi'


function ProductDetail() {
    const { id } = useParams();
    const [cakes, setCakes] = useState([])
    const [price, setPrice] = useState()
    const [nameonCake, setNameonCake] = useState('');
    const [address, setAddress] = useState('');
    const [qty, setQty] = useState('0.5kg')
    const user_id = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))._id;

    const product = id
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://wowcakes.herokuapp.com/api/product/${id}`)
            .then(res => {
                // console.log(res.data);
                // console.log(res.data.pro);
                setCakes(res.data.pro);
                setPrice(res.data.pro.price)


            }).catch(err => {
                console.log(err);
            })

    }, [])

    const order = () => {
        axios.post('https://wowcakes.herokuapp.com/api/order', {
            nameonCake, qty, price, address, user_id, product
        }).then(data => {
            console.log(data)
        })
        // console.log(result)
    }
    console.log(qty)
    console.log(nameonCake)
    console.log(user_id)
    localStorage.setItem('amount', price)
    console.log(localStorage.getItem("amount"))
    let myOrder = {
        name: cakes.name,
        img: cakes.img,
        amount: price,
        Quantity: qty
    }
    localStorage.setItem("order", JSON.stringify(myOrder))



    return (
        <>
            <Navbar />

            <div className='w-full mt-32  '>
                <div className='  mx-auto flex flex-col justify-center w-full h-full '>


                    <div className='flex  flex-col lg:flex lg:flex-row mx-0 lg:mx-28 '>

                        <div className='w-full    lg:w-1/2 '>

                            <div className='mx-6 lg:mx-20  '>
                                <img className='rounded-md' src={cakes.img} alt="" />
                            </div>

                            <div className=' hidden ml-20 mt-2'>
                                <p className='font-bold text-lg  leading-loose'>{cakes.description}</p>
                            </div>
                        </div>

                        <div className='w-full lg:w-1/2 ml-6'>
                            <h3 className='mt-4 lg:mt-0 font-bold text-xl lg:text-4xl '>{cakes.name}</h3>


                            <div className='flex items-center bg-[#5B9139] w-14 justify-center rounded-md  text-white mt-3 lg:mt-3 '>
                                <AiFillStar color='white' />
                                <p >4.9</p>
                            </div>

                            <div className='flex items-center mt-6  '>
                                <p className='font-bold text-3xl mr-6'> Rs. {price}</p>
                                {/* <p className='line-through font-thin text-2xl text-slate-400 '>${qty+300}</p> */}
                            </div>

                            <div className='mt-8'>
                                <h4 className='font-semibold text-2xl'>Select Weight</h4>
                                <div className='mt-4'>
                                    <button onClick={(e) => {
                                        setPrice(cakes.price)
                                        setQty(e.target.innerText)
                                    }} className='bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded mr-3'>0.5kg</button>
                                    <button onClick={(e) => {
                                        setPrice(cakes.price * 2)
                                        setQty(e.target.innerText)
                                    }} className='bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded mr-3'>1kg</button>
                                    <button onClick={(e) => {
                                        setPrice(cakes.price * 3)
                                        setQty(e.target.innerText)
                                    }} className='bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded mr-3'>1.5kg</button>
                                    <button onClick={(e) => {
                                        setPrice(cakes.price * 4)
                                        setQty(e.target.innerText)
                                    }} className='bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded mr-3'>2kg</button>

                                </div>
                            </div>

                            <div>
                                <div className='pr-10 lg:pr-0'>
                                    <label for="first_name" className="block mb-2  text-gray-900  font-semibold text-xl mt-8   ">Cake Message</label>
                                    <input type="text" id="first_name" onChange={(e) => {
                                        setNameonCake(e.target.value)
                                    }} className=" bg-white border border-yellow-300 text-black text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-white dark:border-yellow-600 dark:placeholder-black dark:text-black dark:focus:ring-yellow-500 dark:focus:yellow-blue-500" placeholder="Enter Name on Cake" required />


                                    <label for="address" className="block mb-2  text-gray-900  font-semibold text-xl mt-8   ">Address </label>
                                    <input type="text" id="address" onChange={(e) => {
                                        setAddress(e.target.value)
                                    }} className=" bg-white border border-yellow-300 text-black text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-white dark:border-yellow-600 dark:placeholder-black dark:text-black dark:focus:ring-yellow-500 dark:focus:yellow-blue-500" placeholder="Delivery Location" required />
                                </div>
                            </div>

                            <button onClick={() => {
                                order()
                                navigate('/payment')
                            }} className='bg-yellow-300 text-black rounded-md px-10 py-3 text-xl font-extrabold mt-10'>Buy Now</button>

                            <div className='  ml-2 mt-4 mr-6 '>
                                <p className='font-bold text-lg  leading-loose'>Product Description:</p>
                                <p>{cakes.description}</p>
                            </div>

                        </div>

                    </div>

















                </div >
            </div >


        </>
    )
}

export default ProductDetail
