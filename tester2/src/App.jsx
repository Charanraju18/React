import { useState } from 'react'
import './App.css'
import reactlogo from './assets/react.svg'
import Parent from "./components/parent.jsx";
import { Render, StyleFunction} from './rendering/render.jsx'
import Obj_Use_state from './hooks/usestate.jsx';
import Use_effect from './hooks/use_effect.jsx';
import Use_Ref from './hooks/Use_Ref.jsx';
import Usestate from './hooks/usestate.jsx';
import List_and_maps from './components/lists/lists_and_maps.jsx';
import React_Slick from './components/slicks/React_Slick.jsx';
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
      <List_and_maps/>

      <React_Slick/>
    </>
  )
}

export default App;
