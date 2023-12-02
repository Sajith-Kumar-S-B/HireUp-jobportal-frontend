import React, { useState } from 'react'
import styles from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
function Header() {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
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
            <li>
              <NavLink to="/my-jobs">My Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/jobs">Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/salary">Salary Estimate</NavLink>
            </li>
            <li>
              <NavLink to="/post-job">Post A Job</NavLink>
            </li>
            <li>
            <div className={styles.loginDrop}>
                <h5>Login</h5>
                <div className={styles.dropContent}>
               <p> <NavLink to="/user/login">Job Seeker</NavLink></p>
             <p>   <NavLink to="/recruiter/login">Recruiter</NavLink></p>

                  
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header