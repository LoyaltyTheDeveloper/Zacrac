import React from 'react';
import img13 from '../assets/Frame 756.png';


function First_info() {
  return (
    <div className="first_info">
      <div className="first_info_text">
        <h1 className="first_info_heading">Over 2,000 students trust Zacrac Learning</h1>
        <p>Zacrac Learning is a leading online educational platform that provides students with world class courses on data science and analytics.</p>
      </div>
      <div className="first_info_img">
        <img src={img13}/>
      </div>
    </div>
  )
}

export default First_info
