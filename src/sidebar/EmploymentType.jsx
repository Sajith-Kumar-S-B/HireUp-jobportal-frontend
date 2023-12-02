import React from 'react'
import { InputField } from '../Components/jobsection/InputField'
import styles from './Sidebar.module.css'

export const EmploymentType = ({handleChange}) => {
  return (
    <div className={styles.Location}>
    <h6>Employment Type</h6>
    <div>
      <label className={styles.sidebar_label_container}>
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>All Type
      </label>

      <InputField
        handleChange={handleChange}
        value="Full-time"
        title="Full-time"
        name="test"
      />
       <InputField
        handleChange={handleChange}
        value="Part-time"
        title="Part-time"
        name="test"
      />
       <InputField
        handleChange={handleChange}
        value="Temporary"
        title="Temporary"
        name="test"
      />
      
    </div>
  </div>
  )
}
