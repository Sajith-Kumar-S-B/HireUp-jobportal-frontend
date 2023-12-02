import React from 'react'
import styles from "./Sidebar.module.css";

export const Button = ({onClickHandler,value,title}) => {
  return (
   <button className={styles.button} onClick={onClickHandler} value={value} >{title}</button>
  )
}
