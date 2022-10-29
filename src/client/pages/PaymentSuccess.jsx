import React from 'react'
import { Link } from 'react-router-dom';


function PyamentSuccess() {


  return (
    <>
 

      <div className='flex flex-row justify-center items-center h-screen bg-[#ffff] '>
        <div>

          <h1 className='text-5xl '>Order Successful</h1>
          <Link to='/productlist'><h1 className=' underline mt-6 text-2xl'>Checkout Some other Cakes</h1></Link>

          <h2 className='text-dark-purple underline hover:text-dark-purple/50 '>

            <Link to='/'>Go Back To Home Page</Link>
          </h2>
        </div>
        <div className='w-1/2 '>

          <img className='bg-no-repeat bg-cover bg-center ' src="/images/order.png" alt="" />
        </div>
      </div>

    </>
  )
}

export default PyamentSuccess;