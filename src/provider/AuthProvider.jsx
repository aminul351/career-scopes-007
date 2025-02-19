import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState} from "react";
import PropTypes from 'prop-types';








import { AuthContext } from './authContext';
import auth from "../firebase/firebase.config";

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)
    const[loader, setLoader] = useState(true)

    //signInWithGoogle
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle  = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

  


    // create user 
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // log in 
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out 
    const logOut = ()=> {
        setLoader(true)
        return signOut(auth)
        
    }

// update 
const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
}

    // save user 
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        });

        return ()=> {
            unSubscribe()
        }


    } ,[])
// console.log(user);

    const authInfo = {
        signInWithGoogle, createUser, login,logOut, user, loader,handleUpdateProfile
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};




AuthProvider.propTypes = {
        children: PropTypes.node
}

export default AuthProvider;