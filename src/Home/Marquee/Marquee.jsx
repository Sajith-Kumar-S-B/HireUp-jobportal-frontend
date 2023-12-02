import React from "react";
import './Marquee.css'
import marq1 from '../../Assets/636dd759d71287cd407e62bd_Group 47.svg'
import marq2 from '../../Assets/636dd759d71287f1797e6321_Vector-4.svg'
import marq3 from '../../Assets/636dd759d71287f2017e62db_Group.svg'
import marq4 from '../../Assets/636dd759d712872b6c7e62ad_g3707.svg'
import marq5 from '../../Assets/636dd759d712873dc17e62ee_Vector-1.svg'
import marq6 from '../../Assets/636dd759d712874df97e6332_Vector-5.svg'
import marq7 from '../../Assets/636dd759d712877d277e62be_Group-1.svg'






import Marquee from "react-fast-marquee";


function Marquees() {
  return (
    <div>
      <div className="title">
        <h3>Join the 100K+ startups building <br /> their teams with us</h3>
      </div>
      <Marquee className="marquee" >
      <div className="image_wrap">  <img  src={marq1} alt="" /></div>
       <div className="image_wrap"> <img src={marq2} alt="" /></div>
        <div className="image_wrap"><img src={marq3} alt="" /></div>
       <div className="image_wrap"> <img src={marq4} alt="" /></div>
      <div className="image_wrap">  <img src={marq5} alt="" /></div>
      <div className="image_wrap">  <img src={marq6} alt="" /></div>
      <div className="image_wrap">  <img src={marq7} alt="" /></div>

       
      </Marquee>
    </div>
  );
}

export default Marquees;
