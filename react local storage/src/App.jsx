import React,{useState} from 'react'
import Local from './Pages/Local'
import './App.css'

function App() {
  const [userData, setuserData] = useState({
    name: "",
    rollNumber: "",
    college: "",
    branch: ""
  });
  const addUser = (e) => {
    const { name, value } = e.target;
    setuserData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = () => {
    const pre = JSON.parse(localStorage.getItem("userdata"));
    pre.push(userData);
    localStorage.setItem("userdata",JSON.stringify(pre));
    var x = document.getElementsByClassName("saved");
    
  };

  if(!localStorage.getItem("userdata")){
    localStorage.setItem("userdata",JSON.stringify([]));
  }

  return (
    <>
      <div className='saved'>
        <p>User Data Saved</p>
      </div>
      <div className='login'>
        <center><h2>User Login</h2></center>
        <form>
        <label>Name :</label><br />
        <input type='text' placeholder='Enter Name' name='name' onChange={addUser}></input><br />
        <label>Roll Number :</label><br />
        <input type='text' placeholder='Enter Roll Number' name='rollNumber' onChange={addUser}></input><br />
        <label>College :</label><br />
        <input type='text' placeholder='Enter College' name='college' onChange={addUser}></input><br />
        <label>Branch :</label><br />
        <input type='text' placeholder='Enter Branch' name='branch' onChange={addUser}></input><br />
        </form>
        <button className='btn' onClick={submitForm}>Submit</button>
      </div>
    </>
  )
}

export default App