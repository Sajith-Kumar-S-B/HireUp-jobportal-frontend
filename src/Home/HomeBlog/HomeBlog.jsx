import React from 'react'
import styles from './HomeBlog.module.css'
import {Background, Parallax} from 'react-parallax'
import homeImage3 from '../../Assets/homeimage2.webp'
function HomeBlog() {
  return (
   <div className={styles.homeBlog} >
        <div className={styles.homeBlog_divOne}>
             
      
            <Parallax className={styles.parallax}  strength={500}  >
              <Background className={styles.parallax_bg}>
                <img  src={homeImage3} alt="" />
                </Background> 
            
            </Parallax>

            <div className={styles.homeBlog_content}>
           <p>  GOT TALENT?</p>
    <h3>
        Why job seekers love us
        
    </h3>
    <p>
        Unique jobs at startups and tech companies you can't find anywhere else
        
    </p>
    <p>
        Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.
        
    </p>
    <p>
        Everything you need to know to job search - including seeing salary and stock options upfront when looking
        
    </p>
    <p>
        Connect directly with founders at top startups - no third party recruiters allowed
        
    </p>
    <div>
     <button>Learn more</button>
      <button>Sign up now</button>
    </div>
             </div>
    
          </div>
          
          
   </div>
  )
}

export default HomeBlog