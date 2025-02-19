
// import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
// import emailjs from '@emailjs/browser';
// import { useRef } from 'react';
// import swal from "sweetalert";
import { RiTwitterXLine } from "react-icons/ri";

// import toast, { Toaster } from 'react-hot-toast';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Contact = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,

        });
      
    }, []);


    // const handleClick = () => {
    //     toast.success('Message sent successfully !')
    // }


    // const form = useRef();

    // const sendEmail = (e) => {



    //     e.preventDefault();

    //     emailjs.sendForm(
    //         'service_uqbodum',
    //         'template_jw70snv',
    //         form.current,
    //         '4Y0AINGKMq_de7NnT'
    //     )
    //         .then((result) => {
    //             swal("Message sent successfully");
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });


    // };


    return (
        <div id="contact" className="my-12 mx-6 lg:mx-12">
            {/* <Toaster */}
            {/* position="top-right" */}
            {/* /> */}
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8 title-style" >GET IN <span className="">TOUCH</span></h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className=" space-y-3 p-5" data-aos="fade-right">
                    <h3 className="text-xl lg:text-7xl font bold"> Let's Talk!
                   </h3>
                    <p> We're here for support. Contact us for any inquiries regarding support, log in <br /> or sign up help, becoming an ambassador, or any problems you may run into. !</p>
                    <div className="flex gap-3 items-center">
                        {/* <CgMail className="text-3xl text-indigo-500"></CgMail> */}
                        <div className="flex gap-3 items-center">
                        <BiLogoGmail className="text-2xl "></BiLogoGmail>
                        <div>
                            <p>support@gmail.com</p>
                        </div>
                    </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaPhone className="text-2xl "></FaPhone>
                        <div>
                            <p>+8801934-000000</p>
                        </div>
                    </div>
                    <div className="flex gap-2   items-center">

                        <a href="https://github.com/aminul157246">
                            <FaGithub className="text-xl "></FaGithub>
                        </a>
                        <a href="https://www.linkedin.com/in/aminulislam157246/">
                            <FaLinkedinIn className="text-xl text-blue-500"></FaLinkedinIn>
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=100049235346943"> <FaFacebookF className="text-xl text-blue-800"></FaFacebookF>
                        </a>
                        <a href="https://twitter.com/aminul157246"> <RiTwitterXLine className="text-xl "></RiTwitterXLine>
                        </a>
                    </div>
                </div>
                <div className="    pt-6 p-6" data-aos="fade-left">

                    <form 
                    // ref={form} onSubmit={sendEmail/}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4    items-center justify-center">
                            <input className="bg-base-200 rounded-3xl px-2 lg:px-4 py-3" required type="text" placeholder="Your Name" name="form_name" />
                            <input className="bg-base-200 rounded-3xl px-2 lg:px-4 py-3" required type="email" placeholder="Your Email" name="form_email" />
                        </div>

                        <div className="flex justify-center items-center">
                            <textarea className="bg-base-200 rounded-3xl mt-6 p-2 lg:p-4" required placeholder="Your Message" id="" cols="90" rows="5" name="message" />
                        </div>
                        <div className="lg:pl-6 mt-6">
                            <button className="bg-[#00bcf1] px-4 py-2 rounded-3xl"
                            //  onClick={handleClick}
                             >
                                Send Message
                            </button>

                        </div>

                    </form>


                </div>
            </div>

        </div>
    );
};

export default Contact;