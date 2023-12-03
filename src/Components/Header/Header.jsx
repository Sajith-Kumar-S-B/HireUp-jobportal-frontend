import React, { useContext, useState } from 'react'
import styles from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import { AuthorisationContext, UserAuthorisationContext, userDataContext } from '../../Contexts/Authorize';
import { auth } from '../../firebase/firebase.config';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import EditProfile from '../Auth/EditProfile';
function Header() {
const navigate = useNavigate()
  const [showNavbar, setShowNavbar] = useState(false)
  const {isAuthorized,setIsAuthorized} = useContext(AuthorisationContext)
  const {isUserAuthorized,setIsUserAuthorized} = useContext(UserAuthorisationContext)

  const {userData,setUserData} = useContext(userDataContext)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }


  const Logout = async () => {
    
    try {
      await signOut(auth);
      // Sign-out successful.
      setUserData({});
     setIsAuthorized(false)
     setIsUserAuthorized(false)
     toast.error("User Logged out")

      navigate('/');
    } catch (error) {
      // An error happened.
      console.error('Error during logout:', error.message);
    }
  
    }




    const handleLogout = ()=>{
      sessionStorage.removeItem("registeredUser")
      sessionStorage.removeItem("token")
      setIsUserAuthorized(false)
      navigate("/")
      toast.warning("Logged Out Successfully")
    }
  
  return (
    <>
      <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
        HireFound
        </div>
        <div className={styles.menu_icon} onClick={handleShowNavbar}>
         { showNavbar? <CloseIcon/> : <MenuIcon/>}
        </div>
        <div className={`${styles.nav_elements}  ${showNavbar && styles.active}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
           {isAuthorized && <li>
              <NavLink to="/my-jobs">My Jobs</NavLink>
            </li>}
            <li>
              <NavLink to="/jobs">Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/salary">Salary Estimate</NavLink>
            </li>
            {isAuthorized && <li>
              <NavLink to="/post-job">Post A Job</NavLink>
            </li>}
            <li>
           
            <EditProfile/>
            </li>
          <li>
             {isAuthorized || isUserAuthorized ? 
             ( <div onClick={Logout || handleLogout}><h5>Logout</h5></div>): (
             <div className={styles.loginDrop}>
                  <h5>Login</h5>
                  <div className={styles.dropContent}>
                 <p> <NavLink to="/user/login">Job Seeker</NavLink></p>
               <p>   <NavLink to="/recruit/login">Recruiter</NavLink></p>
  
                    
                  </div>
                </div>) }
  
                
  
          </li>

              
              
            
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header