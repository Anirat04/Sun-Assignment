import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const ProviderContext = createContext()
const googleAuthProvider = new GoogleAuthProvider()

const Provider = ({ children }) => {
    // this state is for storing all the datas from data.json
    const [servicesData, setServiceData] = useState([])
    // this state is for storing user details or data
    const [user, setUser] = useState([])
    // this state is for loading
    const [loading, setLoading] = useState(true)

    // this function is for registering users
    const createUser = (email, password, displayName, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // After creating the user, update the display name and photoURL
                const promises = [];

                if (displayName) {
                    promises.push(updateProfile(userCredential.user, { displayName }));
                }

                if (photoURL) {
                    promises.push(updateProfile(userCredential.user, { photoURL }));
                }

                return Promise.all(promises)
                    .then(() => {
                        // Update the local user state with the display name and photoURL
                        setUser({
                            uid: userCredential.user.uid,
                            email: userCredential.user.email,
                            displayName,
                            photoURL,
                        });
                        return userCredential;
                    })
                    .catch((error) => {
                        // Handle error while updating profile
                        console.error("Error updating user profile:", error);
                        throw error;
                    });
            })
            .catch((error) => {
                // Handle error while creating user
                console.error("Error creating user:", error);
                throw error;
            });
    };



    // this function is for logging in users
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // this is for google sign in users
    const signInGoogle = () => {
        setLoading(true);
        // setUser({
        //     uid: user.uid,
        //     email: user.email,
        //     displayName: user.displayName,
        //     photoURL: user.photoURL,
        // });
        return signInWithPopup(auth, googleAuthProvider)
    }

    // this function is for logging out users
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // observe auth state change
    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         console.log("current value of the current user", currentUser);
    //         setUser(currentUser)
    //     });
    //     return () => {
    //         unSubscribe();
    //     }
    // }, [])


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current value of the current user", currentUser);
            setUser(currentUser ? {
                uid: currentUser.uid,
                email: currentUser.email,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
                // Add other properties you need
            } : null);
            setLoading(false);

        });
        return () => {
            unSubscribe();
        }
    }, []);


    // useEffect for collecting data from json file and store them in the previous state "servicesData"
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])

    // this const is for keeping all the states which we want to use allover the project components from anywhere else
    const providerInfo = {
        user,
        servicesData,
        createUser,
        signInUser,
        signInGoogle,
        logOut,
        loading
    }
    return (
        <ProviderContext.Provider value={providerInfo}>
            {children}
        </ProviderContext.Provider>
    );
};

export default Provider;

// this propTypes is important otherwise we won't be able to get the datas from this provider to any components trough the props {children}
Provider.propTypes = {
    children: PropTypes.node
}