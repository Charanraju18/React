import React from 'react'
import './child.css'
function child(props) {
	const {si,name,roll,clg} = props;
  return (
	<>
		<div className='details'>
			<h3>Student : {si}</h3>
			<p>Name : {name}</p>
			<p>Roll : {roll}</p>
			<p>College : {clg}</p>
		</div>
	</>
  )
}

export default child