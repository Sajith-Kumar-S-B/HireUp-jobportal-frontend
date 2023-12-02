import React from 'react'
import styles from './HomeBlog.module.css'
import {Background, Parallax} from 'react-parallax'
import homeImage3 from '../../Assets/homeimage3.webp'
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
8 million responsive and startup-ready candidates, with all the information you need to vet them
    
</p>
<p>
Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free
    
</p>
<p>
A free applicant tracking system, or free integration with any ATS you may already use
    
</p>
<p>
    Connect directly with founders at top startups - no third party recruiters allowed
    
</p>
<div>
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