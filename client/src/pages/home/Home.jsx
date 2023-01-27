// import { List } from '@mui/material'
import React from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      {/* <img width="100%"
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
      /> */}
      <Featured type="series"/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home