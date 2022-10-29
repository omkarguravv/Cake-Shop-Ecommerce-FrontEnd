import React from 'react'
import { Link } from 'react-router-dom'
// import { useState } from 'react'



const CakeCard = ({ cakeItem, setCarts, carts }) => {


    const { _id, img, name, description, price  } = cakeItem
    // const handleClick = (cakeItem) => {
    //     if (carts.indexOf(cakeItem) !== -1) return;
    //     setCarts([...carts, cakeItem]);
    //     console.log(carts);
    //   };



    return (
        <Link to={`/productdetail/${_id}`}>


            <div className='hover:scale-110 duration-500 '>
                <div key={_id}>
                    {/* <img src={cake.img} width={300} alt="mo" />
                                        {cake.name} */}
                    <div className=' rounded-md p-2 bg-[#FEFEFF] w-72  shadow-lg '>
                        <div className='rounded-md mx-2 mt-2'><img className='rounded-md ' src={img} alt="no img" /></div>
                        <div className='p-2'>
                            <p className='font-bold text-2xl'>{name}</p>
                            {/* <p className='font-thin text-[#393737] overflow-hidden '>{description}</p> */}

                            <p className='font-bold text-xl mt-2'> ₹{price}</p>
                            <p className='font-thin text-[#393737]'>Earliest Delivery :TODAY</p>
                            {/* <button onClick={() => handleClick(cakeItem)} className='bg-gray-300'>Add to cart</button> */}
                        </div>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default CakeCard
