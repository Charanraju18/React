import { useState } from 'react'
import './App.css'
import reactlogo from './assets/react.svg'
import Parent from "./components/parent.jsx";
import { Render, StyleFunction} from './rendering/render.jsx'
import Obj_Use_state from './hooks/usestate.jsx';
function App() {
  return (
    <>
      {/* <Parent/>
      <Render/>
      <StyleFunction/> */}
      {/* <UseStateTwo/> */}
      <Obj_Use_state/>
    </>
  )
}

export default App;
