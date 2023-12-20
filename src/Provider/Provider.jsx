import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider()

// eslint-disable-next-line react/prop-types
const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const signUpUser = (name, email) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, name, email)
    }

    const signInUser = (email, password) => {
        setLoader()
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoader()
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (profile) => {
        setLoader()
        return updateProfile(auth.currentUser , profile)
    }

    const logOutUser = () =>{
        setLoader()
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {user, loader, signUpUser, updateUserProfile, signInUser, googleSignIn, logOutUser}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;