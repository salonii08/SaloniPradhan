import React, { FormEvent, useState } from 'react'
import { BiEnvelope, BiLocationPlus, BiMaleSign, BiMap } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { sendEmail } from '../../../utils/emailService'

const Contact = () => {
    const[name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        
        // Basic validation
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert("Please fill in all fields");
            return;
        }

        setIsSubmitting(true);
      
        try {
            const result = await sendEmail({ name, email, message });

            if (result.success) {
                alert("✅ Message sent successfully! I'll get back to you soon.");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                // Provide fallback options
                const useBackup = confirm(
                    `❌ Failed to send message: ${result.error || 'Unknown error'}\n\n` +
                    "Would you like to:\n" +
                    "• Click OK to open a backup contact form\n" +
                    "• Click Cancel to try emailing me directly"
                );
                
                if (useBackup) {
                    window.open('/contact-backup.html', '_blank');
                } else {
                    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
                    const body = encodeURIComponent(`Hi Saloni,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                    window.open(`mailto:salonipradhan2061@gmail.com?subject=${subject}&body=${body}`, '_blank');
                }
            }
        } catch (error) {
            console.error(error);
            const emailDirect = confirm(
                "❌ Something went wrong with the contact form.\n\n" +
                "Would you like to email me directly instead?\n" +
                "Click OK to open your email client."
            );
            
            if (emailDirect) {
                const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
                const body = encodeURIComponent(`Hi Saloni,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                window.open(`mailto:salonipradhan2061@gmail.com?subject=${subject}&body=${body}`, '_blank');
            }
        } finally {
            setIsSubmitting(false);
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
                    <a href='https://www.instagram.com/_sasaa_0' target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='text-white w-6 h-6 ' />
                    </a> 
                   </div>
                   <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
                    <a href='https://www.linkedin.com/in/saloni-pradhan-9ab815283?utm_source=shar' target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='text-white w-6 h-6 ' />
                    </a> 
                   </div>
                
                </div>
            </div>
            {/* Form */}
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="0" className='md:p-10 p-5 bg-[#131332] rounded-lg'>
                <form onSubmit={onSubmit}>
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        type="text" 
                        placeholder='Name' 
                        required
                        className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder-white/70 mb-4' 
                    />
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        placeholder='Email address' 
                        required
                        className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder-white/70 mb-4' 
                    />
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder='Your message' 
                        required
                        className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder-white/70 mb-4 h-40 resize-none'
                    ></textarea>
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`${
                            isSubmitting 
                                ? 'bg-gray-600 cursor-not-allowed' 
                                : 'bg-blue-950 hover:bg-blue-900 cursor-pointer'
                        } transition-all duration-300 mt-8 p-3 rounded-3xl text-white w-full`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send message'}
                    </button>
                </form>
                
            </div>
        </div>
      
    </div>
    </section>
    
  )
}

export default Contact
