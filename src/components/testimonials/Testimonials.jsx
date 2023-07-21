import React from 'react'
import './testimonials.css'
import AVT1 from '../../assest/avatar1.jpg'
import AVT2 from '../../assest/avatar2.jpg'
import AVT3 from '../../assest/avatar3.jpg'
import AVT4 from '../../assest/avatar4.jpg'

// // core version + navigation, pagination modules:
// // import { Pagination } from 'swiper';
// import {Swiper, SwiperSlide} from 'swiper/react';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/pagination';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

const data = [
  {
    avatar : AVT1,
    name : "Stefania",
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestiae laboriosam dicta natus impedit tenetur, sit unde nam tempora velit dignissimos laudantium asperiores iste nesciunt soluta reprehenderit vel hic libero?'
  },
  {
    avatar : AVT2,
    name : 'Leyner Cordoba',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestiae laboriosam dicta natus impedit tenetur, sit unde nam tempora velit dignissimos laudantium asperiores iste nesciunt soluta reprehenderit vel hic libero?'
  },
  {
    avatar : AVT3,
    name : 'Brandom Rodriguez',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestiae laboriosam dicta natus impedit tenetur, sit unde nam tempora velit dignissimos laudantium asperiores iste nesciunt soluta reprehenderit vel hic libero?'
  },
  {
    avatar : AVT4,
    name : 'Daniel Zulbaran',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestiae laboriosam dicta natus impedit tenetur, sit unde nam tempora velit dignissimos laudantium asperiores iste nesciunt soluta reprehenderit vel hic libero?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container mySwiper"
      navigation={true} 
      modules={[Navigation]}
      spaceBetween={40}
      >
        {
          data.map(({avatar,name,review},index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt="avatar1" />
            
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
