import React, { useEffect, useState } from "react";
import "./Forms.css";
import img1 from "../../assets/download_svg_icon.png";
import img2 from "../../assets/kids_profile_svg_icon.png";
import img3 from "../../assets/stream_svg_icon.png";
import img4 from "../../assets/tv_svg_icon.png";

function Forms1() {
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
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
      <img src={img4} />
    </div>
  );
}

function Forms2() {
  const [userData, setuserData] = useState({
    name: "",
    phNumber: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = () => {
    console.log(userData);
  };
  const [college, setcollege] = useState("Select");
  const selectCollege = (e) => {
    console.log(e.target.value);
    setcollege(e.target.value);
  };
  return (
    <>
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
            name="phNumber"
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
        <label>
          Enter Gender: <br />
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          Male
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          Female
        </label>
        <br></br>
        <select value={college} onChange={selectCollege}>
          <option value="Select">Select</option>
          <option value="AEC">AEC</option>
          <option value="ACET">ACET</option>
          <option value="ACOE">ACOE</option>
        </select>
        <button onClick={submitForm}>Submit</button>
        <br></br>
        <p>Name : {userData.name}</p>
        <p>Phone : {userData.phNumber}</p>
        <p>Email : {userData.email}</p>
        <p>Password : {userData.password}</p>
        <p>Gender : {userData.gender}</p>
      </div>
    </>
  );
}

const Forms = () => {
  const [userData, setuserData] = useState({
    name: "",
    roll: "",
    college: "",
  });
  var obj = [];
  const addUser = (e) => {
    const { name, value } = e.target;
    setuserData((prev) => ({ ...prev, [name]: value }));
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(userData);
    obj.push(userData);
    console.log(obj);
    localStorage.setItem("userdata", JSON.stringify(userData));
  };

  useEffect(() => {
    console.log("Rrendered");
    if (localStorage.getItem("userdata") == null) {
      localStorage.setItem("userdata", JSON.stringify("[]"));
    }

    var userdt = JSON.parse(localStorage.getItem("userdata"));
    console.log( typeof userdt);


    localStorage.setItem("userdata", JSON.stringify(userdt));
  }, []);
  return (
    <>
      <h2>Forms</h2>
      <form onClick={submitForm}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={addUser}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Enter Roll Number"
          name="roll"
          onChange={addUser}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Enter College"
          name="college"
          onChange={addUser}
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Forms;
