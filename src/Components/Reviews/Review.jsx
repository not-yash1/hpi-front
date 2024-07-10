import React, { useState } from 'react'
import './Review.css'
// import bod1 from '../../images/bod1.png'
// import bod2 from '../../images/bod2.png'
import bod11 from '../../images/bod11.png'
import comma from '../../images/comma.svg'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Review = () => {

    const [reviews, setReviews] = useState([
        {
          name: "Sujal Keshri",
          image: bod11,
          review: "As a director of real estate, I am incredibly proud of the transformative experiences we create for our clients. Our commitment to excellence, integrity and innovation sets us apart in the industry. We go beyond transactions, we build relationships and dreams. It's not just about properties; it's about crafting legacies and shaping futures.",
          designation: "Director, Hira Panna Infra LLP"
        },
        {
          name: "Sharad Keshri2",
          // image: bod2,
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          review: "As a director of real estate, I am incredibly proud of the transformative experiences we create for our clients. Our commitment to excellence, integrity and innovation sets us apart in the industry.",
          designation: "Director, Hira Panna Infra LLP"
        },
        {
          name: "Sharad Keshri3",
          // image: bod1,
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          review: "As a director of real estate, I am incredibly proud of the transformative experiences we create for our clients. Our commitment to excellence, integrity and innovation sets us apart in the industry. We go beyond transactions, we build relationships and dreams. It's not just about properties; it's about crafting legacies and shaping futures.",
          designation: "Director, Hira Panna Infra LLP"
        },
        {
          name: "Sharad Keshri4",
          // image: bod2,
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          review: "As a director of real estate, I am incredibly proud of the transformative experiences we create for our clients. Our commitment to excellence, integrity and innovation sets us apart in the industry. We go beyond transactions, we build relationships and dreams.",
          designation: "Director, Hira Panna Infra LLP"
        },
    ])

    const[val, setVal] = useState(reviews[0]);

    const[ind, setInd] = useState(0);
    const [isLeft, setIsLeft] = useState(false);
    const [isRight, setIsRight] = useState(true);

    const handleLeftClick = () => {
        if(ind === 1){
          setIsLeft(false);
        }
        setIsRight(true)
        setVal((reviews[ind-1]))
        setInd(ind - 1);
      }
    
      const handleRightClick = () => {
        if(ind === reviews.length-2){
          setIsRight(false)
        }
        setIsLeft(true);
        setVal((reviews[ind+1]))
        setInd(ind+1);
      }

  return (
    <div className='review-contain'>
        <div className="review-box">
            <div className="left btns">
                <button disabled={!isLeft} className={`left-arrow ${isLeft ? "" : "disable"}`} onClick={handleLeftClick}><FaAngleLeft /></button>
            </div>
            <div className="img">
                <img src={val.image} alt={val.name} />
            </div>
            <div className="cont">
                <img src={comma} alt="comma" />
                <p>{val.review}</p>
                <div className="user">
                    <h3>{val.name}</h3>
                    <h4>{val.designation}</h4>
                </div>
            </div>
            <div className="right btns">
            <button disabled={!isRight} className={`right-arrow ${isRight ? "" : "disable"}`} onClick={handleRightClick}><FaAngleRight /></button>
            </div>
        </div>
      
    </div>
  )
}

export default Review
