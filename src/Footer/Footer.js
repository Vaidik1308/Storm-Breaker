import React from 'react';
import {FaGithub,FaInstagram,FaLinkedin,FaFacebookSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer-container'>
        <div className='footer-title'>
            <h1>
                <span className='heading1'>Storm</span>
                <span className='heading2'>Breaker</span>
            </h1>
        </div>
        <div className="footer-info">
          <ul className='ul1'>
            <li><a href="#"><FaGithub/><span>GitHub</span></a></li>
            <li><a href="#"><FaLinkedin/><span>LinkedIn</span></a></li>
            <li><a href="#"><FaInstagram/><span>Instagram</span></a></li>
            <li><a href="#"><FaFacebookSquare/><span>FaceBook</span></a></li>
          </ul>
        
          <ul className='ul2'>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/news'}>Devices</Link></li>
              <li><Link to={'/aboutUs'}>AboutUS</Link></li>
              <li><Link to={'/contactUs'}>ContactUS</Link></li>
              <li><Link to={'/community'}>Community</Link></li>
          </ul>
    
        </div>
    </div>
  )
}

export default Footer