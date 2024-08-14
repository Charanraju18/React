import React, { useEffect, useState } from 'react'
import './usestate.css'

function Use_effect() {
	const [count, setcount] = useState(0)
	useEffect(()=>{
		setTimeout(() => {
			setcount(count => count+1)
		}, 1000);
	},[])
  return (
	<>
	<div className='div1'>
		<h1>Use Effect</h1>
		<h2>I have rendered {count} times</h2>
	</div>
	</>
  )
}

export default Use_effect