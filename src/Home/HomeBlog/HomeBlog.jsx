import React from 'react'
import styles from './HomeBlog.module.css'
import {Background, Parallax} from 'react-parallax'
import homeImage3 from '../../Assets/homeimage2.webp'
import uniqueImg from '../../Assets/Unique Candidate.svg'
import clickImg from '../../Assets/Click.svg'
import connectImg from '../../Assets/Connect.svg'

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
      <span><img src={uniqueImg} alt="" /></span>  <h6>Unique jobs at startups and tech companies you can't find anywhere else</h6>
        
    </p>
    <p>
    <span><img src={clickImg} alt="" /></span>   <h6>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</h6>
        
    </p>
    <p>
    <span><img src={uniqueImg} alt="" /></span>  <h6>Everything you need to know to job search - including seeing salary and stock options upfront when looking</h6>
        
    </p>
    <p>
    <span><img src={connectImg} alt="" /></span>  <h6> Connect directly with founders at top startups - no third party recruiters allowed</h6>
        
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