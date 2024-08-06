import React from 'react';
import image1 from '../assets/image 39.png';
import image2 from '../assets/image 40.png';
import image3 from '../assets/image 42.png';
import image4 from '../assets/image 50.png';


function Instructors() {
  return (
    <div className="instructors_section">
      <div className="instructors_header">
        <h1 className="instructors_heading">Learn from the Best Minds in the field</h1>
      </div>
      <div className="instructors_images">
        <div className="instructors_image" id="instructors_image">
                <img src={image1}/>
                <div><p>Oluwakemi Folake Balogun</p></div>
                <div className="instructor_second"><p>Data Science Instructor @ Zacrac</p></div>
        </div>
        <div className="instructors_image" id="instructors_image">
                <img src={image2}/>
                <div><p>Ibrahim Mukaila Adetona</p></div>
                <div className="instructor_second"><p>Data Science Instructor @ Zacrac</p></div>
        </div>
        <div className="instructors_image" id="instructors_image">
                <img src={image3}/>
                <div><p>Oni oluwasegun Yemi</p></div>
                <div className="instructor_second"><p>Chief Learning Officer @ Zacrac</p></div>
        </div>
        <div className="instructors_image" id="instructors_image">
                <img src={image4}/>
                <div><p>Emmanuel Taiwo Adewuyi</p></div>
                <div className="instructor_second"><p>Data Science Instructor @ Zacrac</p></div>
        </div>
      </div>
      <div className="intructors_end">
      <div className="instructors_link">
        <a href="#">Become an Instructor</a>
      </div>
      <div className="instructors_button">
        <button>See More Instructors</button>
      </div>
      </div>
    </div>

  )
}

export default Instructors
