import React from 'react'
import circ from '../assets/circ.png'
import bigS from '../assets/bigS.png'
import smallS from '../assets/smallS.png'
const Svg = () => {
  return (
      <div
          className='flex    '
      >
          <img src={circ} alt=" " className='flex top-0 w-1/3 left-0 absolute z-10' />
          <img src={bigS} alt="" className='flex -top-60 w-[89%] left-0 absolute right-0 items-center justify-center ' />
          <img src={smallS} alt="" className='flex w-3/6 h-3/6 right-0    absolute ' />
      </div>
  )
}

export default Svg