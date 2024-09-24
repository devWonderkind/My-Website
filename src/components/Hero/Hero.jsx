// import React from 'react'
import avatar from '../../assets/images/avatar.svg'

export function Hero() {
  return (
    <section className="relative w-full ">
  <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    <div className="flex flex-col justify-center items-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6 text-center lg:text-left">
      
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
        Aakanksha Chahal 
      </h1>
      
      <p className="mt-8 text-2xl text-gray-500 underline-offset-2">
        FrontEnd Developer | Open Source Contributor
      </p>
      <p className='text-xl mt-4 text-white md:text-2xl w-full md:w-auto mb-6 md:mb-0'>
        I am Aakanksha Chahal, a front-end developer with experience in building responsive and optimized sites.

        I am currently pursuing Btech in Computer Science and Engineering. 
      </p>
      
    </div>
    <div className="flex justify-center w-full relative lg:col-span-5 lg:-mr-8 xl:col-span-6 mt-4">
      <img
        className="rounded-full w-3/4 lg:w-full"
        src={avatar}
        alt="Aakanksha's Avatar"
      />
    </div>
  </div>
</section>

  )
}
