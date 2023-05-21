import React from 'react'
import './mainPage.css'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Categories from '../components/categories/Categories'



const MainPage = () => {


    return (
        <div className='mainPageContainer'>
            <div className='leftContainer'>
                <Sidebar />
            </div>

            <div className='rightContainer'>
                <Navbar />
                <div className='mainContainer'>
                    <div className='categories'>
                        <Categories />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainPage