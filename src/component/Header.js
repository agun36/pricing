import React from 'react'
import '../App.css'
import roundedHeader from '../images/pattern-circles.svg'
const Header = () => {
  return (
    <div className='header'>
      <h1>Simple, traffic-based pricing</h1>
      <div className='d-flexs'>
        <span>Sign up for our 30 days trial</span>
        <span>No credit-card required</span>
      </div>
      {/* <img className='pattern' src={roundedHeader} alt='' /> */}
    </div>
  )
}

export default Header
