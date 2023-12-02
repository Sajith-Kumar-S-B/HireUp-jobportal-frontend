import React from 'react'
import styles from './SearchSection.module.css'

export const InputField = ({handleChange,value,title,name}) => {
  return (
    <div>
         <label className={styles.sidebar_label_container}>
                <input type="radio" name={name}  value={value} onChange={handleChange} />
                <span className={styles.checkmark}></span>{title}
            </label>
    </div>
  )
}
