import React from 'react'
import line1 from '../assets/l1.png'
import line2 from '../assets/l2.png'
import line3 from '../assets/l3.png'
const Plan = () => {
    return (
        <div class="flex flex-col  mt-[200px]  w-full h-full  mb-20 text-gray-900 items-center justify-center">
            <div className='absolute w-full h-[400px] mb-[550px] z-0 '>
                <div class="    absolute -bottom-2  r-0 text-[10rem] font-bold text-gray-200 right-0 ">Podcast</div>
                <img src={line1} alt="" srcset="" className='absolute w-full  z-0 ' />
                <img src={line2} alt="" srcset="" className='absolute w-full   mt-5 z-0' />
                <img src={line3} alt="" srcset="" className='absolute w-full   mt-10 z-0' />
            </div>

            <div class="flex  items-center justify-center gap-5">
                <div class="flex items-center z-20 justify-center flex-col gap-10">
                    <div class="flex items-center z-20 justify-center flex-col gap-5">
                        <div class="flex items-center z-20 justify-center gap-7 flex-col ">
                            <div class="flex text-4xl font-bold">Choose your plan</div>
                            <div
                                class="flex text-base  items-center text-center justify-center   "
                            >
                                Lorem Ipsum is simply dummy text of the printing and <br /> typesetting
                                industry. Lorem Ipsum has been the industry&#039;s
                            </div>
                        </div>
                        <div class="flex gap-1 items-center bg-white text-base font-semibold justify-center px-2 py-2 rounded-xl  drop-shadow-xl  shadow-gray-200">
                            <div class="">
                                <button class="flex bg-purple-200 px-2 py-1 rounded-xl">monthly</button>
                            </div>

                            <button class="">yearly</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="flex z-50 gap-40 mt-16  ">
                <section class="flex z-50  flex-col p-8 bg-white border-[1px] border-[#7A3199]  rounded-lg">
                    <section class="flex flex-col gap-3">
                        <div class="flex text-lg font-bold">Basic Plan</div>
                        <div
                            class="flex text-sm  "
                        >
                            Lorem Ipsum is simply dummy text of the <br /> printing and typesetting
                        </div>
                    </section>

                    <section class="flex items-center my-7 justify-start gap-5 text-[#7A3199]">
                        <div class="text-4xl font-bold">$ 54</div>

                        <div class="text-xl">/month</div>
                    </section>

                    <section class="flex flex-col items-start justify-center gap-1">
                        <div class="flex  items-center gap-2">

                            <div className='flex w-2 h-2 rounded-full bg-[#7A3199] ' />
                            <div class="flex text-sm font-bold">
                                Free access to video class
                            </div>
                        </div>

                        <section class="flex  items-center gap-2">

                            <div className='flex w-2 h-2 rounded-full bg-[#7A3199]' />
                            <div class="flex text-sm font-bold">
                                Free access to video class
                            </div>
                        </section>

                        <section class="flex  items-center gap-2">

                            <div className='flex w-2 h-2 rounded-full bg-[#7A3199]' />
                            <div class="flex text-sm font-bold">
                                Free access to video class
                            </div>
                        </section>
                    </section>

                    <section>
                        <button class=" px-8 py-3 text-sm mt-5 hover:bg-[#7A3199] hover:text-gray-100 w-fit border-[1px] border-[#7A3199]  rounded-md text-[#7A3199] font-medium">Start Free Trial</button>
                    </section>
                </section>
                <div class="flex flex-col p-8 border-[1px]  text-gray-50 bg-[#7A3199] border-purple-[#7A3199]  rounded-lg">
                    <section class="flex flex-col gap-3">
                        <div class="flex text-lg font-bold">Basic Plan</div>

                        <div
                            class="flex text-sm font-light  "
                        >
                            Lorem Ipsum is simply dummy text of the <br /> printing and typesetting
                        </div>
                    </section>

                    <section class="flex items-center my-7 justify-start gap-5 text-gray-50">
                        <div class="text-4xl font-bold">$ 54</div>

                        <div class="text-xl">/month</div>
                    </section>

                    <section class="flex flex-col items-start justify-center gap-1">
                        <div class="flex  items-center gap-2">

                            <div className='flex w-2 h-2 rounded-full bg-gray-50 ' />
                            <div class="flex text-sm font-bold">
                                Free access to video class
                            </div>
                        </div>

                        <div class="flex  items-center gap-2">

                            <div className='flex w-2 h-2 rounded-full bg-gray-50' />
                            <div class="flex text-sm font-bold">
                                Free access to video class
                            </div>
                        </div>

                        <div class="flex  items-center gap-2">

                            <div className='flex w-2 h-2 rounded-full bg-gray-50' />
                            <div class="flex text-sm font-bold">
                                Free access to video class
                            </div>
                        </div>
                    </section>

                    <section >
                        <button class=" px-8 py-3 hover:bg-[#7A3199] hover:text-gray-100  text-sm mt-5 w-fit border-[1px] border-gray-50 bg-gray-50 rounded-md text-[#7A3199] font-medium">Start Free Trial</button>
                    </section>
                </div>
                <div class="flex flex-col p-8 border-[1px] bg-white border-[#7A3199] bo  rounded-lg">
                    <div class="flex flex-col gap-3">
                        <section class="flex text-lg font-bold">Basic Plan</section>

                        <section
                            class="flex text-sm  "
                        >
                            Lorem Ipsum is simply dummy text of the <br /> printing and typesetting
                        </section>
                    </div>

                    <section class="flex items-center my-7 justify-start gap-5 text-[#7A3199]">
                        <div class="text-4xl font-bold">$ 54</div>

                        <div class="text-xl">/month</div>
                    </section>

                    <section class="flex flex-col items-start justify-center gap-1">
                        <div class="flex  items-center gap-2">

                            <div className='flex w-2 h-2 rounded-full bg-[#7A3199]' />
                            <div class="flex text-sm font-bold">
                                Free access to video class
                            </div>
                        </div>

                        <div class="flex  items-center gap-2">

                            <div className='flex w-2 h-2 rounded-full bg-[#7A3199]' />
                            <div class="flex text-sm font-bold">
                                Free access to video class
                            </div>
                        </div>

                        <div class="flex  items-center gap-2">

                            <div className='flex w-2 h-2 rounded-full bg-[#7A3199]' />
                            <div class="flex text-sm font-bold">
                                Free access to video class
                            </div>
                        </div>
                    </section>

                    <section >
                        <button class=" px-8 py-3 text-sm mt-5 hover:bg-[#7A3199] hover:text-gray-100 w-fit border-[1px] border-[#7A3199]  rounded-md text-[#7A3199] font-medium">Start Free Trial</button>
                    </section>
                </div>


            </div>
        </div>

    )
}

export default Plan