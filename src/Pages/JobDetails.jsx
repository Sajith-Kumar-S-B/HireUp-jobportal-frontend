import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../services/baseUrl'
import styles from './Jobs.module.css'
import Swal from 'sweetalert2'
import { PageHeader } from '../Components/jobsection/PageHeader'

import Icon from '@mdi/react';
import { mdiPlusBoxMultipleOutline } from '@mdi/js';
import { UserAuthorisationContext } from '../Contexts/Authorize'

function JobDetails() {
  const {isUserAuthorized,setIsUserAuthorized} = useContext(UserAuthorisationContext)

    const navigate = useNavigate()
    const {id} = useParams()
    const [job,setJob] = useState([])

    useEffect(()=>{
        fetch(`${BASE_URL}/all-jobs/${id}`).then(res=>res.json()).then(data=>
        setJob(data))

    },[])


    const handleApply = async ()=>{
        const { value: file } = await Swal.fire({
            title: "Upload Your Resume",
            input: "file",
            inputAttributes: {
              "accept": "image/*",
              "aria-label": "Upload your Resume"
            }
          });
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              Swal.fire({
                title: `You have successfully applied for the job of ${job?.jobTitle}`,
                 icon:"success",
                 timer:1500
              });
            };
            reader.readAsDataURL(file);
          }
          setTimeout(()=>{
            navigate('/jobs')
          },[2000])
        
        

    }
  return (
    <>
    <Header/>
   
    <div className={styles.jobDetails}>
    <PageHeader title={"Get Started"} path={"Apply Job"} />
      <div className={styles.singleContent}>
         <div className={styles.singleContent_details}>
  
            <h6>Job Id: {id}</h6>
            <h6>Posted on:{job?.postingDate}</h6>
            <h4>Job Details</h4>
            <h2>{job?.jobTitle}</h2>
           
          <div className={styles.single_buttons}> <button>{job?.employmentType}</button> {' '}
          {isUserAuthorized? <button onClick={handleApply}>Apply Now</button>: null}
           </div>
          <div>
              <h5>Job Description</h5>
              <p>{job?.description}</p>
            </div>
         </div>
  
         <div className={styles.company}>
          <h5>Company Details</h5>
          <div className={styles.companyTitle}>
           
            <img  src={job?.companyLogo} alt="" />
            <h5>{job?.companyName}</h5>
          </div>
          <button style={{color:'#fff'}}><span ><Icon style={{color:'#fff'}} path={mdiPlusBoxMultipleOutline} size={1} />

</span> Follow </button>
         </div>
      </div>
    </div>
    </>
  )
}

export default JobDetails