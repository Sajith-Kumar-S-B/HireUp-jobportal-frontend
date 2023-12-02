import React, { useEffect, useState } from 'react'
import styles from '../Auth.module.css';
import loginImg from '../../../Assets/881d6e4e067748b390ceb61bbc2ac943.png'
import { Link, useNavigate} from 'react-router-dom';
import googleImg from '../../../Assets/google-color-f4c1a8513bd15c69ec7ca579db2b03481fc853e34a4de63ceab61c6e7ec2c3c5.svg'

import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { googleRegisterAsync ,getUserAsync } from '../../../redux/slices/authSlice';
import { setGoogleSignup } from '../../../redux/slices/authSlice';
function Register({login}) {
  const navigate = useNavigate()
  const [userData,setUserData] = useState({
    username:"",email:"",password:""
  })

const dispatch = useDispatch()


    const isLogin = login?true:false

    console.log(userData);

    


   
     

  
  


 
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
      <form>
         <input onChange={(e)=>setUserData({...userData,email:e.target.value})} value={userData.email} placeholder='Email' type="text" />
         <input onChange={(e)=>setUserData({...userData,password:e.target.value})} value={userData.password} placeholder='Password' type="password" />
      </form>
       <div className={styles.breakText}>
      &mdash;&mdash;&mdash;&mdash;&mdash;    <span> or Login with Google </span>   &mdash;&mdash;&mdash;&mdash;&mdash;
      </div>
      <div className={styles.googleSignup}>
      <div  className={styles.googleImg}>  <img src={googleImg} alt="" /></div>
       <div   className={styles.googleText}> <h6>Login with Google</h6></div>
      </div>
        <button type='submit' >Login</button>
        <div>Not registered? <span><Link to={'/user/signup'}>Create an Account</Link></span></div>
         </div>
     </div>
 </div>): (<div className={styles.authorization}>
    
        
    <div className={styles.login_two}>
        <div>logo</div>
        <div className={styles.login_form} >
      <h3>   Create Account   </h3>
   <p>Find your Next Oppurtunity</p> 
   <form>
      <input  onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username} placeholder='Username' type="text" />
  
      <input onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email} placeholder='Email' type="text" />
        <input onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password} placeholder='Password' type="password" />
   </form>
      <div className={styles.breakText}>
      &mdash;&mdash;&mdash;&mdash;&mdash;    <span> or Register with Google </span>   &mdash;&mdash;&mdash;&mdash;&mdash;
      </div>
    
      <div  className={styles.googleSignup}>
      <div  className={styles.googleImg}>  <img src={googleImg} alt="" /></div>
       <div  className={styles.googleText}> <h6>Sign Up with Google</h6></div>
      </div>
     <button type='submit'>Sign Up</button>
       <div>Already have an account? <span><Link to={'/user/login'}>Login</Link></span></div>
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