import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CakeCard from '../../client/components/CakeCard'
import Navbar from './Navbar'
function AllProducts() {

    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`https://wowcakebackend.onrender.com/api/product/get`)
            .then(res => {
                // console.log(res.data);
                setProduct(res.data.products)

            }).catch(err => {
                console.log(err);
            })

    }, [])

    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/admin')
        }
    })
    return (
        <>
            <Navbar />
            {/* <div className='w-full pt-32    bg-[#FBFBFD] '>
                    <div className='items-center  mx-auto flex flex-col justify-center w-full h-full '>

                        <div className='   grid grid-cols-4 justify-center gap-3  gap-x-10  '>
                            {product.map((cakeItem) => {
                                return (
                                    <CakeCard
                                        key={cakeItem._id}
                                        cakeItem={cakeItem}
                                       

                                    />
                                )
                            })}

                        </div>



                    </div>
                </div> */}


            <h1 className='mt-28 text-4xl text-center'>Product Page</h1>



            <div className="overflow-x-auto relative shadow-md rounded-md p-2 ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  ">
                        <tr className=' text-center'>
                            <th scope="col" className="py-3 px-6">
                                Image
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                flavour
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Category
                            </th>

                        </tr>
                    </thead>
                    {product.map((o) => {
                        return (
                            <>

                                <tbody className='overflow-auto'>
                                    <tr className="bg-white border-b text-center  ">
                                        <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                            <img className='w-16  h-16 rounded-full' src={o.img} alt="" />
                                            <div className="pl-3 items-center flex">
                                                <div className="font-bold text-black">{o.name}</div>
                                            </div>
                                        </th>
                                        <td className="py-4 px-6 font-bold text-black">
                                            ₹{o.price}
                                        </td>
                                        <td className="py-4 px-6 font-semibold text-black">
                                            {o.flavour}
                                        </td>
                                        <td className="py-4 px-6 font-extralight  text-black overflow-hidden">
                                            {o.description}
                                        </td>
                                        <td className="py-4 px-6 font-medium text-black">
                                        {o.category}
                                            {/* <a href="/" className="font-medium text-blue-600  hover:underline">{o.category}</a> */}
                                        </td>
                                    </tr>

                                </tbody>

                            </>
                        )
                    })}

                </table>
            </div>









        </>
    )
}

export default AllProducts
