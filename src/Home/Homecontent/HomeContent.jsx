import React from "react";
import styles from "./HomeContent.module.css";
import homeImage from '../../Assets/6513e0f9e79ed9e9ea2dc103_Hero Home C.webp'
import homeImage2 from '../../Assets/64ecb698717bd5ecef33af69_header image-p-500.png'
import homeImage4 from '../../Assets/64edc9053d98f8a6eb8d1190_Team_2.png'
import { Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation ,EffectFade} from "swiper/modules";
import Type from "../../Components/Type";
import { useSelector } from "react-redux";

function HomeContent() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <>
      <div className={`${styles.homeContent} ${darkMode ? styles['dark'] : styles['light'] }`}>
        <div className={styles.homeSearch}>
            <div className={styles.home_details}>
              <input placeholder="Find jobs that matches you" type="text" />
            </div>
            <div className={styles.home_details}>
              <input placeholder="Search by location" type="text" />
            </div>
            <Link to={"/user/login"}>
              <div className={styles.home_search}>
              <i class="fas fa-magnifying-glass"></i>
              </div>
            </Link>
        </div>
        <div className={styles.homeText}>
        <p>See jobs we've picked just for you</p>
          <h1><Type/></h1>
        
          <div className={styles.homeButton}>
            <button><Link style={{textDecoration:'none',color:'white'}} to={"/recruit/signup"}>Find your next hire</Link></button>
            <button><Link style={{textDecoration:'none',color:'white'}} to={"/user/signup"}>Find your next Job</Link></button>

          </div>
        </div>
       
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
         <div className={styles.homeImage}>
                      <SwiperSlide className={styles.swiper_slide}> <img  src={homeImage} alt="" /></SwiperSlide>

           <SwiperSlide className={styles.swiper_slide}> <img   src={homeImage2} alt="" /></SwiperSlide>
           <SwiperSlide className={styles.swiper_slide}> 
           <div className={styles.imageBg}><img style={{padding:"2px 0px"}}  src={homeImage4} alt="" /></div>
           </SwiperSlide>

              </div>
            </Swiper>
      
      </div>
    </>
  );
}

export default HomeContent;
