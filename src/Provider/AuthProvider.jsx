import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";


export const AuthContext = createContext(null);
//------------Google----Provider--------
const googleProvider = new GoogleAuthProvider()

const auth = getAuth(app);
 

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //---------Create------new-----user--------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //----------Singin----User--------
  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };


  //--------SingIn-----Width------Google-------
  const singInWidthGoogle = () =>{
     return signInWithPopup(auth, googleProvider)
  }



  //---------Singout----user---------
  const logOut = () => {
    return signOut(auth);
  };

  //------------Manage-------User----------
  useEffect(() => {
    const unSubsCribes = onAuthStateChanged(auth, (currentUser) => {
      console.log("user is Singred", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubsCribes();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    singInUser,
    singInWidthGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
