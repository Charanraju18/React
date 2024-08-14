import React from 'react'
import { useState } from 'react'
import './usestate.css'

function Usestate(){
  const [first, setfirst] = useState(0)
  const increment = () =>{
    if(first===10){
      setfirst(10)
    }
    else{
      setfirst(first + 1)
    }

  }
  const decrement = () =>{
    if(first===0){
      setfirst(0)
    }
    else{
      setfirst(first - 1)
    }
  }
  const reset = () =>{
    setfirst(0)
  }
  return(
    <>
      <div className='div1'>
        <h2>Use State</h2>
        <p>Counter value = {first}</p>
        <button onClick={increment} className='btn'>Increment Counter</button>
        <button onClick={decrement} className='btn'>Decrement Counter</button>
        <button onClick={reset} className='btn'>Reset to Zero</button>
      </div>

    </>
  )
}

const UseStateTwo = () => {
  const [count, setcount] = useState(0)
  const [flag, setflag] = useState(true)

  const changestate = ()  =>{
    setcount(prev => prev+1)
    setflag(!flag)
  }

  return(
    <><div className='div1'>
      <h2>Use State Two</h2>
      <p>Count : {count}</p>
      <p>flag Value : {flag ? "True":"False"}</p>
      <button onClick={changestate} className='btn'>Click Me</button>
      </div>
    </>
  )
}

const Obj_Use_state = () =>{
  const [car, setcar] = useState({
    brand : "TATA",
    model : "Harrier",
    year : "2024",
    color: "Black"
  })

  const changeColor = () =>{
    setcar(car => {
      return {...car, color: "Silver", year: "2025", model: "Safari"  }
    })
  }

  return(
    <>
      <div className='div1'>
        <h1>My Favorite Car is {car.model}</h1>
        <p>It is a {car.color} car, from {car.brand} brand launched in {car.year}</p>
        <button onClick={changeColor} className='btn'>Change Details</button>
      </div>
    </>
  )
}
export default Obj_Use_state