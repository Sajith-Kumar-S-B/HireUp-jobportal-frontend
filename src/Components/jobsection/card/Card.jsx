import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import {FiMapPin,FiClock, FiDollarSign, FiCalendar} from 'react-icons/fi'
export const Card = ({data}) => {

const {_id,companyName,jobTitle,maxPrice,jobLocation,experienceLevel,companyLogo,minPrice,postingDate,employmentType,description,salaryType} = data

  return (
    <section className={styles.card}>
       <Link className={styles.Link} to={`/job/${_id}`}>
        <img src={companyLogo} alt="" />
        <div className={styles.card_details}>
          <h6>{companyName}</h6>
          <h4>{jobTitle}</h4>
          <div className={styles.category}>
            <span><FiMapPin/>{jobLocation}</span>
            <span><FiClock/>{employmentType}</span>
            <span><FiDollarSign/>{minPrice}-{maxPrice}k</span>
            <span><FiCalendar/>{postingDate}</span>

          </div>
          <p>{description.slice(0,100)}..see more..</p>
        </div>
       </Link>
    </section>
  )
}
