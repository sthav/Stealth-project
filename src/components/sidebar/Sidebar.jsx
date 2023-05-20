import React from 'react';
import { useState, useEffect, useRef } from 'react';
//import logo_drozone from "../../assets/logo_drozone.png"
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import fmLogo from '../../assets/fileManagerLogo.png'
import './sidebar.css'


const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  //const [isHorizontal, setIsHorizontal] = useState(true);
  const menuRef = useRef();


  const handleResize = () => {
    const isIncreasing = window.innerWidth >= 768;
    const isDecreasing = window.innerWidth < 768;
   // setIsHorizontal(isIncreasing);

    if (isDecreasing) {
      setIsOpen(false)
    }
  };


  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
      [ref, handler],
    );

  };

  useOnClickOutside(menuRef, () => setIsOpen(false))


  return (
    <div className='sidebarContainer'>
    <div className='logoContainer'>
        <img className="logo"  src={logo} alt="logo" />
        <h1>Stealth</h1>
    </div>
    <div className='line'></div>
        <button className='fileManagerButton'>
          <img className="fmLogo"  src={fmLogo} alt="fmLogo" />
          File manager
        </button>
    </div>

  )
}

export default Sidebar


