import React from 'react'
import { Link } from 'react-router-dom'
function Page2() {
  return (
	<div>
		<h1>Hello! This is page2</h1>
		<h2>Go to Home</h2><br/>
		<Link to="/">Click Me!</Link>
	</div>
  )
}

export default Page2