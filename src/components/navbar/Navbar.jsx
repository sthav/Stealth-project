import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./navbar.css";
//import logo_drozone from "../../assets/logo_drozone.png"
import { Link } from 'react-router-dom';
import plus from '../../assets/plus.png'
import './navbar.css'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isHorizontal, setIsHorizontal] = useState(true);
  const menuRef = useRef();


  const handleResize = () => {
    const isIncreasing = window.innerWidth >= 768;
    const isDecreasing = window.innerWidth < 768;
    setIsHorizontal(isIncreasing);

    if (isDecreasing) {
      setIsOpen(false)
    }
  };

  // const handleUpload = () => {
  //   const fileInput = document.createElement('input');
  //   fileInput.type = 'file';
  //   fileInput.accept = 'image/*'; // Specify the accepted file types if needed

  //   fileInput.addEventListener('change', () => {
  //     const selectedFile = fileInput.files[0];
  //     // Handle the selected file here (e.g., upload it to the server)
  //     console.log('Selected file:', selectedFile);
  //   });

  //   fileInput.click();
  // }

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
    <div className='navbarContainer'>
      <div className='sideHeadingContainer'>
        <p> File Manager</p>
      </div>
      <button className='uploadButton' >
        <img className='plus' src={plus} alt="plus" />
        Upload </button>
    </div>

  )
}

export default Navbar


