import logo from '../../assets/images/google.png'
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from '../../provider/authContext';

const LoginWithGoogle = () => {

    const {signInWithGoogle} = useContext(AuthContext)


    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(res => {
            console.log(res.user);
            toast.success('Sign in with Google done!');
        })
        .catch(err => {
            console.log(err.message);
        })
    }


    return (
        <div>
            <button onClick={handleGoogleLogin} ><img className='w-[80px]' src={logo} alt="" /></button>
        </div>
    );
};

export default LoginWithGoogle;