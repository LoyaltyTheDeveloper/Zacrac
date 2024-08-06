import React from 'react';
import employees_card1 from '../assets/Frame 530.png'
import employees_card2 from '../assets/image 47.png'


function Employees() {
  return (
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
  )
}

export default Employees
