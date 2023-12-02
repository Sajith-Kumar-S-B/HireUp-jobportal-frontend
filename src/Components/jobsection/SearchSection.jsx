import React from 'react'
import styles from './SearchSection.module.css'
export const SearchSection = ({query,setQuery}) => {

   
  return (
    <>
        <div className={styles.searchSection}>
        <div className={styles.homeText}>
          <h1>Experience the new way to work</h1>
          <p>See jobs we've picked just for you</p>
          </div>
            <div className={styles.homeSearch}>
                <div className={styles.home_details}>
                  <input onChange={e=>setQuery(e.target.value)} value={query} placeholder="Job title" type="text" />
                </div>
                <div className={styles.home_details}>
                  <input   placeholder="Location" type="text" />
                </div>
                <button type='submit'  className={styles.home_search}>
                <i className="fas fa-magnifying-glass"></i>
                </button>
            </div>
        </div>

    </>
  )
}
