import React from 'react';
import "./navbar.css";
import plus from '../../assets/plus.png'
import './navbar.css'


const Navbar = () => {



  const handleUpload = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', () => {
      const selectedFile = fileInput.files[0];

      console.log('Selected file:', selectedFile);
    });

    fileInput.click();
  }



  return (
    <div className='navbarContainer'>
      <div className='sideHeadingContainer'>
        <p> File Manager</p>
      </div>
      <button className='uploadButton' onClick={handleUpload}>
        <img className='plus' src={plus} alt="plus" />
        Upload</button>
    </div>

  )
}

export default Navbar


