import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { BiEnvelope, BiLocationPlus, BiMaleSign, BiMap } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Contact = () => {
    const[name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
      
        try {
            const res = await fetch('/api/emails',{
                method: 'POST',
                body: JSON.stringify({
                    name,email,message
                }),
                headers: {
                    'content-type' : 'application/json',
                },
            });

            if (res.ok) {
                alert("Message sent!");
                setName("");
                setEmail("");
                setMessage("");
            }else {
                alert ("❌  Failed to sent Message.");
            }
        } catch (error) {
            console.error (error);
            alert ("Something went wrong.")
        }
    };

  return (
    <section id='contact'>
        <div className='pt-16 pb-16'>
        <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center '>
            {/* text content */}
            <div>
                <h1 className='text-white text-3xl sm:text-4xl font-bold'>Let's Work Together</h1>
                <p className='text-gray-400 mt-6 text-base sm:text-lg'>Reach out and let's turn your ideas into reality</p>
                {/* info */}
                <div className='mt-7'>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiEnvelope className='w-9 h-9 text-cyan-300' />
                        <p className='text-xl font-bold text-gray-400'>salonipradhan2061@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiMap className='w-9 h-9 text-cyan-300' />
                        <p className='text-xl font-bold text-gray-400'>Pokhara-09,Kaski</p>
                    </div>
                </div>
                {/* social icons */}
                <div className='flex items-center mt-8 space-x-3'>
                    <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
                    <Link href={'https://www.instagram.com/_sasaa_0'} >
                    <FaInstagram className='text-white w-6 h-6 ' />
                    </Link> 
                   </div>
                   <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
                    <Link href={'https://www.linkedin.com/in/saloni-pradhan-9ab815283?utm_source=shar'} >
                    <FaLinkedin className='text-white w-6 h-6 ' />
                    </Link> 
                   </div>
                
                </div>
            </div>
            {/* Form */}
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="0" className='md:p-10 p-5 bg-[#131332] rounded-lg'>
                <form onSubmit={onSubmit}>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholde-text-white/70 mb-4' />
                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email address' className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholde-text-white/70 mb-4' />
                  {/* <input type="text" placeholder='Phone number'  className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholde-text-white/70 mb-4' /> */}
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your message' className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholde-text-white/70 mb-4 h-40 resize-none'></textarea>
                  <button className='bg-blue-950 hover:bg-blue-900 transition-all duration-300 mt-8 p-3 rounded-3xl text-white cursor-pointer'>Send message</button>
                </form>
                
            </div>
        </div>
      
    </div>
    </section>
    
  )
}

export default Contact
