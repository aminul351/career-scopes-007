import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Mission = () => {

    useEffect(() => {
        AOS.init({
             duration: "1000"
        });
    }, [])

    return (
        <div className="lg:flex bg-gray-100 p-4 md:p-8 lg:p-12 items-center gap-8">
            <div className="flex-1" data-aos="zoom-in-right">
                <h3 className="text-5xl font-textStyle">Our <br />
                    <span className="font-bold ml-20">Mission</span>
                </h3>
                <p className="mt-6">
                    Our mission is to empower students with the tools, resources, and connections they need to excel in their chosen fields of study. We provide guidance, mentorship, and career insights to help students in CSE, EEE, ME, and other disciplines explore research opportunities, industry expertise, and the future of technology. We aim to foster an engaging community of students, professors, and alumni to build a strong foundation for success.
                </p>
                
                <div className="flex justify-center">
                    <button className="px-5 ml-4 py-3 bg-yellow-400 mt-6 font-semibold">View More</button>
                </div>
            </div> 
            <div className="flex-1" data-aos="zoom-in-left">
                <img className="w-[600px] p-6" src="https://i.ibb.co/Byg5LJQ/loan.jpg" alt="" />
            </div>
        </div>
    );
};

export default Mission;
