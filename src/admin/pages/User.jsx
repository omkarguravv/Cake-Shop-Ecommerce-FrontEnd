import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'

export const User = () => {

  const [user, setUser] = useState([])
  useEffect(() => {
    axios.get(`https://wowcakes.herokuapp.com/api/admin/get`)
      .then(res => {
        // console.log(res.data);
        setUser(res.data.user)

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
      <div className=''>

        <Navbar />
      </div>
      
<h1 className='mt-28 text-4xl text-center'>Users</h1>
      <div className=' mt-4 p-10 '>





        <div class="overflow-x-auto relative shadow-md rounded-md ">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  ">
              <tr className=' text-center'>
                <th scope="col" class="py-3 px-6">
                  First Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Last Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Full Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Email
                </th>
                {/* <th scope="col" class="py-3 px-6">

                </th> */}

              </tr>
            </thead>
            {user.map((o) => {
              return (
                <>

                  <tbody className='overflow-auto'>
                    <tr class="bg-white border-b text-center  ">
                      <th scope="row" class="py-4 px-6 font-medium text-black whitespace-nowrap ">
                        {o.firstName}
                      </th>
                      <td class="py-4 px-6 font-medium text-black">
                        {o.lastName}
                      </td>
                      <td class="py-4 px-6 font-medium text-black">
                        {o.firstName + " " + o.lastName}
                      </td>
                      <td class="py-4 px-6 font-medium text-black">
                        {o.userEmail}
                      </td>
                      {/* <td class="py-4 px-6 font-medium text-black">
                        <a href="/" class="font-medium text-blue-600  hover:underline">Edit</a>
                      </td> */}
                    </tr>

                  </tbody>

                </>
              )
            })}

          </table>
        </div>




      </div>

    </>
  )
}

