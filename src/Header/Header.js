import React from 'react';
import { Link } from 'react-router-dom';
import {FaTimes,FaBars} from 'react-icons/fa'


const Header = () => {
  return (
    <div className='Header-Container'>
        <div className='header-title'>
            <h1>
                <span className='heading1'>Storm</span>
                <span className='heading2'>Breaker</span>
            </h1>
        </div>
        <div className='header-details'>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/aboutUs'}>AboutUS</Link></li>
                <li><Link to={'/contactUs'}>ContactUS</Link></li>
                <li><Link to={'/community'}>Community</Link></li>
                <li><Link to={'/news'}>News</Link></li>
            </ul>
        </div>

        <div className="icon">
            <FaBars/>
        </div>

        <div className="mobile-view">
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/aboutUs'}>AboutUS</Link></li>
                <li><Link to={'/contactUs'}>ContactUS</Link></li>
                <li><Link to={'/community'}>Community</Link></li>
                <li><Link to={'/news'}>News</Link></li>
            </ul>

            <button><FaTimes/></button>
        </div>
    </div>
  )
}

export default Header