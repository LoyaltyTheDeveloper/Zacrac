import React, { useState} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "../website.css";
import img1 from "../assets/Logo.png";



function Navbar() {
  const [active, setActive] = useState("nav_menu");
    
    const [isShown, setIsShown] = useState(false);
    const [toggle, setToggle] = useState(false);

  return (<>
    <nav className="nav" >                           
      <img src={img1} alt=""/>
      <ul className={active}>
        <li className="nav_item" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}><a href="#" className="nav_link">Class Format</a>
        { isShown && (
        <div className="hover">Yoooooooooooooo</div>
      )}
        </li>
        <li className="nav_item"><a href="#" className="nav_link">Roadmaps</a></li>
        <li className="nav_item"><a href="#" className="nav_link">Pricing</a></li>
        <li className="nav_item"><a href="#" className="nav_link">Enterprise</a></li>
        <li className="nav_item"><a href="#" className="link">Continue My Courses</a></li>
      </ul>
      <div>
        <button className="btn">Start Learning</button>
      </div>
      <div onClick={() => setToggle(!toggle)} className="nav_toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    {
      toggle && (<div className="sidebar">Hi</div>)
    }
    
    </>
    
  );
}

export default Navbar

