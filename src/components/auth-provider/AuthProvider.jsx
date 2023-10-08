import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const UserAuth = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with and password
    const userWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with email and password
    const loginWithEMail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // continue with google
    const continueWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // setting user name
    const setUserName = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
          })
    }

    // delete account
    const deleteAccount = (user) => {
        setLoading(true);
        return deleteUser(user)
    }

    // sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // getting user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        });
        return () => unSubscribe();
    }, [])

    // context value
    const userInfo = {
        user,
        loading,
        userWithEmail,
        loginWithEMail,
        continueWithGoogle,
        setUserName,
        deleteAccount,
        logOut
    };
    return (
        <UserAuth.Provider value={userInfo}>
            {children}
        </UserAuth.Provider>
    );
};

AuthProvider.proptypes = {
    children: PropTypes.node
}

export default AuthProvider;