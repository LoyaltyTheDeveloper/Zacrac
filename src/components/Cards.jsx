import React from 'react';
import card_img1 from '../assets/card_img1.png';
import card_img2 from '../assets/card_img2.png'
import card_img3 from '../assets/card_img3.png'
import card_img4 from '../assets/card_img4.png'
import { FaCheck } from "react-icons/fa";


function Cards() {
  return (
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










    //   <div>
//   <div style={{ width: '18rem' }}>
//    <img orientation="top"/>
//   <div>
//     <h1>Card title</h1>
//     <p>
//       Some quick example text to build on the card title and make up the bulk of the card's content.
//     </p>
//     <button color="primary" href="#">Go somewhere</button>
//   </div>
// </div>
//     </div>
  )
}

export default Cards
