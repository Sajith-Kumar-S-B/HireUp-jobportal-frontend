import React from "react";
import styles from "./HomeSection.module.css";
import homeImage2 from '../../Assets/Group19.webp'
import Icon from '@mdi/react';
import { mdiHumanGreetingProximity } from '@mdi/js';

function HomeSection() {
  return (
    <div className={styles.homeSection}>
<div className={styles.homeSection_details} >
    
    <h2>INDIA’S #1 JOB PLATFORM</h2>
    <h1>HireUp Job Portal : Your job search ends here</h1>
    <p>Discover 50 lakh+ career opportunities</p>
</div>

      <div className={styles.homeSection_div}>
      <div className={styles.homeSection_text}> 
       <h2>Where startups and job seekers connect.</h2>
       <p>Find work that works for you</p>
       </div>
        <img src={homeImage2} alt="" />
        <div className={styles.homeLogo}>
        <Icon className={styles.icon}  style={{width:'100%',padding:'5px'}} path={mdiHumanGreetingProximity} size={2} />
        </div>
      </div>

     
    </div>

  );
}

export default HomeSection;
