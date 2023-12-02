import React from "react";
import styles from './Jobs.module.css'

function JobList({ result }) {
  return (
    <>
      <div className={styles.JobList}>
      
        <h5>{result.length} Job Results</h5>
      </div>

     <section className={styles.JobList_container}> {result}</section>
    </>
  );
}

export default JobList;
