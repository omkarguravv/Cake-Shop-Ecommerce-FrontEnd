import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'



function Footer() {
  return (
    <>
    <div className='h-96 p-20 '>

      <footer name="contact" class="bg-gradient-to-r from-gray-100 to-gray-100 pt-5 pb-2  ">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h1 class="text-3xl font-bold text-blueGray-700 block uppercase">Any Responses ACCEPTED! </h1>
              <h2 class="text-xl mt-2 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h2>
              <div class=" flex space-x-2   mt-6 lg:mb-0 mb-6">

                <i class="none"></i><BsFacebook size={40} />
                <i class="none"></i><BsInstagram size={40} />
                <i class="none"></i><BsTwitter size={40} />
                <i class="none"></i>

              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-full lg:w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-blueGray-500 font-semibold mb-2 text-2xl">Useful Links</span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-blueGray-600 hover:opacity-25 font- block pb-2 text-l" href="http://localhost:3000/signup">Singnup</a>
                    </li>
                    <li>
                      <a class="text-blueGray-600 hover:opacity-25 font- block pb-2 text-l" href="/">Service</a>
                    </li>
                    <li>
                      <a class="text-blueGray-600 hover:opacity-25 font- block pb-2 text-l" href="/">About Us</a>
                    </li>
                    <li>
                      <a class="text-blueGray-600 hover:opacity-25 font- block pb-2 text-l" href="/">Contact</a>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <span class="block uppercase text-blueGray-500 font-semibold mb-2 text-2xl">Resources</span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-blueGray-600 hover:opacity-25 font- block pb-2 text-l" href="/">MIT License</a>
                    </li>
                    <li>
                      <a class="text-blueGray-600 hover:opacity-25 font- block pb-2 text-l" href="/">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a class="text-blueGray-600 hover:opacity-25 font- block pb-2 text-l" href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a class="text-blueGray-600 hover:opacity-25 font- block pb-2 text-l" href="/">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                2022<span id="get-current-year"></span><a href="/" class="text-blueGray-500 hover:text-gray-800" target="_blank"> WOW CAKES </a>
                <a href="https://www.google.com/maps/dir//WOW+CAKES+%26+More,+761+,+Ramharkh+Chawl,+Siddheshwar+Talao+Rd,+near+Cadbury+Company,+Khopat,+Thane+West,+Maharashtra+400601/@19.2024858,72.9652918,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7b952d5dbd3a9:0x995bd252beeb829a!2m2!1d72.9674805!2d19.2024858" class="text-blueGray-500 hover:text-blueGray-800">,THANE </a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>


    </>
  )
}

export default Footer