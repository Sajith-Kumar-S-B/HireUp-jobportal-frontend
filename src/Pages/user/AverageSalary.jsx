import React, { useEffect, useState } from 'react'
import styles from '../Jobs.module.css'
import Header from '../../Components/Header/Header'
import { PageHeader } from '../../Components/jobsection/PageHeader'
import { Link } from 'react-router-dom'


function AverageSalary() {
    const [searchText,setSearchText] = useState("")
    const [salary,setSalary] = useState([])

    useEffect(()=>{
   fetch("salary.json").then(res=>res.json()).then((data)=>setSalary(data))
    },[searchText])

    const handleSalarySearch = ()=>{
        const filter = salary.filter((salary) => salary.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        );
        console.log(filter);

        setSalary(filter)
    }
  return (
    <>
    <Header/>
    <div className={styles.Salary}>

<PageHeader title={"Estimate Salary"} path={"Salary"} />
<div  className={styles.salary_search}>
            <input onChange={e=>setSearchText(e.target.value)} name='search' id='search' type="search" />
            <button onClick={handleSalarySearch}> <i className="fas fa-magnifying-glass"></i></button>
        </div>

        {/* salary card */}

        <div className={styles.salary_card_div}>
            {
                salary.map((data)=>(
                    <div key={data.id} className={styles.salary_card}>
                        <h5>{data.title}</h5>
                        <p>{data.salary}</p>
                        <div className={styles.salary_component}>
                            <Link to={'/jobs'}>{data.status}</Link>
                            <Link to={'/jobs'}>{data.skills}</Link>

                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default AverageSalary