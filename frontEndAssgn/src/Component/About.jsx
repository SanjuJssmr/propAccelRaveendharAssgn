import React from 'react'
import mike from '../assets/mike.png'
const About = () => {
    return (
        <div class="flex z-20 mt-[300px] ml-60 mb-20 text-gray-800 items-center justify-center">
            <div class="flex flex-col gap-10">
                <section class="flex z-30 gap-4" >
                    <div className='flex flex-col border-[1px] border-l-0 border-gray-800 rounded-2xl p-8 w-[300px] h-full'>
                        <div class="flex text-2xl font-bold">Interactive Features</div>

                        <div
                            class="flex text-sm mt-3 "
                        >
                            Lorem Ipsum is simply dummy <br /> text of the printing and typesetting <br />
                            industry. Lorem Ipsum has been
                        </div>
                    </div>

                    <div className='flex flex-col border-[1px] mt-7 border-l-0 border-gray-800 rounded-2xl p-8 w-[300px] h-full'>
                        <div class="flex text-2xl font-bold">Interactive Features</div>

                        <div
                            class="flex text-sm mt-3 "
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been
                        </div>
                    </div>
                </section>
                <section class="flex z-30 gap-3">
                    <div className='flex flex-col border-[1px] border-l-0 border-gray-800 rounded-2xl p-8 w-[300px] h-full'>
                        <div class="flex text-2xl font-bold">Interactive Features</div>

                        <div
                            class="flex text-sm mt-3 "
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been
                        </div>
                    </div>

                    <div className='flex mt-7 flex-col border-[1px] border-l-0 border-gray-800 rounded-2xl p-8 w-[300px] h-full'>
                        <div class="flex text-2xl font-bold">Interactive Features</div>

                        <div
                            class="flex text-sm mt-3 "
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been
                        </div>
                    </div>
                </section>
            </div>

            <div class="flex items-center justify-center">
                <div className='flex absolute right-0 top-[600px] w-[600px] h-[600px]'>
                    <img src={mike} />
                </div>
                <div class="flex flex-col items-start justify-start w-1/2 h-full">
                    <div class="flex text-6xl font-bold ">About the Course
                    </div>

                    <div
                        class="flex mt-10 text-base "
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry&#039;s standard dummy text
                        ever since the 1500s, when an unkno
                    </div>


                    <div >
                        <button class="flex mt-16 text-white hover:from-pink-500 hover:to-purple-900 ease-in-out transition-all w-fit px-10 py-5 rounded-lg text-2xl bg-gradient-to-r cursor-pointer from-indigo-500 from-10% to-90% to-violet-500 font-bold">Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About