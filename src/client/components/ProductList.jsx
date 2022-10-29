import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import CakeCard from './CakeCard'
import Navbar from './Navbar'

function ProductList() {
    const [cakes, setCakes] = useState([])
    const [carts, setCarts] = useState([])

    useEffect(() => {
       
        axios.get('https://wowcakes.herokuapp.com/api/product/get')
            .then(res => {
                // console.log(res.data);
                setCakes(res.data.products)

            }).catch(err => {
                console.log(err);
            })

    }, [])

   
    


    return (
        <>
            <div>
                <Navbar />
                <div className='w-full pt-32    bg-[#FFFFF] '>
                    <div className='items-center  mx-auto flex flex-col justify-center w-full h-full '>

                        <div className='   grid grid-cols-4 justify-center gap-3  gap-x-10  '>
                            {cakes.map((cakeItem) => {
                                return (
                                    <CakeCard
                                        key={cakeItem._id}
                                        cakeItem={cakeItem}
                                        // handleClick={handleClick}
                                        // carts={carts}
                                        // setCarts={setCarts}

                                    />
                                )
                            })}

                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductList
