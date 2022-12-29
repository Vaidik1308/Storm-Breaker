import React from 'react';
import { Link } from 'react-router-dom';
import {FaTimes,FaBars} from 'react-icons/fa';
import { useState } from 'react';


const Header = () => {
    const [view,setView] = useState(false)
    const sidebar = () => {
        console.log("mobile_view");
        setView(!view)
        console.log(view);
    }
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
                <li><Link to={'/news'}>Devices</Link></li>
                <li><Link to={'/aboutUs'}>AboutUS</Link></li>
                <li><Link to={'/contactUs'}>ContactUS</Link></li>
                <li><Link to={'/community'}>Community</Link></li>
            </ul>
        </div>

        <div className="icon">
            <button 
                style={view ? {display:"hidden"} : {display:"inline"}}
                type='button' 
                onClick={() => sidebar() }
            >
                <FaBars/>
            </button>
        </div>

        <div style={view ? {transform: "translateX(0px)",transition:"transform 0.2s"} : {transform: "translateX(250px)",transition:"transform 0.2s"}} className="mobile-view">
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/news'}>Devices</Link></li>
                <li><Link to={'/aboutUs'}>AboutUS</Link></li>
                <li><Link to={'/contactUs'}>ContactUS</Link></li>
                <li><Link to={'/community'}>Community</Link></li>
            </ul>

            <button
                style={!view ? {display:"none"} : {display:"inline"}}
                type='button' onClick={() => {sidebar()}}><FaTimes/></button>
        </div>
    </div>
  )
}

export default Header