import React from 'react'
import styles from "./HomeSection.module.css";
import reviewImg from '../../Assets/Professional Woman.webp'
import reviewImg1 from '../../Assets/comment_3.png'

import reviewImg2 from '../../Assets/Male Portrait.webp'
import reviewImg3 from '../../Assets/Professional Female .webp'


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation ,EffectFade} from "swiper/modules";




function HomeSectiontwo() {
  

  return (
    <div className={styles.homeSectiontwo}>
    <div className={styles.homeSection_details} >
        
        <h2>INDIA’S #1 JOB PLATFORM</h2>
        <h1>HireUp Job Portal : Your job search ends here</h1>
        <p>Discover 50 lakh+ career opportunities</p>
    </div>
    
          <div className={styles.homeSectiontwo_div}>
          <div className={styles.review}>
            <h3>Hear it from our Users</h3>
          
            <Swiper  style={{
  "--swiper-pagination-color": "#151f63",
  "--swiper-pagination-bullet-inactive-color": "#fff",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "8px",
 
}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
         
        }}
        navigation={false}
       fadeEffect={{ crossFade: true }}
       effect='fade'
        modules={[Autoplay, Pagination, Navigation,EffectFade]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiper_slide} > 
        <div className={styles.review_bar}>
                  <div className={styles.review_img}>
                    <img src={reviewImg} alt="" />
                  </div>
                  <div className={styles.review_text} >
                  
    <p>I love HireUp. I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.</p>
    <h6>-Robert Angel</h6>
                  </div>
                </div> 
                </SwiperSlide>
        
        <SwiperSlide  className={styles.swiper_slide}><div className={styles.review_bar}>
                  <div className={styles.review_img}>
                    <img src={reviewImg1} alt="" />
                  </div>
                  <div className={styles.review_text} >
                  
                  <p>I can't imagine my day to day without this platform. Life would be a lot more difficult.</p>
    <h6>-Robert Angel</h6>
                  </div>
                </div> </SwiperSlide>
        <SwiperSlide  className={styles.swiper_slide}><div className={styles.review_bar}>
                  <div className={styles.review_img}>
                    <img src={reviewImg2} alt="" />
                  </div>
                  <div className={styles.review_text} >
                  
                  <p>I got my tech job on HireUp 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO.</p>
    <h6>-Robert Angel</h6>
                  </div>
                </div> </SwiperSlide>
        <SwiperSlide  className={styles.swiper_slide}><div className={styles.review_bar}>
                  <div className={styles.review_img}>
                    <img src={reviewImg3} alt="" />
                  </div>
                  <div className={styles.review_text} >
                  
                  <p>I love HireUp. I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.</p>
    <h6>-Robert Angel</h6>
                  </div>
                </div> </SwiperSlide>
        <SwiperSlide  className={styles.swiper_slide}><div className={styles.review_bar}>
                  <div className={styles.review_img}>
                    <img src={reviewImg} alt="" />
                  </div>
                  <div className={styles.review_text} >
                  <p>I love HireUp. I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.</p>
    <h6>-Robert Angel</h6>
                  </div>
                </div> </SwiperSlide>
        <SwiperSlide  className={styles.swiper_slide}><div className={styles.review_bar}>
                  <div className={styles.review_img}>
                    <img src={reviewImg} alt="" />
                  </div>
                  <div className={styles.review_text} >
                  <p>I love HireUp. I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.</p>
    <h6>-Robert Angel</h6>
                  </div>
                </div> </SwiperSlide>
        <SwiperSlide  className={styles.swiper_slide}><div className={styles.review_bar}>
                  <div className={styles.review_img}>
                    <img src={reviewImg} alt="" />
                  </div>
                  <div className={styles.review_text} >
                  <p>I love HireUp. I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.</p>
    <h6>-Robert Angel</h6>
                  </div>
                </div> </SwiperSlide>
        <SwiperSlide  className={styles.swiper_slide}><div className={styles.review_bar}>
                  <div className={styles.review_img}>
                    <img src={reviewImg} alt="" />
                  </div>
                  <div className={styles.review_text} >
                  
                  <p>I love HireUp. I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.</p>
    <h6>-Robert Angel</h6>
                  </div>
                </div> </SwiperSlide>
      </Swiper>
            
               
               
                
             </div>
       
          
        
           
          </div>
    
         
        </div>
    
  )
}

export default HomeSectiontwo