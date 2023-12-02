import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../services/baseUrl'
import styles from './Jobs.module.css'
import Swal from 'sweetalert2'
import { PageHeader } from '../Components/jobsection/PageHeader'
function JobDetails() {
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
    <PageHeader title={"Single Job"} path={"Apply Job"} />
        <h6>Job Id: {id}</h6>
        <h2>{job?.jobTitle}</h2>
        <button onClick={handleApply}>Apply Now</button>
    </div>
    </>
  )
}

export default JobDetails