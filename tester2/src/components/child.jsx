import React from 'react'
import './child.css'
import "./parent";
// import luffy from '../assets/luffy.webp'
function child(props) {
  const { luffy, si, name, roll, clg, sd, func } = props;
//   console.log(sd.n);
  return (
    <>
      <div className="details">
        <img src={luffy} width="100px" height="83px"></img>
        <h3>Student : {si}</h3>
        <p>Name : {name}</p>
        <p>Roll : {roll}</p>
        <p>College : {clg}</p>
        <p>
          Student Details : <br />
          {sd.n},<br />
          {sd.p},<br />
          {sd.lm}
        </p>
        {/* <button onClick={() => func("Praveen")}>Clcik me</button> */}
        <button onClick={() => func(sd.n)}>Click Me</button>
      </div>
    </>
  );
}

export default child