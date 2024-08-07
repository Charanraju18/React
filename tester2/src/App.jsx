import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import reactlogo from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <div className="logo">
          <img class="logo_img" src={reactlogo}></img>
        </div>
        <div className="nav_bar">
          <ul className='nav'>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Dashboard</li></a>
            <a href="#"><li>About us</li></a>
            <a href="#"><li>Contact Us</li></a>
          </ul>
        </div>
      </div>
      <div className="hero">
        <div className="side_bar">SIDEBAR</div>
        <div className="content">CONTENT</div>
      </div>
      <div className="footer">FOOTER</div>
    </>
  )
}

export default App
