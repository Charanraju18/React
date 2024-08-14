import React from 'react'
import { useEffect } from 'react'

function use_effect() {
	useEffect(() => {
	  first
	
	  return () => {
		second
	  }
	}, [third])
	
  return (
	<div>use_effect</div>
  )
}

export default use_effect