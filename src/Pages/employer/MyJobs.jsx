import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import { BASE_URL } from '../../services/baseUrl'
import styles from './PostAJob.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { userDataContext } from '../../Contexts/Authorize'
import { TokenAuthContext } from '../../Contexts/TokenAuth'
import { deleteProjectResponseContext } from '../../Contexts/ContextShare'

function MyJobs() {
  const navigate = useNavigate()
  const {userData,setUserData} = useContext(userDataContext)
  const {sessionStore,setSessionStore} = useContext(TokenAuthContext)

    const [jobs,setJobs] = useState([])
    const [searchText,setSearchText] = useState("")
    const [loading,setLoading] = useState(true)
// set current page

const [currentPage,setCurrentPage] = useState(1)
const itemsPerPage = 4
    useEffect(()=>{
        setLoading(true)
           fetch(`${BASE_URL}/my-jobs/${userData?.email || sessionStore?.email}`).then((res)=>res.json()).then((data)=>{
            setJobs(data)
            setLoading(false)
           })
    },[searchText])

    // pagination

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentJobs = jobs.slice(indexOfFirstItem,indexOfLastItem)

// next and previos page

const nextPage = ()=>{
  if(indexOfLastItem < jobs.length){
   setCurrentPage(currentPage + 1)
  }
}

const prevPage = ()=>{
  if(currentPage >1 ){
    setCurrentPage(currentPage - 1)
  }
}


    const handleSearch = ()=>{
        const filter = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
          );
          
          setJobs(filter)
          setLoading(false)
    }

    const handleDelete = (id)=>{
      // console.log(id);
      fetch(`${BASE_URL}/jobs/delete/${id}`,{
        method:"DELETE"
       
       }).then(res=>res.json()).then((data)=>{
         
        if(data.acknowledged===true){
          toast.error("Job Deleted Successfully")
        
        }
      })

    }
   
    console.log(searchText);
  return (
    <>
    <Header/>
    <div className={styles.myJobs}>
    <div className={styles.myJobs_div}>
        <h1>All Jobs</h1>
        <div  className={styles.myJobs_search}>
            <input onChange={e=>setSearchText(e.target.value)} placeholder='Search jobs by title' name='search' type="search" />
            <button onClick={handleSearch}> <i className="fas fa-magnifying-glass"></i></button>
        </div>
    </div>
    {/* table */}
    <section className={styles.myJobs_table}>
      
      <div className={styles.myJobs_table_div}>
      <div className={styles.myJobs_table_header}>
        <h5>All Jobs</h5>
        <div>
         <Link to={'/post-job'}> <button>Post A Job</button></Link>
        </div>
      </div>
   <table>
   
        <thead className={styles.table_header}>
          <tr>
            <th >No.</th>
            <th>Job Title</th>
            <th>Company Name</th>
            <th>Salary</th>
            <th>Edit Job</th>
            <th>Delete</th>


          </tr>
        </thead>

        {
          loading?(<div><p>Loading....</p></div>):(<tbody className={styles.table_body}>
            {
              currentJobs.map((job,index)=>(
                <tr key={index}>
              <th>{index + 1}</th>
              <td>{job.jobTitle}</td>
              <td>{job.companyName}</td>
              <td>{job.minPrice}k - {job.maxPrice}k</td>
              <td> <Link to={`/update-job/${job?._id}`}><i className="fas fa-edit"></i></Link></td>
              <td> <button onClick={()=>handleDelete(job._id)}><i className="fas fa-trash"></i></button></td>
  
            </tr>
              ))
            }
           
            
          </tbody>)
        }
        
   </table>
</div>
     {/* pagination */}
     <div className={styles.pagination}>
        {currentPage>1 &&  <button onClick={prevPage} >
            Previous
          </button>
         }
          {indexOfLastItem <jobs.length && <button onClick={nextPage}>
            Next
          </button>}
        </div>

    </section>
    </div>
    </>
  )
}

export default MyJobs