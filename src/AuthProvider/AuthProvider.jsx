import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const userLogin = (email, password) => {
        
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }
     const createUser = (email, password) => {
        
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }
     const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
        
     }
     const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
     }
     useEffect(() => {
       const showUser = onAuthStateChanged(auth, currentUser => {
        // console.log(currentUser)
        setLoading(false)
            setUser(currentUser)
        });
        return () => {
            showUser()
        }
     }, [])
    const authInfo = {
        user,
        userLogin,
        createUser,
        googleLogin,
        userLogOut,
        loading
    }
    // console.log(createUser)
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;