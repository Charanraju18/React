import { useState } from 'react'
import './App.css'
import reactlogo from './assets/react.svg'
import Parent from "./components/parent.jsx";
import { Render, StyleFunction} from './rendering/render.jsx'
import Obj_Use_state from './hooks/usestate.jsx';
import Use_effect from './hooks/use_effect.jsx';
import Use_Ref from './hooks/Use_Ref.jsx';
import Usestate from './hooks/usestate.jsx';
function App() {
  return (
    <>
      {/* <Parent/>
      <Render/>
      <StyleFunction/> */}
      {/* <UseStateTwo/> */}
      <Usestate/>
      {/* <Obj_Use_state/> */}
      <Use_effect/>
      <Use_Ref/>
    </>
  )
}

export default App;
