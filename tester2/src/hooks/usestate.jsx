import React from 'react'
import { useState } from 'react'
import './usestate.css'

function Usestate(){
  const [first, abc] = useState(0)
  const increment=()=>{
      abc(first+1)
      if(first==10){
        abc(10)
      }
  }
  const decrement=()=>{
    abc(first-1)
  }
  return(
    <>
      <div className='div1'>
        <h2>Use State</h2>
        <p>Counter value = {first}</p>
        <button onClick={increment} className='btn'>Increment Counter</button>
        <button onClick={decrement} className='btn'>Decrement Counter</button>
        <button onClick={()=> abc(0)} className='btn'>Reset to Zero</button>
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
        <h1>Use State</h1>
        <h2>My Favorite Car is {car.model}</h2>
        <p>It is a {car.color} car, from {car.brand} brand launched in {car.year}</p>
        <button onClick={changeColor} className='btn'>Change Details</button>
      </div>
    </>
  )
}
export default Usestate