import React from 'react'
// import Cake from '../../assets/cake2.png'
import { Link } from 'react-router-dom'

import { Button } from '../components/Button'
import "./LandingPage.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";


const Landing = () => {
  return (
    <>
      {/* <div className='w-full h-screen bg-gradient-to-brbg-[#FEFEFF]  text-black '>
        <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full px-4'>
          <div className='flex flex-row items-center'>
            <div>
              <h3 className=' font-custom font-extrabold text-4xl ' >Delicious cakes to order</h3>
              <p className='py-3 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quas nihil obcaecati!</p>
              <Button name='Choose Cake' />
            </div>
            <div>
              <img src={Cake} alt="" width={530} />
            </div>
          </div>
        </div>
      </div> */}


      {/* <div className='w-full h-screen bg-gradient-to-brbg-[#FEFEFF]  text-black '>
        <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-96 h-screen px-4 mt-20 '> */}

      {/* </div>
      </div> */}
      <div name='home' className=' md:flex bg-white'>
        <div className='md:w-1/2   '>
          <div className='flex flex-row  justify-center text-center items-center md:mt-72 sm:mt-10  mt-[5rem]    '>
            <div>
              <h3 className=' font-custom font-extrabold text-6xl mt-10 hover:scale-110 duration-700 ease-in-out ' >Delicious cakes to order</h3>
              <p className='py-3 text-lg font-medium '>Unforgettable Sweetness You'll Keep Craving For.</p>

              <div className='mb-6 md:mb-0'>

                <Link to="/productlist"> <Button name='Choose Cake' /></Link>
              </div>

            </div>
            {/* <div>
              <img src={Cake} alt="" width={530} />
            </div> */}
          </div>
        </div>
        <div className='w-1/2 h-screen float-right hidden sm:hidden md:block     '>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4700,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='p-36  '>
                <img className='' src="./images/dessert-fruitcake.jpg " alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='p-36  '>
                <img className='' src="./images/chocolate-cake.jpg " alt="" />
              </div>

            </SwiperSlide>

            <SwiperSlide>
              <div className='p-36  '>
                <img className='' src="./images/c2.jpg " alt="" />
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className='p-36  '>
                <img className='' src="./images/cupcakes.jpg " alt="" />
              </div>
            </SwiperSlide>


          </Swiper>
        </div>
      </div>




    </>
  )
}

export default Landing
