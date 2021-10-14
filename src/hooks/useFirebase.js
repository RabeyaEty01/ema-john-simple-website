import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })

    }

    //observe wheather user auth state changed or not 
    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return unsbscribe;
    }, [])

    return {
        user,
        logout,
        signInUsingGoogle
    }
}
export default useFirebase;