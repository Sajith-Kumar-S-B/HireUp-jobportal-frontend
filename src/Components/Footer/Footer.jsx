import React from 'react'
import styles from './Footer.module.css'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import interactImg from '../../Assets/interact-hero.webp'

function Footer() {
  return (
    <>

<div  id='footer' className={styles.footer}>

  <div className={styles.contact}>

    <div  className={styles.contact_form}>
   


           <div className={styles.contact_form_details}>   
           <h3 className={styles.footer_heading}>Subscribe to our Newsletter</h3> 
       
         <div className={styles.contact_details_div}>
             <label htmlFor='subscribe'>
           
  
                  Email*
                  </label>
               <input type='text'  id='subscribe'  />
         </div>
         <div className={styles.contact_details_div}>
             
               <textarea placeholder=' Enter your message' type='text'  id='subscribe'  />
         </div>
         <button>Submit</button>
           </div>

    </div>
    <div className={styles.contact_image} >
   <img style={{width:'100%'}} src={interactImg} alt="contact" />
    </div>
  </div>
      <div  className={styles.footer_content}>
        <div  className={styles.footer_head}>
           <h4 ><Link to={'/'} style={{textDecoration:'none',color:'white',fontWeight:'bold'}}><MDBIcon className='me-2' fas icon="blog"  />
          
      HireFound</Link></h4>
      <p>Find your hire</p>
        </div>
        <div  className={styles.footer_para}>
          
            <div className={styles.footer_form}>
           <h5> For Candidates</h5>
<h6>Overview</h6>
<h6>Startup Jobs</h6>
<h6>Web3 Jobs</h6>
<h6>Featured</h6>
<h6>Tech Startups</h6>
<h6>Remote</h6>
            </div>
            
            
         
        </div>
        <div  className={styles.footer_para}>
          
          <div className={styles.footer_form}>
         <h5> For Candidates</h5>
<h6>Overview</h6>
<h6>Startup Jobs</h6>
<h6>Web3 Jobs</h6>
<h6>Featured</h6>
<h6>Tech Startups</h6>
<h6>Remote</h6>
          </div>
          
          
       
      </div>
        <div  className={styles.footer_contact}>
        <div>
          <h5>Company</h5>
  <h6>About</h6>
  <h6>Help</h6>
  <h6>Terms of Service</h6>
  <h6>Privacy & Cookies</h6>
        </div>
      
<div className={styles.footer_icons}>
              <Link  to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}><MDBIcon fab icon="youtube" /></Link>
      <Link  to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><MDBIcon fab icon="facebook-f" /></Link>
      <Link  to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'white'}}><MDBIcon fas icon="envelope" /></Link>
        <Link  to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></Link>
              </div>
        </div>
      </div>
      <div  className={styles.footer_base}>
        <p>© 2023 by Sajith Kumar. Powered Blog App</p>
      </div>

     
    </div>
    </>
  )
}

export default Footer