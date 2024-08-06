import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



function Footer() {
  return (
    <div className="footer_section">
      <div className="footer_content">
      <div className="first_section">
        <div className="first_section_header">Africa’s No. 1 Data School</div>
        <br></br>
        <div className="first_section_icons">
        <FaFacebook/>
        <FaTwitter/>
        <FaInstagram/>
        <FaYoutube/>
        </div>
        <br></br>
        <div className="footer_text">© Copyright 2022 All Rights Reserved</div>
      </div>
      <div className="second_section">
        <div className="second_section_header">Quick links</div>
        <br></br>
        <div className="footer_links">
            <p><a href="#">Blog</a></p>
            <p><a href="#">Zacrac Data Community</a></p>
            <p><a href="#">Campus Ambassador Program</a></p>
            <p><a href="#">Student Internship Program</a></p>
            <p><a href="#">Instructors</a></p>
            <p><a href="#">Careers</a></p>
            <p><a href="#">Affiliate program</a></p>
            <p><a href="#">Support</a></p>
        </div>
      </div>
      <div className="third_section">
        <div className="third_section_header">Ways to learn</div>
        <br></br>
        <div className="footer_links">
            <p><a href="#">Self-paced Courses</a></p>
            <p><a href="#">Incubator Programs</a></p>
            <p><a href="#">Cohort-Based Learning</a></p>
            <p><a href="#">Enterprise Training</a></p>
            <p><a href="#">Career-building Paths</a></p>
        </div>
      </div>
      <div className="fourth_section">
        <div className="fourth_section_header">Events</div>
        <br></br>
        <div className="footer_links">
            <p><a href="#">Data Meet Up with Zacrac</a></p>
        </div>
      </div>
      <div className="fifth_section">
        <div className="fifth_section_header">Tools</div>
        <br></br>
        <div className="footer_links">
            <p><a href="#">MS Excel</a></p>
            <p><a href="#">R</a></p>
            <p><a href="#">Power Bi</a></p>
            <p><a href="#">Python</a></p>
            <p><a href="#">SQL</a></p>
        </div>
      </div>
      <div className="sixth_section">
        <div className="sixth_section_header">Be the first to know about our exciting offers on Data Science, AI, and ML courses</div>
        <br></br>
        <div className="footer_email_input">
            <input type="text" name="email" className="email" placeholder="Type email here..."></input>
        </div>
      </div>
      </div>
      <div className="footer_ending">
      <div className="terms"><a href="#">Terms & Condition</a></div>
      <div className="privacy"><a href="#">Privacy Policies</a></div>
      </div>
    </div>
  )
}

export default Footer
