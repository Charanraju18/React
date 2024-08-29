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
import {React_Slick0} from './components/slicks/React_Slick.jsx';
import {Sort_method,Cycle_sort} from './components/lists/sort_method.jsx';
import {Events,OnchangeEvent,OnMouseEvent} from './pages/Events.jsx';
import Forms from './pages/Forms/Forms.jsx';

function App() {
  return (
    <>
      {/* <Events/>
      <OnchangeEvent/>
      <OnMouseEvent/> */}
      <Forms/>
    </>
  )
}

export default App;
