import React from 'react';
import {Fade,Transform} from 'react-animation-components'

const AboutUs = () => {
  return (
    <div className='AboutUS'>
      <div className='about-heading'>
        <h2>About Us</h2>
      </div>
      <div className="about-content">
        <p>
          PixelExperience is an AOSP based ROM, with Google apps included and all Pixel goodies (launcher, wallpapers, icons, fonts, bootanimation).Our mission is to offer the maximum possible stability and security, along with essential and useful features for the proper functioning of the device.We are a community-driven open source project, so we have no affiliation with Google LLC company.
        </p>
      </div>
    </div>
  )
}

export default AboutUs