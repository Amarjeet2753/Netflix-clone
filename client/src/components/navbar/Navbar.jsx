import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

const Navbar = () => {
 const [isScrolled,setIsScrolled]= useState(false);
//  console.log(window.pageYOffset)

window.onscroll=()=>{

    setIsScrolled(window.pageYOffset===0 ? false : true)

    return ()=> (window.onscroll=null)
}
// console.log(isScrolled);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
         <div className="left">
         <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
            <span>Home page</span>
         <span>Movies</span>
         <span>Series</span>
         <span>New and Popular</span>
         <span>My List</span>
         </div>
         
         <div className="right">
            <SearchIcon  className='icon'/>
            <span>Kid</span>
            <NotificationsIcon className='icon'/>
            <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
            
            <div className="profile">
                <ArrowDropDownIcon/>
                <div className="option">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>

            </div>

         </div>
      </div>
    </div>
  )
}

export default Navbar