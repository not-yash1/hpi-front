import React, { useState } from 'react'
import './Blogs.css'
import { MdArrowOutward } from "react-icons/md";

const Blogs = () => {

  const [news, setNews] = useState([
    {
      title: "Hira Panna reports Q3 profit jump on sustained housing demand",
      date: "12 April 2024"
    },
    {
      title: "Testing text 2",
      date: "2 May 2024"
    },
    {
      title: "Testing text 3",
      date: "29 June 2024"
    },
  ])

  const [ind, setInd] = useState(0);

  const handleClick = (val) => {
    setInd(val);
  }

  return (
    <div className='blog-container'>
        <div className="blog-left">
            <div className="left-header">
              <h2>STAY AHEAD OF THE CURVE</h2>
              <h1>News & Blogs</h1>
            </div>
            <div className="left-body">
                <div className="body-content" onClick={() => handleClick(0)}>
                  <h1>01</h1>
                  <h2>
                    Hira Panna Infra group set to develop the tallest tower of Bihar <MdArrowOutward style={{
                      marginBottom: '-5px',
                      marginLeft: '4px',
                      background: 'none'
                    }} />
                  </h2>
                </div>
                <div className="body-content" onClick={() => handleClick(1)}>
                  <h1>02</h1>
                  <h2>
                    Hira Panna Infra group set to develop the tallest tower of Bihar <MdArrowOutward style={{
                      marginBottom: '-5px',
                      marginLeft: '4px',
                      background: 'none'
                    }} />
                  </h2>
                </div>
                <div className="body-content body-con3" onClick={() => handleClick(2)}>
                  <h1>03</h1>
                  <h2>
                    Hira Panna Infra group set to develop the tallest tower of Bihar <MdArrowOutward style={{
                      marginBottom: '-5px',
                      marginLeft: '4px',
                      background: 'none'
                    }} />
                  </h2>
                </div>
            </div>
        </div>
        <div className="blog-right">
          <div className="right-img"></div>
          <div className="right-desc">
            <h3>
              {news[ind].title}
            </h3>
            <h6>
              {news[ind].date}
            </h6>
          </div>
        </div>
      
    </div>
  )
}

export default Blogs
