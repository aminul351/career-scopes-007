import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import jobSeekerImg from '../../assets/images/joob_seeker.png';

const JobSeekers = () => {

    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])



    return (
        <div className="lg:flex mt-12 bg-gray-100 p-4 lg:p-12 items-center gap-8 "> 
            <div className="flex-1 lg:ml-28" data-aos="zoom-in-left">
                <img className="w-[500px]" src={jobSeekerImg} alt="" />
            </div>

            <div className="flex-1 mt-6 " data-aos="zoom-in-right">
                <h3 className="text-4xl font-semibold mb-4 font-textStyle lg:text-6xl">Job Seekers and <br /> Students - Meet the <br /> businesses making it happen</h3>
                <p className="text-xl ">Discover your dream career, explore opportunities, and connect with the colleges and businesses that can help get you there. Build your resume, create a portfolio, and find the perfect degree or career to match your goals; all in one place. Start exploring your future today!</p>
                <p className="text-xl mt-2">It empowers educators and workforce practitioners with a centralized, dynamic platform to connect students and job seekers with tailored career opportunities, industry insights, and actionable pathways to success.</p>
                <div className="flex justify-center">
                <button className="px-5 ml-4 py-3 bg-[#00bcf1] rounded-full mt-6 font-semibold">Search Property</button>
                </div>
            </div> 
        </div>
    );
};

export default JobSeekers;