import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,sendPasswordResetEmail, sendEmailVerification } from "firebase/auth";
import initializeAuthentication from "../components/firebase/firebase.int";



initializeAuthentication();
const googleProvider = new GoogleAuthProvider();


 const useFirebase = () => {
 const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user,setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  

    const auth = getAuth();
   useEffect(()  =>   {
   const unsubscribe =  onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)

        }
    else{
        setUser({})
    }

    setLoading(false);
        });
        return () => unsubscribe;
       
       },[])

  const handleGoogleSignIn = () => {
  return  signInWithPopup(auth, googleProvider)
      
  }

  const processLogin = e => {
    e.preventDefault();
   return signInWithEmailAndPassword(auth, email, password);
      
  }

  const handleNameChange = e => {
    setName(e.target.value);
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleRegistration = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setError('');
      verifyEmail();
      setUserName();
    })
    
    .catch(error => {
      setError(error.message);
    })
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }
   
  }


  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => { })
  }
       

    const logOut = () =>{
     signOut(auth)
     .then(() =>{

     })


    }

return{
    user,
    setUser,
    email,
    password,
    name,
    error,
    setError,
    handleRegistration,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleResetPassword ,
    handleGoogleSignIn,
    verifyEmail,
    processLogin,
    logOut,
    loading
}



  }



export default useFirebase;