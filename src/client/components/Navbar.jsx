import React from 'react'
import { useState } from 'react'
import { Button } from './Button';
import { GiCupcake } from 'react-icons/gi'
import { HiOutlineViewList } from 'react-icons/hi'
import { MdClose } from "react-icons/md"
import { FaShoppingCart } from "react-icons/fa"

import * as Scroll from 'react-scroll';


import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import {  } from 'react-scroll'
// import Product from '../pages/Product';



const Navbar = ({ setShow, size }) => {
    let ReactScroll = Scroll.Link;
    let Links = [
        {id:1, name: "home", link: "/" },
        {id:2,  name: "explore", link: "/" },
        {id:3,  name: "about", link: "/" },
        {id:4,  name: "contact", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    const [isLoggedin, setIsLoggedin] = useState(false);

    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            setIsLoggedin(true)
        }
    }, [])
    // const [show, setShow] = useState(true)
    const navigate = useNavigate()
    const Logout = () => {
        localStorage.clear()
        setIsLoggedin(false)
    }
    return (
        <>

            <div className=' z-50 shadow-md  w-full fixed top-0 left-0 '>
                <div className='md:flex items-center justify-between bg-gradient bg-[#FEFEFF] py-4 md:px-10 px-7'>
                    <div onClick={() => setShow(true)} className=' font-custom font-bold text-2xl cursor-pointer flex items-center 
      text-black '>
                        <span className='text-3xl text-pink-800 mr-1 pt-2'>
                            <GiCupcake size={50} />
                        </span>
                        <div className='tracking-widest ' >

                            Wow Cakes
                        </div>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        {open ? <MdClose /> : <HiOutlineViewList />}



                    </div>

                    <ul className={`md:hidden flex items-center justify-center flex-col
                      bg-[#e7e7ef] text-center font-bold  
                        absolute h-screen   z-[-1] left-0 w-full transition-all duration-1000  ease-in ${open ? 'top-1   ' : 'top-[-830px]'}`}>
                        {
                            Links.map((link) => (
                                <ReactScroll to={link.name}  smooth duration={500} >
                                <li key={link.id} className='duration-300 ease-in md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={link.link} className=' text-gray-800   duration-500 capitalize'>{link.name}</a>
                                </li>
                                </ReactScroll>
                            ))
                        }
                        <Link to={isLoggedin ? "/" : "/signin"} >
                            <button className='hover:scale-110  md:ml-4 py-2 px-6  rounded-full duration-500 hover:bg-[#F3C623] bg-[#FFE229] text-black hover:text-black' onClick={isLoggedin ? Logout : null} > {isLoggedin ? "Logout" : "Sign in"} </button>
                        </Link>



                    </ul>
                    {/* Desktop view  */}
                    <ul className={` hidden md:flex md:items-center 
                     
                       md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1]  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in `}>
                        {
                            Links.map((link) => (
                                <ReactScroll to={link.name}  smooth duration={500}  >

                                <li key={link.id} className='hover:scale-110 duration-300 ease-in-out  md:ml-8 text-xl md:my-0 my-7'>
                                    <Link to={link.link} className='hover:text-black  text-gray-800  duration-500 capitalize'>{link.name}</Link>
                                    {/* {navigate(`${link.link}`)} */}

                                </li>

                                </ReactScroll>
                            ))
                        }


                        <Link to={isLoggedin ? "/" : "/signin"} >
                            <button className='hover:scale-110 text-lg  md:ml-4 py-2 px-6  rounded-full duration-500 hover:bg-[#F3C623] bg-[#FFE229] text-black hover:text-black' onClick={isLoggedin ? Logout : null} > {isLoggedin ? "Logout" : "Sign in"} </button>
                        </Link>




                    </ul>


                </div>
            </div>





        </>
    )
}

export default Navbar
