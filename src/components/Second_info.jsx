import React from 'react';
import img14 from '../assets/Frame 755.png';

function Second_info() {
  return (
    <div className="mt-8 w-auto h-auto lg:flex sm:w-full">
     <div className="">
        <img src={img14} className="sm:w-full h-full md:w-100 h-100"/>
      </div>
      <div className="w-auto mr-100 lg:mt-96 lg:ml-48">
        <h1 className="hidden lg:w-full lg:hidden">Brightest minds in the field</h1>
        <p className="text-4xl lg:w-4/5">We pride ourselves on bringing together the brightest minds in the field students the competitive edge they need to improve their lives and make a long lasting impact in the workplace.</p>
      </div>
    </div>
  )
}

export default Second_info
