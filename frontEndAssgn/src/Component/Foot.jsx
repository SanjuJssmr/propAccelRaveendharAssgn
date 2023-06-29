import React from 'react'
import foot from '../assets/polygon2.png'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
const Foot = () => {
    return (
        <div class="flex flex-col gap-20  justify-center w-full ">
            <div class="flex  flex-col items-center">
                <section class="flex mt-24 z-50  flex-col items-center justify-center gap-5 mb-10 text-center">
                    <div class="flex text-4xl text-center font-bold">
                        We have what you’re looking for
                    </div>
                    <div
                        class="flex text-sm text-center w-full font-medium text-purple-500  "
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been <br /> the industry&#039;s standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of <br /> type a
                    </div>
                </section>
                <section className='z-50' >
                    <button class="flex mt-16 text-white hover:from-pink-500 hover:to-purple-900 ease-in-out transition-all w-fit px-10 py-5 rounded-lg text-2xl  bg-gradient-to-r cursor-pointer from-indigo-500 from-10% to-90% to-violet-500 font-bold">Get Started Now</button>
                </section>
                <section class="flex absolute w-full   ">
                    <img src={foot} alt="" srcset="" className='w-full' />
                </section>
            </div>
            <div class="flex gap-20 absolute pb-5 text-gray-50 border-t-2 pt-7 mx-80 items-center justify-center right-0 left-0 mt-[800px] z-50">
                <section class="flex ">
                    All Right Reserved @Copyright 2023
                </section>
                <section class="flex items-center gap-20">
                    <div class="flex items-center justify-center gap-10">
                        <div class="">Terms of Service</div>

                        <div class="">Privacy Policy</div>

                        <div class="">Product</div>
                    </div>

                    <div className='flex gap-5 text-2xl items-center justify-center'>
                        <BsFacebook className='hover:-translate-y-1 transition-all ease-in-out hover:cursor-pointer' />
                        <BsYoutube className='hover:-translate-y-1 transition-all ease-in-out hover:cursor-pointer' />
                        <BsInstagram className='hover:-translate-y-1 transition-all ease-in-out hover:cursor-pointer' />
                        <BsTwitter className='hover:-translate-y-1 transition-all ease-in-out hover:cursor-pointer' />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Foot