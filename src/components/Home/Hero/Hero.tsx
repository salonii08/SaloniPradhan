import { Particle } from '@tsparticles/engine';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticleBackground';

const Hero = () => {
  return (
    <section id='home'>
      <div className='relaive h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
        <ParticlesHero/>
        <div className='relative z-10 flex flex-col items-center'>
          <img src="/images/s1.png" alt='heroimage' width={150} height={150} className='rounded-full border-[#0c048aa]' data-aos="fade-up" />
        </div>
      <h1 data-aos="fade-up" data-aos-delay="400" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>Creating modern web application,<br />
        <span className='text-blue-300'>interfaces and experiences</span></h1>
        <h2 data-aos="fade-up" data-aos-delay="200" className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
            Hi! I'm Saloni - A Passionate 
            <span className='text-blue-300 font-bold'>
                <Typewriter options={{
                    strings:[
                        "Frontend Developer",
                        "Backend Developer",
                        "Web Developer", 
                    ],
                    autoStart:true,
                    loop:true,
                    delay:75,
                    deleteSpeed:50,
                    wrapperClassName:"pl-2",
                }}/>
            </span>
        </h2>
        <button data-aos="fade-up" data-aos-delay="600" className='mt-6 px-10 py-4 bg-blue-700 hover:bg-blue-600 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium'>
            <span>view my work</span>
            <BsArrowRight className='w-5 h-5 ml-2 inline-block' />
        </button>
    </div> 
    </section>
   
  )
}

export default Hero
