import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Roots = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Toaster></Toaster>
            <Footer/>
            
        </div>
    );
};

export default Roots;