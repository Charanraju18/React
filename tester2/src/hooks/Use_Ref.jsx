import React, { useEffect, useRef, useState } from 'react'
import './usestate.css'
function Use_Ref0() {
	const [value, setvalue] = useState(0)
	const count = useRef(0)
	useEffect(() => {
	  count.current = count.current+1
	})


  return (
	<>
		<div className="div1">
			<h1>Use Ref</h1>
			<button onClick={()=>{setvalue(value-1)}} className='btn'>-1</button>
			<h1>{value}</h1>
			<button onClick={()=>{setvalue(value+1)}} className='btn'>+1</button>

			<h1>Render Count : {count.current}</h1>
		</div>
	</>
  )
}


function Use_Ref(){
	const input_ele = useRef(0)
	const btnclicked=()=>{
		console.log(input_ele.current);
		input_ele.current.style.background = "pink";
		input_ele.current.style.border = "2px solid black";

	}

	return(
		<>
			<div className="div1">
				<h2>Use Ref</h2>
				<input type='text' ref={input_ele}/>
				<button onClick={btnclicked} className='btn'>click me</button>
			</div>
		</>
	)
}

export default Use_Ref;