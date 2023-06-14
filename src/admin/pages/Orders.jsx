import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Orders = () => {

  const [order, setOrder] = useState([])
  useEffect(() => {
    axios.get(`https://wowcakebackend.onrender.com/api/order/get`)
      .then(res => {
        // console.log(res.data);
        setOrder(res.data.order)

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
      <div>


        return (
        <>
          <Navbar />


          <h1 className='mt-28 text-4xl text-center'>Orders</h1>











          <div className="overflow-x-auto relative shadow-md rounded-md px-20 pt-3">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  ">
                <tr className=' text-center'>
                  <th scope="col" className="py-3 px-6">
                    User ID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Product
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Name on Cake
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Price
                  </th>
                  {/* <th scope="col" className="py-3 px-6">

                </th> */}

                </tr>
              </thead>
              {order.map((o) => {
                return (
                  <>

                    <tbody className='overflow-auto'>
                      <tr className="bg-white border-b text-center  ">
                        <th scope="row" className="py-4 px-6 font-medium text-black whitespace-nowrap ">
                          {o.user_id}
                        </th>
                        <td className="py-4 px-6 font-medium text-black">
                          {o.product}
                        </td>
                        <td className="py-4 px-6 font-medium text-black">
                          {o.nameonCake}
                        </td>
                        <td className="py-4 px-6 font-medium text-black">
                        ₹{o.price}
                        </td>
                        {/* <td className="py-4 px-6 font-medium text-black">
                        <a href="/" className="font-medium text-blue-600  hover:underline">Edit</a>
                      </td> */}
                      </tr>

                    </tbody>

                  </>
                )
              })}

            </table>
          </div>

















        </>
        )


      </div>

    </>
  )
}

export default Orders
