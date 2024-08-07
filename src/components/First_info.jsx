import React from 'react';
import img13 from '../assets/Frame 756.png';


function First_info() {
  return (
    <div className="mt-8 w-auto h-auto lg:flex sm:w-full">
      <div className="w-auto mr-100 lg:mt-96 lg:ml-48">
        <h1 className="hidden lg:w-full lg:hidden">Over 2,000 students trust Zacrac Learning</h1>
        <p className="text-4xl lg:w-4/5">Zacrac Learning is a leading online educational platform that provides students with world class courses on data science and analytics.</p>
      </div>
      <div className="lg:mr-60 lg:w-4/5 lg:h-4/5">
        <img src={img13} className="sm:w-full h-full md:w-100 h-100"/>
      </div>
    </div>
  )
}

export default First_info
