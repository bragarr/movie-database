import { createContext, useEffect, useState } from "react";
import { auth } from "../contexts/fbconfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        })
    }, []);

    const novoUsuario = (auth, email, password) => {
        if(password.length < 8 || password.length > 12) {
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            toast.error(errorCode);
        });
    };

    const login = (auth, email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential;
        })
        .catch((error) => {
            if(password=="" || email=="") {
                return
            } else {
                const errorCode = error.code;
                toast.error(errorCode);
            }
        });
    };

    const logOut = () => {
        signOut(auth)
        .catch((error) => {
            const errorCode = error.code;
            toast.error(errorCode);
        });
    }

    return (
        <AuthContext.Provider value={{user, logged: !!user, novoUsuario, login, logOut}}>
            { children }
        </AuthContext.Provider>
    )
}