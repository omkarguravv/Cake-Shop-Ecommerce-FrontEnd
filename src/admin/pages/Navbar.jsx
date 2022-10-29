import React from 'react'

function Navbar() {
    const LogoutAdmin = () => {
        localStorage.clear()
    }
    return (
        <>

            {/* 
            <nav className=' w-full flex h-16  bg-gradient bg-[#FEFEFF]  p-5  shadow-md '>
                <a className='w-1/2 ' href="/admin"><div className='text-lg font-bold flex'>Admin DashBoard</div></a>


                <div className='w-1/2  text-right space-x-6'>
                    <a href="/admin/">Signin</a>
                    <a href="/admin/order/">Orders</a>
                    <a href="/admin/user">Users</a>
                    <a href="/admin/product/">Products</a>

                </div>

            </nav> */}




            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5   shadow-md z-50 fixed w-full left-0 top-0 ">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/admin/dashboard" className="flex items-center">
                        {/* <img src="" className="mr-3 h-6 sm:h-9" alt="" /> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">Admin Dashboard</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white items-center">
                            <li>
                                <a href="/admin/dashboard" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 " aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/admin/user" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Users</a>
                            </li>
                            <li>
                                <a href="/admin/product" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Product</a>
                            </li>
                            <li>
                                <a href="/admin/order" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Orders</a>
                            </li>
                           <a href="/admin"><button onClick={LogoutAdmin} type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  ">Logout</button></a>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar
