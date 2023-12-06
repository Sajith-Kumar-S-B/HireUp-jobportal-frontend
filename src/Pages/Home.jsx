import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import HomeContent from '../Home/Homecontent/HomeContent'
import HomeSection from '../Home/Homesection/HomeSection'
import HomeBlog from '../Home/HomeBlog/HomeBlog'
import HomeBlogII from '../Home/HomeBlog/HomeBlogII'
import Marquees from '../Home/Marquee/Marquee'
import HomeSectiontwo from '../Home/Homesection/HomeSectiontwo'
import { Category } from '../Components/category/Category'
import styles from "./Jobs.module.css";
import { useSelector } from 'react-redux'

function Home() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`${styles.home} ${darkMode ? styles['dark'] : styles['light'] }`}>
<Header/>
<HomeContent/>
<HomeSection/>
<Marquees/>

<HomeBlog/>
<HomeBlogII/>
<HomeSectiontwo/>
<Category/>
<Footer/>
    </div>
  )
}

export default Home