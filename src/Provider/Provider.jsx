import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../Firebase/Firebase-confique";

export const AuthProvider = createContext(null)

const Provider = ({children}) => {
    const provider = new GoogleAuthProvider()
    const [user,setUser] = useState()
    const [loading, setLoading] = useState(true)

    const userRegister = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email,password)
    }
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email,password)
    }
    const userLogout = ()=>{
        return signOut(Auth)
    }
    const singInWithGoole = ()=>{
        setLoading(true)
        return signInWithPopup(Auth, provider)
    }
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(Auth,currenUser =>{
            setLoading(false)
            setUser(currenUser)
            console.log(currenUser)
        })
        return ()=>{
            return unsubcribe
        }
    },[setLoading])
    
    const AuthInfo = {
        userRegister,
        userLogout,
        loginUser,
        singInWithGoole,
        user,
        loading
    }
    return (
        <AuthProvider.Provider value={AuthInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;