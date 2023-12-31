import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";

//create context
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create User
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //logIn
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //logOut
    const logOut = () =>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currenUser =>{
            setUser(currenUser)
            setLoading(false)
        })
        return () =>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;