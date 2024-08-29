import React from 'react'
import { useState } from 'react';
import './Events.css'

function showDisplay(){
	document.getElementsByClassName('div').style.display = 'block';
}
function hideDisplay(){
	document.getElementsByClassName('div').style.display = 'hide';
}

const Events = ()=>{
	const [count, setcount] = useState(true)
	const click = ()=>{
		setcount(!count)
	}
  return (
	<>
		<div className='div'>Events</div>
		<button onClick={click}>Click Me</button>
		<p>true (or) false : {`${{count} ? {showDisplay} : {hideDisplay}}`}</p>
		<div className='div1'></div>
		<div className='div2'></div>
	</>
  )
}

const OnchangeEvent = ()=> {
	const [first, setfirst] = useState("")
	const userEntry = (e) =>{
		setfirst(e.target.value)
	}
	return(
		<>
			<h1>Onchange Event</h1>
			<input type="text" onChange={(e)=> userEntry(e)}/>
			<p>{first}</p>
		</>
	)
}

const OnMouseEvent=()=>{
	return(
		<>
			<h1>Mouse Events</h1>
			<div style={{width: '300px', height: '300px', backgroundColor:'pink'}} onMouseEnter={()=>console.log("Mouse Entered")}></div>
			<div style={{width: '300px', height: '300px', backgroundColor: 'skyblue'}} onMouseLeave={()=>console.log("Mouse Leaved")}></div>
		</>
	)
}

export {Events,OnchangeEvent,OnMouseEvent}