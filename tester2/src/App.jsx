import { useState } from 'react'
import './App.css'
import reactlogo from './assets/react.svg'
import Parent from "./components/parent.jsx";
import { Render, StyleFunction} from './rendering/render.jsx'
import Usestate from './hooks/usestate.jsx';
function App() {
  return (
    <>
      {/* <Parent/>
      <Render/>
      <StyleFunction/> */}
      <Usestate/>
    </>
  )
}

export default App;
