
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import discover_career_path_img from '../../assets/images/discover_career_path.png';


const DiscoverCareerPath = () => {

    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])


    return (
        <div className="lg:flex bg-gray-100  p-4 md:p-8 lg:p-12 items-center gap-8">
            

            <div className="flex-1  " data-aos="zoom-in-right">
 
            <h3 className="text-5xl lg:text-7xl font-semibold text-center font-textStyle">Discover career pathways</h3>
                <p className="mt-6 lg:text-xl">Find out where to start your new career journey or what’s next in line! Industry-level and company-specific career pathways provide a deeper understanding of potential career progressions for students and job seekers. Here you’ll discover high-wage, high-skill, and high-demand jobs, average wages, the path to success, education and training providers, area employers, and more.</p>
                
                <div className='flex justify-center'>
                <button className="px-5 ml-4 py-3 bg-[#00bcf1] mt-6 rounded-full font-semibold">sign in to see more</button>
                </div>
            </div> 
            <div className="flex-1  " data-aos="zoom-in-left">
                <img className="w-[600px] p-6" src={discover_career_path_img} alt="" />
            </div>
        </div>
    );
};

export default DiscoverCareerPath;