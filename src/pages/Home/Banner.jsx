import { useEffect } from 'react';
import videoBg from '../../assets/images/banner_video.mp4'

import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {

  useEffect(() => {
    AOS.init({
      duration: "1000"
    });

  }, [])



  return (
    <div>
      <div className=" ">
        <video className='lg:w-full  z-10 h-screen brightness-100 text-gray-700 object-cover' src={videoBg} autoPlay loop muted />

      </div>

      <div className="absolute top-36 md:top-24 lg:top-72 left-10 md:left-12 lg:left-32 z-10 space-y-3">
        <h2 data-aos="fade-right" className="mt-12 z-20 font-textStyle text-3xl  lg:text-7xl font-bold  ">

          Career exploration
          <br />
          and Talent recruitment
        </h2>
        <p data-aos="fade-right" className="py-4  font-textStyle">
          Connecting students and job seekers with career and education opportunities,
          <br /> while providing businesses and colleges with a pool of prepared and
          <br /> motivated professionals
        </p>
        <button className="font-textStyle border-4     px-4 py-2">
          Online request
        </button>
      </div>

    </div>
  );
};

export default Banner;