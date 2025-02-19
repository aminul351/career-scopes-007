import Marquee from "react-fast-marquee";
import img1 from '../../../src/assets/images/Alibaba-Logo.png'
import img2 from '../../../src/assets/images/power-point.png'
import img3 from '../../../src/assets/images/BlackRock.png'
import img4 from '../../../src/assets/images/facebook.png'
import img5 from '../../../src/assets/images/google.png'
import img6 from '../../../src/assets/images/microsoft.png'
import img7 from '../../../src/assets/images/twitter.png'
import img8 from '../../../src/assets/images/youtube.png'


const Company = () => {
    return (
        <div className="my-6">
                
            <Marquee>
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img1} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img2} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img3} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img4} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img5} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img6} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img7} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img8} alt="" />
            </Marquee>
        </div>
    );
};

export default Company;