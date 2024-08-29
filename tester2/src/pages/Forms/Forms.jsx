import React, { useState } from "react";
import "./Forms.css";
import img1 from '../../assets/download_svg_icon.png'
import img2 from '../../assets/kids_profile_svg_icon.png'
import img3 from '../../assets/stream_svg_icon.png'
import img4 from '../../assets/tv_svg_icon.png'
function Forms() {
  const [name, setname] = useState("");
  const [phone, setphone] = useState();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const userName = (e) => {
    setname(e.target.value);
  };
  const userPhone = (e) => {
    setphone(e.target.value);
  };
  const userEmail = (e) => {
    setemail(e.target.value);
  };
  const userPassword = (e) => {
    setpassword(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="Forms">
      <h1>Forms</h1>
      <label>
        Enter Your Name: <br />
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
      </label>
      <br></br>
      <label>
        Enter Your Phone Number: <br />
        <input
          type="number"
          placeholder="Phone"
          name="name"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
      </label>
      <br></br>
      <label>
        Enter Your Email: <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
      </label>
      <br></br>
      <label>
        Enter Your Password: <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
      </label>
      <br></br>
      <br></br>
      {/* <p>Name : {name}</p>
		<p>Phone : {phone}</p>
		<p>Email : {email}</p>
		<p>Password : {password}</p> */}
    <img src={img1}/>
    <img src={img2}/>
    <img src={img3}/>
    <img src={img4}/>
    </div>
  );
}

export default Forms;
