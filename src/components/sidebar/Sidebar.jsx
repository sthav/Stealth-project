import React from 'react';
import logo from '../../assets/logo.png'
import fmLogo from '../../assets/fileManagerLogo.png'
import './sidebar.css'


const Sidebar = () => {


  return (
    <div className='sidebarContainer'>
      <div className='logoContainer'>
        <img className="logo" src={logo} alt="logo" />
        <h1>Stealth</h1>
      </div>
      <div className='line'></div>
      <button className='fileManagerButton'>
        <img className="fmLogo" src={fmLogo} alt="fmLogo" />
        File manager
      </button>
    </div>

  )
}

export default Sidebar


