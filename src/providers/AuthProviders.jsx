import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext({});

const AuthProviders = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    let [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (photoURL, displayName) => {
        return updateProfile(auth.currentUser, {
            displayName, photoURL
        })
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);

    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubSignIn=()=>{
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            
            setUser(currentUser);
            setLoading(false);


        })
        return () => unsubscribe();
    }, [])


    const AuthInfo = {
        logOut,
        user,
        createUser,
        loginUser,
        updateUserProfile,
        verifyEmail,
        resetPassword,
        loading,
        googleSignIn,
        githubSignIn
        


    };
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;