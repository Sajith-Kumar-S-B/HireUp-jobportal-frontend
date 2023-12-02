import React, { useEffect, useState } from 'react'
import styles from '../Auth.module.css';
import loginImg from '../../../Assets/881d6e4e067748b390ceb61bbc2ac943.png'
import { Link, useNavigate} from 'react-router-dom';
import googleImg from '../../../Assets/google-color-f4c1a8513bd15c69ec7ca579db2b03481fc853e34a4de63ceab61c6e7ec2c3c5.svg'

import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../../../firebase/firebase.config';
function Register({login}) {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
  const navigate = useNavigate()
  const [recruitData,setRecruitData] = useState({
    username:"",email:"",password:""
  })


    const isLogin = login?true:false

    console.log(recruitData);
const handleGoogleLogin = ()=>{
    signInWithPopup(auth,googleProvider).then((result) => {
        const user = result.user;
   console.log(user)
    }).catch((error) => {
   
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
   

  return (
    <>
    {isLogin ? 
   ( <div className={styles.authorization}>
    
    
    <div className={styles.login_one}>
         <div className={styles.login_img}>
             <img  src={loginImg} alt="" />
         </div>
         <div className={styles.login_text}>
             <h3>Find the job made for you.</h3>
             <p>Browse over 130K jobs at top companies and fast-growing startups.

</p>
         </div>
    </div>
     <div className={styles.login_two}>
         <div>logo</div>
         <div className={styles.login_form} >
       <h3>   Login   </h3>
       <p>Find the job made for you</p>
       <input onChange={(e)=>setRecruitData({...recruitData,email:e.target.value})} value={recruitData.email} placeholder='Email' type="text" />
       <input onChange={(e)=>setRecruitData({...recruitData,password:e.target.value})} value={recruitData.password} placeholder='Password' type="password" />
       <div className={styles.breakText}>
      &mdash;&mdash;&mdash;&mdash;&mdash;    <span> or Login with Google </span>   &mdash;&mdash;&mdash;&mdash;&mdash;
      </div>
      <div className={styles.googleSignup}>
      <div  className={styles.googleImg}>  <img src={googleImg} alt="" /></div>
       <div onClick={handleGoogleLogin}  className={styles.googleText}> <h6>Login with Google</h6></div>
      </div>
        <button >Login</button>
        <div>Not registered? <span><Link to={'/recruit/signup'}>Create an Account</Link></span></div>
         </div>
     </div>
 </div>): (<div className={styles.authorization}>
    
        
    <div className={styles.login_two}>
        <div>logo</div>
        <div className={styles.login_form} >
      <h3>   Create Account   </h3>
   <p>Find your Next Oppurtunity</p> 
    <input  onChange={e=>setRecruitData({...recruitData,username:e.target.value})} value={recruitData.username} placeholder='Username' type="text" />

    <input onChange={e=>setRecruitData({...recruitData,email:e.target.value})} value={recruitData.email} placeholder='Email' type="text" />
      <input onChange={e=>setRecruitData({...recruitData,password:e.target.value})} value={recruitData.password} placeholder='Password' type="password" />
      <div className={styles.breakText}>
      &mdash;&mdash;&mdash;&mdash;&mdash;    <span> or Register with Google </span>   &mdash;&mdash;&mdash;&mdash;&mdash;
      </div>
   
      <div  className={styles.googleSignup}>
      <div  className={styles.googleImg}>  <img src={googleImg} alt="" /></div>
       <div  className={styles.googleText}> <h6>Sign Up with Google</h6></div>
      </div>
     <button type='submit'>Sign Up</button>
       <div>Already have an account? <span><Link to={'/recruit/login'}>Login</Link></span></div>
        </div>
    </div>
    <div className={styles.login_one}>
        <div className={styles.login_img}>
            <img  src={loginImg} alt="" />
        </div>
        <div className={styles.login_text}>
            <h3>Find the job made for you.</h3>
            <p>Browse over 130K jobs at top companies and fast-growing startups.

</p>
        </div>
   </div>
</div>)
}

    </>
  )
}

export default Register