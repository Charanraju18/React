import React, { useEffect, useState } from 'react'
import './usestate.css'
import img1 from '../assets/luffy.webp'
import img2 from '../assets/netflix.jpg'

function Use_effect0() {
	const [count, setcount] = useState(0)
	useEffect(() => {
		setTimeout(() => {
			setfirst(first-1)
		}, 10);
		if(first==0){
			setfirst(100);
		}
	},[])
  return (
	<>
	<div className='div1'>
		<h1>Use Effect</h1>
		<h2>{count}</h2>
	</div>
	</>
  )
}

function Use_effect(){
	const flag=false;
	const [first, setfirst] = useState(img1);
	const clicked=()=>{
		if(flag){
			setfirst(img1)
		}
		else{
			setfirst(img2)
		}
		flag=!flag
	}
	return(
		<>
			<div className='image'>
				<img src={}/>
			</div>
		</>
	)
}

export default Use_effect