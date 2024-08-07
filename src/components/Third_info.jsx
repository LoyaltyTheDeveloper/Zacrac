import React from 'react';
import img15 from '../assets/Frame 744.png';

function Third_info() {
  return (
    <div className="mt-8 w-auto h-auto lg:flex sm:w-full">
      <div className="w-auto mr-100 lg:mt-96 lg:ml-48">
        <h1 className="hidden lg:w-full lg:hidden">Learn, grow, and thrive</h1>
        <p className="text-4xl lg:w-4/5">Our students learn, grow, and thrive with the skills they learn from us. Most importantly, they are leaders who yield powerful influence on the organizations and communities they serve.</p>
      </div>
      <div className="lg:mr-60 lg:w-4/5 lg:h-4/5">
        <img src={img15} className="sm:w-full h-full md:w-100 h-100"/>
      </div>
    </div>
  )
}

export default Third_info
