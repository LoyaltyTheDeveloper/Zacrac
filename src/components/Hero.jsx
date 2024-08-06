import React from 'react';
import img2 from "../assets/Vector87.png";
import "../website.css";
import img3 from "../assets/Frame576.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Hero() {
  return (<>
    <div className="background" style={{ backgroundImage: `url(${img2})`,
    height: "auto",
    backgroundPosition:"100% 50%",
    backgroundRepeat: "no-repeat"}}>
    <div className="hero">
    <div className="hero_heading">
        <h1>70% of all jobs will require Data</h1>
        <h1>Literacy by 2030.</h1>
       <div className="hero_color"><h1>How are you <span className="hero_colors">get</span>ting <span className="hero_colors">ready</span><span>?</span></h1></div>
       <div className="hero_sub_heading">
        <div className="scroller_start">
       <h1 className="h1-scroller">We make it easy for you to learn <span className="scroller">
        <span className="color-gradient">
          Data Science
          <br></br>
          Business Analytics
          <br></br>
          Machine Learning
          <br></br>
          Artificial Intelligence
        </span>
     </span>
     </h1>
       </div>
       <h1>and secure your position in today’s workforce.</h1>
       </div>
       <div>
       <button className="btn2">Start Learning</button>
       <div className="btn_ratings">
        <div className="star_icons">
          <div className="stars">
        <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        </span>
        </div>
        <div className="ratings">4.5 (55 ratings)</div>
    </div>
    
    </div>
    
       </div>
    </div>
    <div className="hero_image">
      <img src={img3} alt=""/>
    </div>
    </div>
    <div className="hero_end">
    <div><span className="hero_end_span">Trusted by 2500+ Students</span> who are learning Data Science, AI and</div>
    <div>ML using the following tools.</div>
    </div>
    </div>
    
 </> )
}

export default Hero
