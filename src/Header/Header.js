import React from 'react';
import { Link } from 'react-router-dom';


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
                <li><a><Link to={'/'}>Home</Link></a></li>
                <li><a><Link to={'/aboutUs'}>AboutUS</Link></a></li>
                <li><a><Link to={'/contactUs'}>ContactUS</Link></a></li>
                <li><a><Link to={'/community'}>Community</Link></a></li>
                <li><a><Link to={'/news'}>News</Link></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header