import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import HomeContent from '../Home/Homecontent/HomeContent'
import HomeSection from '../Home/Homesection/HomeSection'
import HomeBlog from '../Home/HomeBlog/HomeBlog'
import HomeBlogII from '../Home/HomeBlog/HomeBlogII'
import Marquees from '../Home/Marquee/Marquee'
import HomeSectiontwo from '../Home/Homesection/HomeSectiontwo'

function Home() {
  return (
    <div>
<Header/>
<HomeContent/>
<HomeSection/>
<Marquees/>

<HomeBlog/>
<HomeBlogII/>
<HomeSectiontwo/>
<Footer/>
    </div>
  )
}

export default Home