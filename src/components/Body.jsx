import React from 'react';
import img2 from "../assets/Vector87.png";
import "../website.css";
import img3 from "../assets/Frame576.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import img13 from '../assets/Frame 756.png';

import img14 from '../assets/Frame 755.png';

import img15 from '../assets/Frame 744.png';

import card_img1 from '../assets/card_img1.png';
import card_img2 from '../assets/card_img2.png';
import card_img3 from '../assets/card_img3.png';
import card_img4 from '../assets/card_img4.png';
import { FaCheck } from "react-icons/fa";

import image1 from '../assets/image 39.png';
import image2 from '../assets/image 40.png';
import image3 from '../assets/image 42.png';
import image4 from '../assets/image 50.png';

import employees_card1 from '../assets/Frame 530.png';
import employees_card2 from '../assets/image 47.png';

import press_image1 from "../assets/press_image1.png";
import press_image2 from "../assets/press_image2.png";


import community_image1 from '../assets/Blend Group 1.png';



function Body() {
  return (<>
    <div>
      <div className="background sm:hidden" style={{ backgroundImage: `url(${img2})`,
    height: "auto",
    width: "100%",
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
    </div>

<div className="mt-8 w-auto h-auto lg:flex sm:w-full">
<div className="w-auto mr-100 lg:mt-96 lg:ml-48">
  <h1 className="hidden lg:w-full lg:hidden">Over 2,000 students trust Zacrac Learning</h1>
  <p className="text-4xl lg:w-4/5">Zacrac Learning is a leading online educational platform that provides students with world class courses on data science and analytics.</p>
</div>
<div className="lg:mr-60 lg:w-4/5 lg:h-4/5">
  <img src={img13} className="sm:w-full h-full md:w-100 h-100"/>
</div>
</div>

<div className="mt-8 w-auto h-auto lg:flex sm:w-full">
     <div className="">
        <img src={img14} className="sm:w-full h-full md:w-100 h-100"/>
      </div>
      <div className="w-auto mr-100 lg:mt-96 lg:ml-48">
        <h1 className="hidden lg:w-full lg:hidden">Brightest minds in the field</h1>
        <p className="text-4xl lg:w-4/5">We pride ourselves on bringing together the brightest minds in the field students the competitive edge they need to improve their lives and make a long lasting impact in the workplace.</p>
      </div>
    </div>

    <div className="mt-8 w-auto h-auto lg:flex sm:w-full">
      <div className="w-auto mr-100 lg:mt-96 lg:ml-48">
        <h1 className="hidden lg:w-full lg:hidden">Learn, grow, and thrive</h1>
        <p className="text-4xl lg:w-4/5">Our students learn, grow, and thrive with the skills they learn from us. Most importantly, they are leaders who yield powerful influence on the organizations and communities they serve.</p>
      </div>
      <div className="lg:mr-60 lg:w-4/5 lg:h-4/5">
        <img src={img15} className="sm:w-full h-full md:w-100 h-100"/>
      </div>
    </div>

    <div className="cards_section sm:w-full">
        <div className="cards_header">
            <h1 className="cards_header_heading">Rethink The Way You Learn</h1>
           <div className="cards_header_text"><p>The choice is yours. Choose from recorded courses or live instructor-led classes.</p></div>
        </div>
        <div className="cards">
            <div className="card">
              <div className="card_img">
              <img src={card_img1} style={{ 
              width: "300px",
              height: "200px",
              marginLeft: "0px",
              marginTop: "0px",
              borderRadius: "20px 20px 0px 0px"
              }}/>
            </div>
            <div className="list_container">
              <ul className="lists">
                <li className="list">
                <div className="icon_div"><FaCheck className="check_icon"/><p className="card_text">Recorded courses</p></div>
                <div className="icon_div"><FaCheck className="check_icon"/><p className="card_text">Access to 100+ hours of content</p></div>
                <div className="icon_div"><FaCheck className="check_icon"/><p className="card_text">Certification</p></div>
                </li>
                <div className="card_button">
                  <button className="card_buttons">Suscribe Now</button>
                </div>
              </ul>
            </div>
        </div>
        <div className="card">
              <div className="card_img">
              <img src={card_img2} style={{ 
              width: "300px",
              height: "200px",
              marginLeft: "0px",
              marginTop: "0px",
              borderRadius: "20px 20px 0px 0px"
              }}/>
            </div>
            <div className="list_container">
              <ul className="lists">
                <li className="list">
                <div className="icon_div"><FaCheck className="check_icon"/><p className="card_text">Live Instructor-led Classes</p></div>
                <div className="icon_div"><FaCheck className="check_icon"/><p className="card_text">Learn in group with other students</p></div>
                <div className="icon_div"><FaCheck className="check_icon"/><p className="card_text">Certification</p></div>
                </li>
                <div className="card_button">
                  <button className="card_buttons">Explore Courses</button>
                </div>
              </ul>
            </div>
        </div>
        <div className="card">
              <div className="card_img">
              <img src={card_img3} style={{ 
              width: "300px",
              height: "200px",
              marginLeft: "0px",
              marginTop: "0px",
              borderRadius: "20px 20px 0px 0px"
              }}/>
            </div>
            <div className="list_container">
              <ul className="lists">
                <li className="list">
                <div className="icon_div"><FaCheck className="check_icon"/><p className="card_text">1:1 coaching</p></div>
                <div className="icon_div" id="card_text"><FaCheck className="check_icon"/><p className="card_text">Co-decide what to learn with the instructor</p></div>
                <div className="icon_div"><FaCheck className="check_icon"/><p className="card_text">Flexible class time</p></div>
                </li>
                <div className="card_button">
                  <button className="card_buttons">Book a Session</button>
                </div>
              </ul>
            </div>
        </div>
        <div className="card">
              <div className="card_img">
              <img src={card_img4} style={{ 
              width: "300px",
              height: "200px",
              marginLeft: "0px",
              marginTop: "0px",
              borderRadius: "20px 20px 0px 0px"
              }}/>
            </div>
            <div className="list_container">
              <ul className="lists">
                <li className="list">
                <div className="icon_div"><FaCheck className="check_icon"/><p className="card_text">5-7 months Intensive training</p></div>
                <div className="icon_div"><FaCheck className="check_icon"/><p className="card_text">Skill-to-job program</p></div>
                <div className="icon_div"><FaCheck className="check_icon"/><p className="card_text">3 months Internship placements</p></div>
                </li>
                <div className="card_button">
                  <button className="card_buttons">Explore Courses</button>
                </div>
              </ul>
            </div>
        </div>
    </div>
    </div>

    <div className="feature_section">
    <div className="feature_header">
      <div className="feature_heading"><h1>More than a Learning Platform</h1></div>
      <div className="feature_text"><p>We prepare, empower, and support you to achieve success in your career as a Data Professional.</p></div>
      </div>
      <div className="features">
        <div className="feature">
            <div className="feature_content">
            <h1>Practice coding tutorials without leaving the platform</h1>
            <p>Run Python, R, and SQL codes without leaving our platform. You don’t need a sophisticated computer.</p>
        </div>
        </div>
        <div className="feature">
            <div className="feature_content">
            <h1>Get Noticed by Companies</h1>
            <p>We have partnerships with companies looking to hire professionals like you. Be the first to know about hiring opportunities with our partner companies.</p>
        </div>
        </div>
        <div className="feature">
            <div className="feature_content">
            <h1>Career Service</h1>
            <p>CV & portfolio review, interview prep, and professional mentorship.</p>
        </div>
        </div>
        <div className="feature">
            <div className="feature_content">
            <h1>Certification</h1>
            <p>Our certificates are globally recognized and admired by employers.</p>
        </div>
        </div>
      </div>
    </div>

    <div className="instructors_section sm:w-full">
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

    <div className="employees_section">
      <div className="employees_header">
        <div className="employees_heading">ZACRAC LEARNING FOR BUSINESS</div>
        <div className="employees_text">Join the list of global companies that trust Zacrac Learning to upskill their employees or hire data talents</div>
      </div>
      <div className="employees_cards">
        <div className="employees_card1">
        <div className="card_img">
              <img src={employees_card1} style={{ 
              width: "340px",
              height: "240px",
              marginLeft: "0px",
              marginTop: "0px",
              borderRadius: "10px 10px 0px 0px"
              }}/>
            </div>
            <div className="employees_card_text">
                <div className="employees_card_heading">Employee Training and Upskilling</div>
                  <div className="employees_card_paragraph">The Latest Courses on Data Science, AL & ML designed to Keep Your Team Ahead.</div>
            </div>
            <div className="employees_card_link">
                    <a href="#">Click to read more</a>
                  </div>
        </div>
        <div className="employees_card2">
        <div className="card_img">
              <img src={employees_card2} style={{ 
              width: "340px",
              height: "240px",
              marginLeft: "0px",
              marginTop: "0px",
              borderRadius: "10px 10px 0px 0px"
              }}/>
            </div>
            <div className="employees_card_text">
                <div className="employees_card_heading">Hire a Data Talent</div>
                  <div className="employees_card_paragraph">Hire well- trained and vetted data talents to work with your company for remote and onsite roles</div>
            </div>
            <div className="employees_card_link">
                    <a href="#">Click to read more</a>
             </div>
        </div>
      </div>
    </div>

    <div className="press_section sm:w-full overflow-hidden">
      <div className="press_header">As seen in the press</div>
      <div className="press_images">
        <img src={press_image1}/>
        <img src={press_image2}/>
      </div>
      <div className="press_text">Don’t Just Take Our Word for it. Hear it First from Our Students</div>
      <div className="press_testimonies">
        <div className="press_testimony">
        <div className="press_testimony_stars">
        <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        </span>
        </div>
        <div className="press_testimony_text">They teach me in a way that a little girl can understand it, and their teachings are sound, understanding, and carry everyone along.</div>
        <div className="press_testimony_name">Emily</div>
        <div className="press_testimony_program">Self-paced Courses</div>
        </div>
        <div className="press_testimony">
        <div className="press_testimony_stars">
        <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        </span>
        </div>
        <div className="press_testimony_text">They teach me in a way that a little girl can understand it, and their teachings are sound, understanding, and carry everyone along.</div>
        <div className="press_testimony_name">Emily</div>
        <div className="press_testimony_program">Self-paced Courses</div>
        </div>
        <div className="press_testimony">
        <div className="press_testimony_stars">
        <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        </span>
        </div>
        <div className="press_testimony_text">They teach me in a way that a little girl can understand it, and their teachings are sound, understanding, and carry everyone along.</div>
        <div className="press_testimony_name">Emily</div>
        <div className="press_testimony_program">Self-paced Courses</div>
        </div>
        <div className="press_testimony">
        <div className="press_testimony_stars">
        <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        </span>
        </div>
        <div className="press_testimony_text">They teach me in a way that a little girl can understand it, and their teachings are sound, understanding, and carry everyone along.</div>
        <div className="press_testimony_name">Emily</div>
        <div className="press_testimony_program">Self-paced Courses</div>
        </div>
        <div className="press_testimony">
        <div className="press_testimony_stars">
        <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        </span>
        </div>
        <div className="press_testimony_text">They teach me in a way that a little girl can understand it, and their teachings are sound, understanding, and carry everyone along.</div>
        <div className="press_testimony_name">Emily</div>
        <div className="press_testimony_program">Self-paced Courses</div>
        </div>
        <div className="press_testimony">
        <div className="press_testimony_stars">
        <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        </span>
        </div>
        <div className="press_testimony_text">They teach me in a way that a little girl can understand it, and their teachings are sound, understanding, and carry everyone along.</div>
        <div className="press_testimony_name">Emily</div>
        <div className="press_testimony_program">Self-paced Courses</div>
        </div>
        <div className="press_testimony">
        <div className="press_testimony_stars">
        <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        </span>
        </div>
        <div className="press_testimony_text">They teach me in a way that a little girl can understand it, and their teachings are sound, understanding, and carry everyone along.</div>
        <div className="press_testimony_name">Emily</div>
        <div className="press_testimony_program">Self-paced Courses</div>
        </div>
        <div className="press_testimony">
        <div className="press_testimony_stars">
        <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        </span>
        </div>
        <div className="press_testimony_text">They teach me in a way that a little girl can understand it, and their teachings are sound, understanding, and carry everyone along.</div>
        <div className="press_testimony_name">Emily</div>
        <div className="press_testimony_program">Self-paced Courses</div>
        </div>
        <div className="press_testimony">
        <div className="press_testimony_stars">
        <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        </span>
        </div>
        <div className="press_testimony_text">They teach me in a way that a little girl can understand it, and their teachings are sound, understanding, and carry everyone along.</div>
        <div className="press_testimony_name">Emily</div>
        <div className="press_testimony_program">Self-paced Courses</div>
        </div>
      </div>
    </div>

    <div className="community_section" style={{ backgroundImage: `url(${community_image1})`}}>
   <div className="community_content">
      <div className="community_header">We’re Positioned to Help You Succeed</div>
      <div className="community_text">Join 2500+ data enthusiasts across the world learning Data Science, AI, ML with us</div>
      <div className="community_btn"><button>Join Zacrac Community</button></div>
    </div>
  </div>
  </>)
}

export default Body
