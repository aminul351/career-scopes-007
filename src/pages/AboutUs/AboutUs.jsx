import img1 from '../../../src/assets/images/vision.jpg'
import img2 from '../../../src/assets/images/mision.jpg'
import img3 from '../../../src/assets/images/what_we_offer.jpg'
import img4 from '../../../src/assets/images/career.avif'
import img5 from '../../../src/assets/images/industry.jpg'

const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 font-textStyle">About Us</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Explore, research, and build your career with ease!
                </p>
            </div>

            {/* Mission Section */}
            <div className="mt-12 flex flex-col lg:flex-row items-center gap-10">
                <img
                    src={img2}
                    alt="Mission"
                    className="w-full h-72 lg:w-1/2 rounded-xl shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 font-textStyle">Our Focus & Long-Term Strategy</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Our goal is to help students and professionals choose and excel in
                        their careers by providing structured guidance, research
                        opportunities, hands-on projects, and industry insights.
                    </p>
                </div>
            </div>

            {/* Vision Section */}
            <div className="mt-12 flex flex-col lg:flex-row-reverse items-center gap-10">
                <img
                    src={img1}
                    alt="Vision"
                    className="w-full h-72 lg:w-1/2 rounded-xl shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 font-textStyle">Purpose & Ambition</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        We aim to be the leading platform that bridges the gap between
                        education and industry by offering structured career paths,
                        qualification tests, and real-world experience through projects and
                        mentorship.
                    </p>
                </div>
            </div>

            {/* What We Offer Section */}
            <div className="mt-12">
                <h2 className="text-3xl font-textStyle  font-semibold text-gray-800 text-center">
                    What We Offer
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {/* Career Guidance */}
                    <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                        <img
                            src={img3}
                            alt="Career Guidance"
                            className="w-full h-72 rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Career Guidance</h3>
                        <p className="text-gray-600 mt-2">
                            Get expert advice and explore various career paths tailored to
                            your interests.
                        </p>
                        <p  className="flex justify-center text-[#00bcf1] text-lg mt-2 ">See More →</p>
                    </div>

                    {/* Research & Learning */}
                    <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                        <img
                            src={img4}
                            alt="Research & Learning"
                            className="w-full h-72 rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Research & Learning</h3>
                        <p className="text-gray-600 mt-2">
                            Dive into different fields, access quality research, and upskill
                            with hands-on projects.
                        </p>
                        <p  className="flex justify-center text-[#00bcf1] text-lg mt-2 ">See More →</p>
                    </div>

                    {/* Industry Connections */}
                    <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                        <img
                            src={img5}
                            alt="Industry Connections"
                            className="w-full h-72 rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Industry Connections</h3>
                        <p className="text-gray-600 mt-2">
                            Connect with industry experts, professionals, and alumni to gain
                            insights and mentorship.
                        </p>
                        <p  className="flex justify-center text-[#00bcf1] text-lg mt-2 ">See More →</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Start Your Journey Today!</h2>
                <p className="text-lg text-gray-600 mt-2">
                    Join us and explore limitless career opportunities.
                </p>
                <p  className="flex justify-center text-[#00bcf1] text-lg mt-2 ">See More →</p>
            </div>
        </div>
    );
};

export default AboutUs;
