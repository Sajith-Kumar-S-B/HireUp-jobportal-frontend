import React from 'react'
import styles from "./Sidebar.module.css";
import { Button } from './Button';
import { InputField } from '../Components/jobsection/InputField';

export const Salary = ({handleChange,handleClick}) => {
  return (
    <div className={styles.Salary}>
        <h6>Salary</h6>
        <div className={styles.Salary_type}>
            <Button onClickHandler={handleClick} value="Hourly" title="Hourly" />
            <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />

            <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />

        </div>
        <div> <label className={styles.sidebar_label_container}>
          <input
            type="radio"
            name="test"
            id="test"
            value={""}
            onChange={handleChange}
          />
          <span className={styles.checkmark}></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30k"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50k"
          name="test"
        />
         <InputField
          handleChange={handleChange}
          value={80}
          title="< 80k"
          name="test"
        />
         <InputField
          handleChange={handleChange}
          value={100}
          title="< 100k"
          name="test"
        />
        
        </div>
    </div>
  )
}
