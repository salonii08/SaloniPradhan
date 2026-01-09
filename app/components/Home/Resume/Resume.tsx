import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaDatabase, FaGraduationCap, FaReact } from 'react-icons/fa'
import { BiBadge } from 'react-icons/bi'
import { GrCertificate } from 'react-icons/gr'

const Resume = () => {
  return (
    <section id='resume'>
      <div className='pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* Work Part  */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>My Work <span className='text-cyan-200'>Experiences</span></h1>
                <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <ResumeCard Icon={FaCodepen} role="Full-Stack Developer"/>
                    <ResumeCard Icon={FaReact} role="Front-End Developer"/>
                    <ResumeCard Icon={FaDatabase} role="Back-End Developer"/>
                </div>
            </div>
            {/* EDUCATION PART */}
            <div >
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>My <span className='text-cyan-200'>Education</span></h1>
            <div className='mt-10' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <ResumeCard Icon={FaGraduationCap} role="Bachelor in computer Engineering" date='2021-2025'/>
                    <ResumeCard Icon={GrCertificate} role="Certified Full-Stack Developer"/>
                    
                </div>
            </div>
        </div>
        
      
    </div>  
    </section>
    
  )
}

export default Resume
