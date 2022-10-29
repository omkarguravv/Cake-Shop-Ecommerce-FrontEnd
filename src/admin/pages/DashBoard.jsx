import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function DashBoard() {

    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/admin')
        }
    })

    return (
        <>
        <div className='flex text-center items-center justify-center h-screen'>

            <h1 className='text-7xl font-semibold '>Welcome to admin dashboard</h1>
            <img className='w-1/2 p-20' src="/images/admin.png" alt="" />
        </div>
        </>
    )
}

export default DashBoard
