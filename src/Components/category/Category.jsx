import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './Category.css'
export const Category = () => {
  return (
    <div className='category'>
        <div className='category_div'>

           Remote Jobs <span><IoIosArrowDown /></span>
           <div className="dropContent">
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
                  </div>
        </div>
        <div className='category_div'>Jobs By Title<span><IoIosArrowDown /></span>
        <div className="dropContent">
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
                  </div>
        </div>
        <div className='category_div'>Jobs by Location<span><IoIosArrowDown /></span>
        <div className="dropContent">
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
                  </div></div>
        <div className='category_div'>Jobs by Role<span><IoIosArrowDown /></span>
        <div className="dropContent">
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
                  </div></div>

        <div></div>
    </div>
  )
}
