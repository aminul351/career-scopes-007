
import { Swiper, SwiperSlide } from 'swiper/react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';
import { useEffect } from 'react';

const Testimonial = () => {
    useEffect(() => {
        AOS.init({
            duration: "1000"
        });

    }, [])



    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('testimonial.json')
            .then(response => response.json())
            .then(data => {
                setTestimonials(data)
            })
    }, [])

    return (
        <div className='' data-aos="fade-up">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="bg-white rounded-lg shadow-md p-12 my-8">
                        <img src={testimonial.image} alt="Testimonial" className="w-48 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl text-center font-textStyle font-semibold mb-2">{testimonial.name}</h3>
                        <p className="text-gray-700 max-w-xl  mx-auto">{testimonial.testimonial}</p>
                        <div className="flex justify-center mt-4">
                            <button className="bg-[#00bcf1] px-4 py-2 rounded-3xl">See More
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;