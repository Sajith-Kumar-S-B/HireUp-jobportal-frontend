import React from "react";
import styles from "./HomeContent.module.css";
import homeImage from '../../Assets/6513e0f9e79ed9e9ea2dc103_Hero Home C.webp'
function HomeContent() {
  return (
    <>
      <div className={styles.homeContent}>
        <div className={styles.homeSearch}>
            <div className={styles.home_details}>
              <input placeholder="Job title, company or industry" type="text" />
            </div>
            <div className={styles.home_details}>
              <input placeholder="City,State or zip code" type="text" />
            </div>
            <div className={styles.home_search}>
            <i class="fas fa-magnifying-glass"></i>
            </div>
        </div>
        <div className={styles.homeText}>
          <h1>Experience the new way to work</h1>
          <p>See jobs we've picked just for you</p>
          <div className={styles.homeButton}>
            <button>Find your next hire</button>
            <button>Find your next Job</button>

          </div>
        </div>
        <div className={styles.homeImage}>
            <img  src={homeImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default HomeContent;
