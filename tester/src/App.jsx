import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Demo,Demo1} from './component/classcomp'
import Demo0 from './component/classcomp'
import { BsAlarm } from "react-icons/bs";
import { Bs6CircleFill } from "react-icons/bs";
import { Bs9CircleFill } from "react-icons/bs";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="header">Hello world</div>
      <BsAlarm></BsAlarm><br></br>
      {/* <Bs6CircleFill style={{fontSize:"24px"}}></Bs6CircleFill>
      <Bs9CircleFill style={{fontSize:"24px"}}></Bs9CircleFill> */}
    </>
  )
}

export default App
