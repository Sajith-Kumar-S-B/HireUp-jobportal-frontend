import React from 'react'
import { InputField } from '../Components/jobsection/InputField'
import styles from './Sidebar.module.css'

export const Experience = ({handleChange}) => {
  return (
    <div className={styles.Location}>
      <h6>Work Experience</h6>
      <div>
        <label className={styles.sidebar_label_container}>
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className={styles.checkmark}></span>Any Experience
        </label>

        <InputField
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="test"
        />
         <InputField
          handleChange={handleChange}
          value="Work remotely"
          title="Remote"
          name="test"
        />
        
      </div>
    </div>
  )
}
