import service_img from '../../assets/images/service.png';

const Services = () => {
    return (
        <div className='text-center mt-12 '>
            <h3 className="text-4xl font-semibold mb-4 font-textStyle lg:text-6xl">Services That <br /> Help You succeed</h3>
                <p className="text-xl mb-8">CareerPathway.com is many tools in one platform  - for all different users</p>
                <img src={service_img} alt="" />
                
        </div>
    );
};

export default Services;