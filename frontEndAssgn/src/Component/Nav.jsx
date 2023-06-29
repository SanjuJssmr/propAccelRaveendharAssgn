import React from 'react'

const Nav = () => {
  return (
      <div class="flex mt-10   relative text-xl items-center justify-around    text-gray-100 z-20 w-full h-full ">
          <div class="hover:bg-white px-4 py-2 rounded-lg hover:text-gray-800 transition-all ease-in-out cursor-pointer">Logo</div>

          <section class="flex gap-20">
              <nav class="hover:bg-white px-4 py-2 rounded-lg hover:text-gray-800 transition-all ease-in-out cursor-pointer">About</nav>

              <nav class="hover:bg-white px-4 py-2 rounded-lg hover:text-gray-800 transition-all ease-in-out cursor-pointer">Pricing</nav>

              <nav class="hover:bg-white px-4 py-2 rounded-lg hover:text-gray-800 transition-all ease-in-out cursor-pointer">Review</nav>
          </section>
      </div>

  )
}

export default Nav