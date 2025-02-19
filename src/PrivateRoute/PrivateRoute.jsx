
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../provider/authContext";



const PrivateRoute = ({children}) => {


    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);

    if(loader){
            return <span className="loading loading-spinner loading-lg"></span>
    }


    if(!user?.email){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
        
    }
    return  children
};


PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;