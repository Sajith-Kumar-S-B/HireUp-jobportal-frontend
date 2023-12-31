import React, { useContext, useEffect, useState } from 'react'
import styles from '../Auth.module.css';
import loginImg from '../../../Assets/881d6e4e067748b390ceb61bbc2ac943.png'
import { Link, useNavigate} from 'react-router-dom';
import googleImg from '../../../Assets/google-color-f4c1a8513bd15c69ec7ca579db2b03481fc853e34a4de63ceab61c6e7ec2c3c5.svg'

import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app, { auth } from '../../../firebase/firebase.config';
import { AuthorisationContext, UserAuthorisationContext, userDataContext } from '../../../Contexts/Authorize';
import { RecruitLoginAPI, RecruitRegisterAPI } from '../../../services/allApi';
import { TokenAuthContext } from '../../../Contexts/TokenAuth';
import Icon from '@mdi/react';
import { mdiHumanGreetingProximity } from '@mdi/js';
function Register({login}) {
    const googleProvider = new GoogleAuthProvider();
    const {isAuthorized,setIsAuthorized} = useContext(AuthorisationContext)
    const {isUserAuthorized,setIsUserAuthorized} = useContext(UserAuthorisationContext)
      const {sessionStore,setSessionStore} = useContext(TokenAuthContext)
    const {userData,setUserData} = useContext(userDataContext)
  const navigate = useNavigate()
  const [recruitData,setRecruitData] = useState({
    username:"",email:"",password:""
  })


    const isLogin = login?true:false

    // console.log(recruitData);
const handleGoogleLogin = ()=>{
    signInWithPopup(auth,googleProvider).then((result) => {
     
      
        const { displayName, email,photoURL } = result.user;
        setUserData({ displayName, email,photoURL })
           setIsAuthorized(true)
              navigate("/jobs")

           
       
   
    }).catch((error) => {
   
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
   


const handleRecruitRegister = async (e)=>{

  e.preventDefault()

  const {username,email,password} = recruitData

  if(!username || !email || !password){
    toast.info("Please fill the details")
  }else{

    const result = await RecruitRegisterAPI(recruitData)

    if(result.status===200){
      toast.success(`${result.data.username} has successfully registered`)
      
      setRecruitData({
        username:'',email:'',password:''
      })
         navigate("/recruit/login")
    }else{

      toast.warning(result.response.data)
      console.log(result);
    }
  }


}

const handleRecruitLogin = async (e)=>{
  e.preventDefault()
const {email,password} = recruitData
  if(!email || !password){
    toast.info("Please fill the details")
  }else{

    const result = await RecruitLoginAPI(recruitData)


    
    if(result.status===200){
      // toast.success(`${result.data.username} has successfully registered`)

   sessionStorage.setItem("registeredUser",JSON.stringify(result.data.registeredUser))
   sessionStorage.setItem("token",result.data.token)
               setSessionStore(result.data.registeredUser)
   toast.success(`Welcome ${result.data.registeredUser?.username}`)
       setIsAuthorized(true)
      setRecruitData({
      email:'',password:''
      })


         navigate("/jobs")
    }else{

      toast.warning(result.response.data)
      console.log(result);
    }

  }

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
             <h4>Find the perfect match for your Company.</h4>
             <p>Browse over 130K jobs at top companies and fast-growing startups.

</p>
         </div>
    </div>
     <div className={styles.login_two}>
         <div className={styles.logo}>  <Icon path={mdiHumanGreetingProximity} size={2} />
        <h4>HireUp</h4></div>
         <div className={styles.login_form} >
       <h3>   Login   </h3>
       <p>Where the best startups find their teams</p>
       <form>
       <input onChange={(e)=>setRecruitData({...recruitData,email:e.target.value})} value={recruitData.email} placeholder='Email' type="email" />
       <input onChange={(e)=>setRecruitData({...recruitData,password:e.target.value})} value={recruitData.password} placeholder='Password' type="password" />
       </form>
       <div className={styles.breakText}>
      &mdash;&mdash;&mdash;&mdash;&mdash;    <span> or Login with Google </span>   &mdash;&mdash;&mdash;&mdash;&mdash;
      </div>
      <div  onClick={handleGoogleLogin} className={styles.googleSignup}>
      <div  className={styles.googleImg}>  <img src={googleImg} alt="" /></div>
       <div  className={styles.googleText}> <h6>Login with Google</h6></div>
      </div>
        <button type='submit' onClick={handleRecruitLogin} >Login</button>
        <div>Not registered? <span><Link to={'/recruit/signup'}>Create an Account</Link></span></div>
         </div>
     </div>
 </div>): (<div className={styles.authorization}>
    
        
    <div className={styles.login_two}>
    <div className={styles.logo}>  <Icon path={mdiHumanGreetingProximity} size={2} />
        <h4>HireUp</h4></div>
        <div className={styles.login_form} >
      <h3>   Create Account   </h3>
   <p>Where the best startups find their teams</p> 
   <form>
    <input  onChange={e=>setRecruitData({...recruitData,username:e.target.value})} value={recruitData.username} placeholder='Username' type="text" />

    <input onChange={e=>setRecruitData({...recruitData,email:e.target.value})} value={recruitData.email} placeholder='Email' type="text" />
      <input onChange={e=>setRecruitData({...recruitData,password:e.target.value})} value={recruitData.password} placeholder='Password' type="password" />
     </form>
      <div className={styles.breakText}>
      &mdash;&mdash;&mdash;&mdash;&mdash;    <span> or Register with Google </span>   &mdash;&mdash;&mdash;&mdash;&mdash;
      </div>
   
      <div onClick={handleGoogleLogin}   className={styles.googleSignup}>
      <div  className={styles.googleImg}>  <img src={googleImg} alt="" /></div>
       <div  className={styles.googleText}> <h6>Sign Up with Google</h6></div>
      </div>
     <button onClick={handleRecruitRegister} type='submit'>Sign Up</button>
       <div>Already have an account? <span><Link to={'/recruit/login'}>Login</Link></span></div>
        </div>
    </div>
    <div className={styles.login_one}>
        <div className={styles.login_img}>
            <img  src={loginImg} alt="" />
        </div>
        <div className={styles.login_text}>
            <h4>Find the perfect match for your Company..</h4>
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