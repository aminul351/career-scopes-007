import Lottie from 'lottie-react';
import comingSoon from '../../assets/Animation - 1739974067459.json'
const AboutUs = () => {
    return (
        <div>
              <div className='pt-24 max-w-xl mx-auto'>
            <Lottie animationData={comingSoon} loop={true} />;
        </div>
        </div>
    );
};

export default AboutUs;