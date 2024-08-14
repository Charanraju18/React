import React from 'react'
import { useState } from 'react';

function Usestate() {
  const [first, setfirst] = useState("luffy zoro")
  return (
    <>
    <div>Usestate</div>
    <p>Favorite name  <span style={{color: 'red'}}>{first}</span></p>
    </>
  )
}

const UseStateTwo = () => {
  let flag = true
  return(
    <>
      <h1>usestate two</h1>
    </>
  )
}

export default Usestate;