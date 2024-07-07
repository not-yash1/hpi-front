import React, { useEffect, useState } from 'react'
import './Reviews.css'
import { Avatar } from '@mui/material'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Reviews = () => {

  const [reviews, setReviews] = useState([
    {
      name: "Sharad Keshri1",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      review: "As a director of real estate, I am incredibly proud of the transformative experiences we create for our clients.",
      designation: "Director, Hira Panna Infra LLP"
    },
    {
      name: "Sharad Keshri2",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      review: "As a director of real estate, I am incredibly proud of the transformative experiences we create for our clients. Our commitment to excellence, integrity and innovation sets us apart in the industry.",
      designation: "Director, Hira Panna Infra LLP"
    },
    {
      name: "Sharad Keshri3",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      review: "As a director of real estate, I am incredibly proud of the transformative experiences we create for our clients. Our commitment to excellence, integrity and innovation sets us apart in the industry. We go beyond transactions, we build relationships and dreams. It's not just about properties; it's about crafting legacies and shaping futures.",
      designation: "Director, Hira Panna Infra LLP"
    },
    {
      name: "Sharad Keshri4",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      review: "As a director of real estate, I am incredibly proud of the transformative experiences we create for our clients. Our commitment to excellence, integrity and innovation sets us apart in the industry. We go beyond transactions, we build relationships and dreams.",
      designation: "Director, Hira Panna Infra LLP"
    },
  ])

  const[val, setVal] = useState(reviews[0]);

  const [ind, setInd] = useState(0);
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(true);

  const handleLeftClick = () => {
    if(ind == 1){
      setIsLeft(false);
    }
    setIsRight(true)
    setVal((reviews[ind-1]))
    setInd(ind - 1);
  }

  const handleRightClick = () => {
    if(ind == reviews.length-2){
      setIsRight(false)
    }
    setIsLeft(true);
    setVal((reviews[ind+1]))
    setInd(ind+1);
  }

  return (
    <div className='review-container'>
      <div className="left-contain">
        <div className="left-header">
            <h1>World of Vision & Possibility</h1>
            <h3>Message from the Board of Directors</h3>
        </div>
        <div className="left-btn">
            <button disabled={!isLeft} className={`left-arrow ${isLeft ? "" : "disable"}`} onClick={ handleLeftClick}><FaAngleLeft /></button>
            <button disabled={!isRight} className={`right-arrow ${isRight ? "" : "disable"}`} onClick={ handleRightClick}><FaAngleRight /></button>
        </div>
      </div>
      <div className="right-contain">
        <div className="comma">
            <h1>,,</h1>
        </div>
        <div className="desc">
            <h4>{reviews[ind].review}</h4>
        </div>
        <div className="user">
            <Avatar sx={{height: "80px", width: "80px"}} >
                <img src={reviews[ind].image} alt="user" />
            </Avatar>
            <div className="user-info">
                <h2><strong>{reviews[ind].name}</strong></h2>
                <h6>{reviews[ind].designation}</h6>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
