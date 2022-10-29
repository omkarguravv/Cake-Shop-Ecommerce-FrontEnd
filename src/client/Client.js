import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'

export const Client = () => {
    return (
        <div>
           
            <Outlet/>
            {/* <Footer/> */}
            

        </div>
    )
}

