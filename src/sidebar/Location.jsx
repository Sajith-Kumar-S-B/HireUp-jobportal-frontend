import React from "react";
import styles from "./Sidebar.module.css";
import { InputField } from "../Components/jobsection/InputField";
import { CiLocationOn } from "react-icons/ci";
export const Location = ({ handleChange }) => {
  return (
    <div className={styles.Location}>
      <h6><CiLocationOn />Location</h6>
      <div>
        <label className={styles.sidebar_label_container}>
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
          value="london"
          title="London"
          name="test"
        />
         <InputField
          handleChange={handleChange}
          value="seattle"
          title="Seattle"
          name="test"
        />
         <InputField
          handleChange={handleChange}
          value="madrid"
          title="Madrid"
          name="test"
        />
         <InputField
          handleChange={handleChange}
          value="boston"
          title="Boston"
          name="test"
        />
      </div>
    </div>
  );
};
