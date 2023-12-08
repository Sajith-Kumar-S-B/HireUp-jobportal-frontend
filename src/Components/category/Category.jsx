import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './Category.css'
import { Link } from 'react-router-dom';
export const Category = () => {
  return (
    <div className='category'>
        <div className='category_div'>

           Remote Jobs <span><IoIosArrowDown /></span>
           <div className="dropContent">
              <Link to={'/user/signup'}>
                    <p>
                        Software Engineer jobs
                    </p>
                    <p>
                        Software Engineer jobs
                    </p><p>
                        Software Engineer jobs
                    </p><p>
                        Software Engineer jobs
                    </p>
              </Link>
                  </div>
        </div>
        <div className='category_div'>Jobs By Title<span><IoIosArrowDown /></span>
        <div className="dropContent">
               <Link to={'/user/signup'}>
                    <p>
                        Software Engineer jobs
                    </p>
                    <p>
                        Software Engineer jobs
                    </p><p>
                        Software Engineer jobs
                    </p><p>
                        Software Engineer jobs
                    </p>
               </Link>
                  </div>
        </div>
        <div className='category_div'>Jobs by Location<span><IoIosArrowDown /></span>
        <div className="dropContent">
              <Link to={'/user/signup'}>
                    <p>
                       London
                    </p>
                    <p>
                       India
                    </p><p>
                    United States
                    </p><p>
                       Australia
                    </p>
              </Link>
                  </div></div>
        <div className='category_div'>Jobs by Role<span><IoIosArrowDown /></span>
        <div className="dropContent">
              <Link to={'/user/signup'}>
                    <p>
                        Software Engineer jobs
                    </p>
                    <p>
                        Software Engineer jobs
                    </p><p>
                        Software Engineer jobs
                    </p><p>
                        Software Engineer jobs
                    </p>
              </Link>
                  </div></div>

        <div></div>
    </div>
  )
}
