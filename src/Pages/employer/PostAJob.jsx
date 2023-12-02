import React, { useEffect, useState } from 'react'
import styles from './PostAJob.module.css'
import Header from '../../Components/Header/Header'
import { useForm } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../services/baseUrl';
import { useNavigate } from 'react-router-dom';
function PostAJob() {
  const navigate = useNavigate()
 const [selectedOption,setSelectedOption] = useState(null)

    const {
        register,
        handleSubmit,reset,
        watch,
        formState: { errors },
      } = useForm()


      
    
      const onSubmit = async(data) =>{
        data.skills = selectedOption
        console.log(data)
     fetch(`${BASE_URL}/post-job`,{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
     }).then(res=>res.json()).then((result)=>{
      console.log(result);

      if(result.acknowledged===true){
        toast.success("Job Posted Successfully")
        navigate("/jobs")
      }
      reset()
     })

      
      };
         
    
      
      console.log(watch("example"))

      const options  = [
        {value:"ReactJS",label:"ReactJS"},
        {value:"C++",label:"C++"},
        {value:"JavaScript",label:"JavaScript"},
        {value:"Java",label:"Java"},
        {value:"Python",label:"Python"},
        {value:"MongoDB",label:"MongoDB"}



      ]
    
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
        <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} />
        </div>
              

        <div className={styles.form_title_div}>
        <label>Company Name</label>
        <input type="text" placeholder='Ex: Google' {...register("companyName")} />
        </div>
       </div>
         {/* second row */}
       <div className={styles.form_title}>
      
        <div className={styles.form_title_div}>
        <label>Minimum Salary</label>
        <input type="text" placeholder='$ 30k' {...register("minPrice")} />
        </div>
              

       <div className={styles.form_title_div}>
        <label>Maximum Salary</label>
        <input type="text" placeholder='$ 130k' {...register("maxPrice")} />
        </div>
      
         
       </div>
          {/* 3rd row */}
          <div className={styles.form_title}>
      
      <div className={styles.form_title_div}>
      <label>Salary Type</label>
      <select  {...register("salaryType")}>
        <option selected value="">Choose Salary Option</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
      </div>
            

     <div className={styles.form_title_div}>
      <label>Job Location</label>
      <input type="text" placeholder='Ex: Mumbai' {...register("jobLocation")} />
      </div>
    
       
     </div>
     {/* 4th row */}
     <div className={styles.form_title}>

     <div className={styles.form_title_div}>
      <label>Job Posting Date</label>
      <input type="date" placeholder='Ex: 2023-11-24' {...register("postingDate")} />
      </div>
      
      <div className={styles.form_title_div}>
      <label>Experience Level</label>
      <select  {...register("experienceLevel")}>
        <option selected value="">Choose Experience</option>
        <option value="Any experience">Any Experience</option>
        <option value="Work remotely">Work remotely</option>

        <option value="Intership">Intership</option>
      </select>
      </div>
            

     
    
       
     </div>

     {/* 5th row -skils */}
     <div className={styles.form_creatable_div}>  
      <label>Required Skills:</label>
      <CreatableSelect defaultValue={selectedOption} onChange={setSelectedOption} options={options} className={styles.form_creatable} isMulti  />
</div>

{/* 6th row */}

<div className={styles.form_title}>

<div className={styles.form_title_div}>
 <label>Company Logo</label>
 <input type="url" placeholder='Paste Company logo URL' {...register("companyLogo")} />
 </div>
 
 <div className={styles.form_title_div}>
 <label>Employment Type</label>
 <select  {...register("employmentType")}>
   <option selected value="">Choose Type</option>
   <option value="Full-time">Full-time</option>
   <option value="Part-time">Part-time</option>

   <option value="Temporary">Temporary</option>
 </select>
 </div>
       
</div>
{/* 7th row */}

<div className={styles.form_creatable_div}>
<label>Job Description</label>
<textarea className={styles.form_textarea} placeholder='Job Description' name="" id="" cols="30" rows="8" defaultValue={"Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."}  {...register("description")} />

</div>

{/* last row */}
<div className={styles.form_creatable_div}>
<label>Hirer Email:</label>
<input type="email" placeholder='Enter your Email' {...register("postedBy")} />

</div>
        

      <input className={styles.form_submit} type="submit" />
    </form>
     </div>
    </div>
    </>
  )
}

export default PostAJob