import React from 'react'
import Featured from '../components/featured/Featured'
import Navbar from '../components/navbar/Navbar'
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
    </div>
  )
}

export default Home