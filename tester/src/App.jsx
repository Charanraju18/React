import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Demo,Demo1} from './component/classcomp'
import Demo0 from './component/classcomp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="header">Hello world</div>

    </>
  )
}

export default App
