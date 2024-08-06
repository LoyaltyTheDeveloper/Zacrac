import React from 'react';
import community_image1 from '../assets/Blend Group 1.png';

function Community() {
  return (
 <div className="community_section" style={{ backgroundImage: `url(${community_image1})`}}>
   <div className="community_content">
      <div className="community_header">We’re Positioned to Help You Succeed</div>
      <div className="community_text">Join 2500+ data enthusiasts across the world learning Data Science, AI, ML with us</div>
      <div className="community_btn"><button>Join Zacrac Community</button></div>
    </div>
  </div>
  )
}

export default Community
