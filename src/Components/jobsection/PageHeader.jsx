import React from 'react'
import styles from './SearchSection.module.css'
import { Link } from 'react-router-dom'

export const PageHeader = ({title,path}) => {
  return (
    <div className={styles.PageHeader}>
        <div>
            <h2>{title}</h2>
            <p><Link className={styles.link} to={'/jobs'}>Jobs</Link> <span> / {path}</span></p>
            </div>
            
            
    </div>
  )
}
