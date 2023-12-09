import React, { useContext } from 'react'
import styles from './SearchSection.module.css'
import { AuthorisationContext, UserAuthorisationContext } from '../../Contexts/Authorize'
import { useSelector } from 'react-redux'
export const SearchSection = ({query,setQuery,location,setLocation}) => {
  const {isUserAuthorized,setIsUserAuthorized} = useContext(UserAuthorisationContext)
  const {isAuthorized,setIsAuthorized} = useContext(AuthorisationContext)
  const darkMode = useSelector((state) => state.theme.darkMode);

   
  return (
    <>
        <div className={`${styles.searchSection} ${darkMode ? styles['dark'] : styles['light'] }`}>
       {isAuthorized? <div className={styles.homeText}>
          <h2>You have a<span> job</span>.
We have <span>8M+</span> job seekers.</h2>
          <p>See jobs we've picked just for you</p>
          </div>:<div className={styles.homeText}>
          <h2>Job Search <span>Made Easy</span>.
We have <span>2M+</span> Companies.</h2>
          <p>See jobs we've picked just for you</p>
          </div>}
            <div className={styles.homeSearch}>
                <div className={styles.home_details}>
                  <input onChange={e=>setQuery(e.target.value)} value={query} placeholder="Job title" type="text" />
                </div>
                <div className={styles.home_details}>
                  <input onChange={e=>setLocation(e.target.value)} value={location}   placeholder="Location" type="text" />
                </div>
                <button type='submit'  className={styles.home_search}>
                <i className="fas fa-magnifying-glass"></i>
                </button>
            </div>
        </div>

    </>
  )
}
