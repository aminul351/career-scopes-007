import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import img1 from "../../../src/assets/images/img1.jpg"
import img2 from "../../../src/assets/images/img2.jpg"
import img3 from "../../../src/assets/images/img3.jpg"


const Benefit = () => {

    useEffect(() => {
        AOS.init({
            duration: "1000"
        });

    }, [])

    return (
        <div>
            <div className="py-6 lg:py-12">
                <div className="px-4 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold font-textStyle text-gray-900 sm:text-4xl">
                            Why Choose Us
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Discover the benefits of using our platform to explore career opportunities, gain mentorship, and access valuable resources.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-8">
                    <div data-aos="fade-up" className="p-4 md:p-0 lg:p-0 card card-compact rounded-sm bg-base-100 shadow-xl">
                        <figure><img className='w-full h-[300px]' src={img1} alt="Career Guidance" /></figure>
                        <div className="card-body">
                            <p className="text-sm font-medium text-indigo-600">
                                Career Guidance
                            </p>
                            <h3 className="mt-2 text-xl font-bold text-gray-900">
                                Expert Mentorship
                            </h3>
                            <p className="mt-3 text-base text-gray-500">
                                Connect with industry experts and professors for personalized career advice and mentorship.
                            </p>
                            <div className="mt-4 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                <button>See More</button>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="p-4 md:p-0 lg:p-0 card card-compact rounded-sm bg-base-100 shadow-xl">
                        <figure><img className='w-full h-[300px]' src={img2} alt="Research Opportunities" /></figure>
                        <div className="card-body">
                            <p className="text-sm font-medium text-indigo-600">
                                Research Opportunities
                            </p>
                            <h3 className="mt-2 text-xl font-bold text-gray-900">
                                Access to Cutting-Edge Research
                            </h3>
                            <p className="mt-3 text-base text-gray-500">
                                Explore exciting research projects and collaborate with experts in fields like AI, software engineering, and more.
                            </p>
                            <div className="mt-4 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                <button>See More</button>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="p-4 md:p-0 lg:p-0 card card-compact rounded-sm bg-base-100 shadow-xl">
                        <figure><img className='w-full h-[300px]' src={img3} alt="Industry Insights" /></figure>
                        <div className="card-body">
                            <p className="text-sm font-medium text-indigo-600">
                                Industry Insights
                            </p>
                            <h3 className="mt-2 text-xl font-bold text-gray-900">
                                Stay Ahead in Your Field
                            </h3>
                            <p className="mt-3 text-base text-gray-500">
                                Gain insights into the job market, internship opportunities, and emerging trends in various industries.
                            </p>
                            <div className="mt-4 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                <button>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;
