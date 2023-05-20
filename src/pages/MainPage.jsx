import React from 'react'
import './mainPage.css'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Categories from '../components/categories/Categories'
import settings from '../assets/settings.png'
//import Table from '../components/table/Table'

const MainPage = () => {

    const items = ['Item 1', 'Item 2', 'Item 3']; 


  return (
    <div className='mainPageContainer'>
        <div className='leftContainer'>
             <Sidebar/>
        </div>

        <div className='rightContainer'>
        <Navbar/>
        <div className='mainContainer'>
            <div className='categoryContainer'>
                <div className='categoryHeading'>
                    CATEGORIES
                    <img className='settings' src={settings} alt='settings'/>
                </div>
                <div className='categories'>
                    <Categories items={items}/>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MainPage