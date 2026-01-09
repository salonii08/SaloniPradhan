import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section id='services'>
     <div className='pt-16 pb-16'>
      <h1 className='text-white text-center text-2xl md:text-4xl xl:text-4xl font-bold'>Transforming ideas <br/> into impactful experinces </h1>
      <div className='w-[90%] sm:w[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-10 mt-20 items-center'>
        {/* <div>
            <ServiceCard icon="/images/a1.png" name="UI and Ux" description="Transforming ideas into designs that are user-friendly,impactful and enjoyable" />
        </div> */}
         <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <ServiceCard icon="/images/a2.png" name="Web and Mobile App" description="Transforming ideas into designs that are user-friendly,impactful and enjoyable" />
        </div>
         <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="50">
            <ServiceCard icon="/images/a3.png" name="Design & creative" description="Transforming ideas into designs that are user-friendly,impactful and enjoyable" />
        </div>
         <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
            <ServiceCard icon="/images/a4.png" name="Development" description="Transforming ideas into designs that are user-friendly,impactful and enjoyable" />
        </div>
      </div>
    </div> 
    </section>
    
  )
}

export default Services
