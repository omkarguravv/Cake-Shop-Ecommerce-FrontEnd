import React from 'react'
import Navbar from '../components/Navbar'
import Landing from './Landing'
import Designer from './Designer'
import { TrendingCakes } from './TrendingCakes'
import ProductDetail from './ProductDetail'
import Payment from './Payment'
import Footer from './Footer'
import AboutUs from './AboutUs'

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Landing />

      <Designer/>
      <TrendingCakes />
{/* <<<<<<< HEAD */}
      
{/* ======= */}
      <AboutUs/>
      <Footer/>
      
      {/* testing  */}
      {/* <Payment/> */}
{/* >>>>>>> 6752fe0b61f157883cee654e046be302036bbf71 */}
    </>
  )
}


// div 1 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white
// div 2 max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full 