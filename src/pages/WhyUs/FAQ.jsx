import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FAQ = () => {

    useEffect(() => {
        AOS.init({
            duration: "1000"
        });

    }, [])

    return (
        <div className="mt-12" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold lg:font-semibold font-textStyle ml-4 mb-8">Frequently Asked Questions:</h3>

            {/* FAQ 1 */}
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked /> 
                <div className="collapse-title text-xl font-medium">
                    How can I connect with a mentor on this platform?
                </div>
                <div className="collapse-content">
                    <p>To connect with a mentor, simply create an account, fill out your profile with your academic interests and career goals, and browse through our directory of professors and industry professionals. You can then send a request to connect and start engaging with them through our messaging system.</p>
                </div>
            </div>

            {/* FAQ 2 */}
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    How do I explore career opportunities in my field?
                </div>
                <div className="collapse-content">
                    <p>Our platform provides curated career resources, including job listings, internship opportunities, and industry insights. You can filter opportunities based on your field of study, such as Electrical and Electronics Engineering, Mechanical Engineering, and Computer Science, to find the best matches.</p>
                </div>
            </div>

            {/* FAQ 3 */}
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Can I join research projects through the platform?
                </div>
                <div className="collapse-content">
                    <p>Yes, students can discover and join research projects in various domains. By browsing our research opportunities section, you can find ongoing projects from professors and research institutions. Express your interest, and you'll receive guidance on how to contribute.</p>
                </div>
            </div>

            {/* FAQ 4 */}
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    How do I improve my chances of securing a job through the platform?
                </div>
                <div className="collapse-content">
                    <p>Enhance your profile by including your academic achievements, skills, and any project or internship experience. Participate in discussions and interact with mentors, who can offer personalized career advice. Additionally, you can access exclusive job recommendations tailored to your interests and qualifications.</p>
                </div>
            </div>

            {/* FAQ 5 */}
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Can I get guidance on my university courses?
                </div>
                <div className="collapse-content">
                    <p>Yes, our platform allows you to connect with professors and alumni who can guide you through your university courses. You can ask for study tips, resources, and even career advice related to specific courses or fields.</p>
                </div>
            </div>

            {/* FAQ 6 */}
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    How do I find experts for interviews and advice?
                </div>
                <div className="collapse-content">
                    <p>Our platform features a network of alumni and industry professionals willing to share their expertise through interviews or direct advice. You can search for experts based on their fields and schedule a session with them directly through our app.</p>
                </div>
            </div>

        </div>
    );
};

export default FAQ;
