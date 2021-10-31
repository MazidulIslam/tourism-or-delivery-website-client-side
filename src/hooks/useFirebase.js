import authInitialize from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

authInitialize();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  // google sign in
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return (
      signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //   setUser(result.user);
        // })
        .finally(() => setIsLoading(false))
    );
  };

  // user state condition

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  // log out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    auth,
    isLoading,
    user,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
