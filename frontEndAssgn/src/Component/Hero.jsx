import React from 'react'
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import vec from '../assets/Vector.png'
import Group from '../assets/Group.png'
const Hero = () => {
    return (
        <div class="flex z-30 mt-32 0 ml-60 items-center justify-evenly relative text-3xl text-gray-100">
            <section class="flex flex-col w-1/2 ">
                <div class="flex flex-col ">
                    <div class="flex text-6xl font-bold ">
                        Learn how to launch a successful podcast
                    </div>
                    <div
                        class="flex mt-10 text-base "
                    >
                        Lorem Ipsum is simply dummy text of the printing and <br /> typesetting in
                        ustry. Lorem Ipsum has been the <br />industrys standard dummy text
                        ever since the 1500s
                    </div>
                </div>
                <div >
                    <button class="flex mt-28 hover:from-pink-500 hover:to-purple-900 ease-in-out transition-all w-fit px-10 py-5 rounded-lg text-2xl bg-gradient-to-r cursor-pointer from-indigo-500 from-10% to-90% to-violet-500 font-bold">Sign up Now</button>
                </div>
            </section>
            <section className='flex flex-col relative h-full top-40  w-1/2'>
                <img class=" flex  absolute z-20 bottom-0   " src={hero2} ></img>
                <section className='flex flex-col gap-16 absolute -bottom-[75px] right-20  z-20 '>
                    <div className=' w-3 h-3 rounded-full bg-purple-900' />
                    <div className=' w-3 h-3 rounded-full bg-purple-900' />
                    <img src={vec} alt="" className='flex shadow-2xl shadow-gray-500 p-3  drop-shadow-2xl -rotate-12' />
                    <div className=' w-3 h-3 rounded-full bg-purple-900' />
                    <div className=' w-3 h-3 rounded-full bg-purple-900' />
                    <div className=' w-3 h-3 rounded-full bg-purple-900' />
                </section>
                <section className='flex w-full h-full gap-[74px] absolute -bottom-16 left-20  z-20 '>
                    <div className='flex w-3 h-3 rounded-full bg-purple-900' />
                    <div className='flex w-3 h-3 rounded-full bg-purple-900' />
                    <div className='flex w-3 h-3 rounded-full bg-purple-900' />
                    <div className='flex w-3 h-3 rounded-full bg-purple-900' />
                    <div className='flex w-3 h-3 rounded-full bg-purple-900' />
                    <div className='flex w-3 h-3 rounded-full bg-purple-900' />
                    <div className='flex w-3 h-3 rounded-full bg-purple-900' />
                </section>
                <img
                    class=" flex  absolute z-10 bottom-20 right-56  "
                    src={hero1}
                />
                <div className='flex flex-col gap-5 right-52 items-center -bottom-10 absolute'>
                    <div className='flex w-3 h-3 rounded-full bg-purple-900' />
                    <img src={Group} alt="" className='flex shadow-gray-500 shadow-2xl p-2 drop-shadow-2xl rotate-12' />
                </div>
            </section>
        </div>
    )
}

export default Hero