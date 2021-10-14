import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <hr style={{ width: '90%', marginTop: 20 }} />
      <span className='name'>
        <a
          href='https://github.com/milliorn/React-Material-UI-Dictionary'
          target='__blank'
        >
          Source Code
        </a>
      </span>
      <div className='iconContainer'>
        <a
          href='https://github.com/milliorn'
          target='__blank'
          alt='github'
          aria-label='github'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/scott-milliorn'
          target='__blank'
          alt='linkedin'
          aria-label='linkedin'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://twitter.com/scottmilliorn'
          target='__blank'
          alt='twitter'
          aria-label='twitter'
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  )
}

export default Footer
