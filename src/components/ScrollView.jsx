import React from 'react';
import img4 from '../assets/image21.png';
import img5 from '../assets/image 22.png';
import img6 from '../assets/image 26.png';
import img7 from '../assets/image 27.png';
import img8 from '../assets/image 30.png';
import img9 from '../assets/image 23.png';
import img10 from '../assets/image 25.png';
import img11 from '../assets/image 29.png';
import img12 from '../assets/image 28.png';

function ScrollView() {
  return (
    <div className="scroll sm:max-w-full overflow-hidden">
    <div className="scroll_images">
      <div className="scroll_image">
        <img src={img4}/>
      </div>
      <div className="scroll_image">
        <img src={img5}/>
      </div>
      <div className="scroll_image">
        <img src={img6}/>
      </div>
      <div className="scroll_image">
        <img src={img7}/>
      </div>
      <div className="scroll_image">
        <img src={img8}/>
      </div>
      <div className="scroll_image">
        <img src={img9}/>
      </div>
      <div className="scroll_image">
        <img src={img10}/>
      </div>
      <div className="scroll_image">
        <img src={img11}/>
      </div>
      <div className="scroll_image">
        <img src={img12}/>
      </div>
    </div>
    </div>
  )
}

export default ScrollView
