import React from 'react'
import { SiC, SiCplusplus, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Tilt from "react-parallax-tilt"
const skills =[
  {
    name:'JavaScript',
    icon:<SiJavascript/>,
    
  },
  {
    name:'React.js',
    icon:<SiReact/>,
    
  },
  {
    name:'Node.js',
    icon:<SiNodedotjs/>,
    
  },
  {
    name:'Next.js',
    icon:<SiNextdotjs/>,
    
  },
  {
    name:'MongoDB',
    icon:<SiMongodb/>,
    
  },
  {
    name:'Tailwind CSS',
    icon:<SiTailwindcss/>,
    
  },
  {
    name:'TypeScript',
    icon:<SiTypescript/>,
    
  },
  {
    name:'C++',
    icon:<SiCplusplus/>,
    
  },
  
]
const Skills = () => {
  return (
    <section id='skill' >
<div className='text-white pt-16 pb-16 '>
      <h1 className='text-white text-center text-2xl md:text-4xl xl:text-4xl font-bold'>
        My <span className='text-cyan-200'>Skills</span>
      </h1>
      <div className='flex flex-wrap justify-center gap-6 mt-16'>
        {skills.map((skill,i)=>{
          return <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
           <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i*100} className='bg-[#23226145]  w-40 h-40 rounded-3xl flex-col items-center justify-center shadow-lg transition hover:scale-105'>
            <div className='text-5xl mb-4  text-gray-200 pl-10'>{skill.icon}</div>
            <h1 className='text-xl  font-semibold pl-10'>{skill.name}</h1>
           </div>
          </Tilt>
        })}
      </div>
    </div>
    </section>
    
  )
}

export default Skills
