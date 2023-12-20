import React, { useEffect, useState } from 'react'
import styles from './PostAJob.module.css'
import CreatableSelect from 'react-select/creatable';

import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { BASE_URL } from '../../services/baseUrl';

function UpdateJob() {
    const {id} = useParams()
    const [jobData, setJobData] = useState(null);
    const navigate = useNavigate()
    const [selectedOption,setSelectedOption] = useState(null)
    useEffect(() => {
        const fetchJobData = async () => {
          try {
            const response = await fetch(`${BASE_URL}/all-jobs/${id}`);
            const data = await response.json();
           
            setJobData(data);
          } catch (error) {
            console.error('Error fetching job data:', error);
          }
        };
    
        fetchJobData();
      }, [id]);


      
    // const {_id,jobTitle,minPrice,maxPrice,companyName,salaryType,jobLocation,postingDate,experienceLevel,companyLogo,employmentType,description,skills,postedBy} = useLoaderData()
   

    const {
        register,
        handleSubmit,reset,
        watch,
        formState: { errors },
      } = useForm()


      
    
      const onSubmit = async(data) =>{
        data.skills = selectedOption
        console.log(data)
     fetch(`${BASE_URL}/update-job/${id}`,{
      method:"PATCH",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
     }).then(res=>res.json()).then((result)=>{
      console.log(result);

      if(result.acknowledged===true){
        toast.success("Job Updated Successfully")
        navigate("/jobs")
      }
      reset()
     })

      
      };
         
    
      
      // console.log(watch("example"))

      const options  = [
        {value:"ReactJS",label:"ReactJS"},
        {value:"C++",label:"C++"},
        {value:"JavaScript",label:"JavaScript"},
        {value:"Java",label:"Java"},
        {value:"Python",label:"Python"},
        {value:"MongoDB",label:"MongoDB"}



      ]
    
    // console.log(id);
   

  return (
    <>
    <Header/>
    <div className={styles.PostJob}>
     {/* form */}

     <div className={styles.PostJob_form}>
     <form onSubmit={handleSubmit(onSubmit)}>
  {/* first row */}
       <div className={styles.form_title}>
      
        <div className={styles.form_title_div}>
        <label>Job Title</label>
        <input type="text" defaultValue={jobData?.jobTitle} {...register("jobTitle")} />
        </div>
              

        <div className={styles.form_title_div}>
        <label>Company Name</label>
        <input type="text" defaultValue={jobData?.companyName} placeholder='Ex: Google' {...register("companyName")} />
        </div>
       </div>
         {/* second row */}
       <div className={styles.form_title}>
      
        <div className={styles.form_title_div}>
        <label>Minimum Salary</label>
        <input type="text" placeholder='$ 30k' defaultValue={jobData?.minPrice} {...register("minPrice")} />
        </div>
              

       <div className={styles.form_title_div}>
        <label>Maximum Salary</label>
        <input type="text" placeholder='$ 130k' defaultValue={jobData?.maxPrice} {...register("maxPrice")} />
        </div>
      
         
       </div>
          {/* 3rd row */}
          <div className={styles.form_title}>
      
      <div className={styles.form_title_div}>
      <label>Salary Type</label>
      <select  {...register("salaryType")}>
        <option selected value={jobData?.salaryType}>{jobData?.salaryType}</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
      </div>
            

     <div className={styles.form_title_div}>
      <label>Job Location</label>
      <input type="text" defaultValue={jobData?.jobLocation} placeholder='Ex: Mumbai' {...register("jobLocation")} />
      </div>
    
       
     </div>
     {/* 4th row */}
     <div className={styles.form_title}>

     <div className={styles.form_title_div}>
      <label>Job Posting Date</label>
      <input type="date"  defaultValue={jobData?.postingDate} placeholder='Ex: 2023-11-24' {...register("postingDate")} />
      </div>
      
      <div className={styles.form_title_div}>
      <label>Experience Level</label>
      <select   {...register("experienceLevel")}>
        <option selected value={jobData?.experienceLevel}>{jobData?.experienceLevel}</option>
        <option value="Any experience">Any Experience</option>
        <option value="Work remotely">Work remotely</option>

        <option value="Intership">Intership</option>
      </select>
      </div>
            

     
    
       
     </div>

     {/* 5th row -skils */}
     <div className={styles.form_creatable_div}>  
      <label>Required Skills:</label>
      <CreatableSelect defaultValue={jobData?.skills} onChange={setSelectedOption} options={options} className={styles.form_creatable} isMulti  />
</div>

{/* 6th row */}

<div className={styles.form_title}>

<div className={styles.form_title_div}>
 <label>Company Logo</label>
 <input type="url" defaultValue={jobData?.companyLogo} placeholder='Paste Company logo URL' {...register("companyLogo")} />
 </div>
 
 <div className={styles.form_title_div}>
 <label>Employment Type</label>
 <select  {...register("employmentType")}>
   <option selected value={jobData?.employmentType}>{jobData?.employmentType}</option>
   <option value="Full-time">Full-time</option>
   <option value="Part-time">Part-time</option>

   <option value="Temporary">Temporary</option>
 </select>
 </div>
       
</div>
{/* 7th row */}

<div className={styles.form_creatable_div}>
<label>Job Description</label>
<textarea className={styles.form_textarea} placeholder='Job Description' name="" id="" cols="30" rows="8" defaultValue={jobData?.description}  {...register("description")} />

</div>

{/* last row */}
<div className={styles.form_creatable_div}>
<label>Hirer Email:</label>
<input type="email" defaultValue={jobData?.postedBy} placeholder='Enter your Email' {...register("postedBy")} />

</div>
        

      <input className={styles.form_submit} type="submit" />
    </form>
     </div>
    </div>
    </>
  )
}

export default UpdateJob