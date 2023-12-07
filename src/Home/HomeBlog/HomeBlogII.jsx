import React from 'react'
import styles from './HomeBlog.module.css'
import {Background, Parallax} from 'react-parallax'
import homeImage3 from '../../Assets/homeimage3.webp'
import teamImage3 from '../../Assets/Team.svg'
import templateImage3 from '../../Assets/Template.svg'
import settingsImage3 from '../../Assets/Settings.svg'
import sendImage3 from '../../Assets/Send.svg'





function HomeBlogII() {
  return (
    <div className={styles.homeBlog2} >
    <div className={styles.homeBlog_divOne}>
         
    <div className={styles.homeBlog_content}>
       <p>  NEED TALENT?</p>
<h3>
Why recruiters love us
    
</h3>
<p>
  <span><img src={teamImage3} alt="" /></span>
<h6>8 million responsive and startup-ready candidates, with all the information you need to vet them</h6>
    
</p>
<p>
  <span><img src={templateImage3} alt="" /></span>
<h6>Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free</h6>
    
</p>
<p>
<span><img src={sendImage3} alt="" /></span>
<h6>Apply for the jobs of your choice with atmost ease</h6>
    
</p>
<p>
<span><img src={settingsImage3} alt="" /></span>
    <h6>Filter Jobs bt title, location,company based on your interest and preference</h6>
    
</p>
<div >
 <button>   Learn more</button>
  <button>  Sign up now</button>
</div>
         </div>
        <Parallax className={styles.parallax}  strength={500}  >
          <Background className={styles.parallax_bg}>
            <img  src={homeImage3} alt="" />
            </Background> 
        
        </Parallax>

       

      </div>
      
      
</div>
  )
}

export default HomeBlogII