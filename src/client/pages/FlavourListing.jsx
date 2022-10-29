import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import { useState, useEffect } from 'react'
import CakeCard from '../components/CakeCard'
import Navbar from '../components/Navbar'

function FlavourListing() {
    const { flavour } = useParams();
    const [cakes, setCakes] = useState([])
    useEffect(() => {
        axios.get(`https://wowcakes.herokuapp.com/api/product/get/${flavour}`)
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
                <div className='w-full pt-32    bg-[#FBFBFD] '>
                    <div className='items-center  mx-auto flex flex-col justify-center w-full h-full '>

                        <div className='   grid grid-cols-4 justify-center gap-3  gap-x-10  '>
                            {cakes.map((cakeItem) => {
                                return (
                                    <CakeCard
                                        key={cakeItem._id}
                                        cakeItem={cakeItem}
                                    

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

export default FlavourListing
