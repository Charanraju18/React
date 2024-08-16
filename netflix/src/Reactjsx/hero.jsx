import React from 'react'
import '../Reactcss/hero.css'
import '../Reactcss/div1.css'
import logo from '../assets/netflixlogo.png'

function Hero() {
  const getStarted = () =>{
    console.log("LOGGED IN")
  }
  return (
    <>
      <div className="div1">
        <div className='header'>
          <div className="nav">
            <div className="logo">
              <img src={logo} width='40%' height='45%'/>
            </div>
            <div className="signup">
              <select className='lang'>
                <option>English</option>
                <option>Hindi</option>
                <option>Telugu</option>
              </select>
              <button className="signup_btn">Sign In</button>
            </div>
          </div>
        </div>
        <div className='matter'>
        <h1 className='div1_font h1'>Unlimited movies, TV shows and more</h1><br />
        <p className='div1_font p1'>Watch anywhere. Cancel anytime.</p><br />
        <p className='div1_font p2'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='email'>
          <input type='text' placeholder='Email address' className='ip'/>
          <button onClick={getStarted} className='getStarted'>Get Started &nbsp; &gt;</button></div>
        </div>
        </div>
    </>
  )
}

function Div1() {
  return (
	<div className='onTV'>
    <div className="left_matter">
      <h1>Enjoy on your TV</h1>
      <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
    </div>
    <div className="tv_unit"></div>
  </div>
  )
}

export {Hero,Div1}