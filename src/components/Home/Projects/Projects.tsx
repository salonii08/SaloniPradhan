import React from 'react'

const Projects = () => {
  return (
    <section id='work'>
      <div className='pt-16 pb-16'>
     <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>Recent <span className='text-cyan-200'>Projects</span></h1>
      <div className='w-[70%] mx-auto flex flex-wrap justify-center gap-8  items-center  mt-16'>
        {/* 1st project */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0" >
            <img src='/images/p1.png' alt='img' width={300} height={300} className='rounded-lg' />
            <h1 className='mt-4 text-xl sm:text-4xl font-semibold text-white'> Food Delivery App </h1>
            <h1 className='pt-2 font-medium text-white/80'>Frontend,Backend,UI/UX</h1>
        </div>
        {/* 2nd project */}
        <div data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="100" >
            <img src='/images/p2.png' alt='img' width={300} height={300} className='rounded-lg' />
            <h1 className='mt-4 text-xl sm:text-4xl font-semibold text-white'>Netflix clone App</h1>
            <h1 className='pt-2 font-medium text-white/80'>Frontend,Backend,UI/UX</h1>
        </div>
        {/* 3rd project */}
        <div data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="150">
            <img src='/images/p3.png' alt='img' width={300} height={300} className='rounded-lg' />
            <h1 className='mt-4 text-xl sm:text-4xl font-semibold text-white'>Thrifting Web App </h1>
            <h1 className='pt-2 font-medium text-white/80'>Frontend,Backend,UI/UX</h1>
        </div>
        
      </div>
    </div>
    </section>
    
  )
}

export default Projects
