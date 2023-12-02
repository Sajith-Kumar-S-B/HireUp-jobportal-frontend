import React from 'react'
import styles from './Sidebar.module.css'
import { Location } from './Location'
import { Salary } from './Salary'
import { PostingDate } from './PostingDate'
import { Experience } from './Experience'
import { EmploymentType } from './EmploymentType'
export const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className={styles.sidebar}>
        <h5>Filters</h5>
        <Location handleChange={handleChange} />
        <Salary  handleChange={handleChange} handleClick={handleClick} />
        <PostingDate handleChange={handleChange} />
        <Experience handleChange={handleChange} />
        <EmploymentType handleChange={handleChange} />


        

        </div>
  )
}
