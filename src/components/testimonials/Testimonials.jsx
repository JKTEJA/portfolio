import React from 'react'
import "./testimonials.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonials container">
         <h2 className='section_title'>My clients say</h2>
    <span className='section_subtitle'>testimonial</span>

    <Swiper className='testimonials_container'
    
   loop={true}
   grabCursor={true}
    spaceBetween={24}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      576: {
        slidesPerView: 2,
  
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
   
    }}
    modules={[Pagination]}
    
  >
        {Data.map(({id,image,title,description})=>{
            return(
            <SwiperSlide className='testimonials_card' key={id}>
                <img src={image} alt=""
                className="testimonials_img" />
                <h3 className='testimonials_name'>{title}</h3>
                <p className='testimonials_description'>{description}</p>
            </SwiperSlide>
            )
        })}
    </Swiper>
    </section>
  )
}

export default Testimonials