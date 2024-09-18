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

function Forms() {
    const [name, setName] = useState('');
    const [college, setCollege] = useState('');
    const [branch, setBranch] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( localStorage.getItem("user") === null) {
            localStorage.setItem("user", JSON.stringify([]));
        }
        const user1 = {
            name: name,
            college: college,
            branch: branch,
            user: user,
            password: password
        }
        const users = JSON.parse(localStorage.getItem("user"));
        users.push(user1);

        console.log(users)
        localStorage.setItem("user", JSON.stringify(users));



        setName('');
        setBranch("");
        setCollege("");
        setUser("");
        setPassword("");
        console.log(name, college, branch);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleCollege = (e) => {
        setCollege(e.target.value);
    }
    const handleBranch = (e) => {
        setBranch(e.target.value);
    }
    const handleUser = (e) => {
        setUser(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    return (
        <div>
            <form action="" className='formEx' onSubmit={handleSubmit}  >
                <div className="side">
                <label htmlFor="">Name :</label><input type="text"
                    value={name} onChange={handleName} /> <br />
                </div>
                <div className="side">
                <label htmlFor="">college :</label><input type="text" name="" value={college} onChange={handleCollege} /> <br />

                </div>
                <div className="side">
                <label htmlFor="">branch :</label><input type="text" name="" value={branch} onChange={handleBranch} /> <br />

                </div>
                <div className="side">
                <label htmlFor="">user : </label> <input type="text" name=""  onChange={handleUser} />  <br />

                </div>
                <div className="side">
                <label htmlFor="">Password</label> <input type="password" name=""  onChange={handlePassword} />
                </div>



                <button className='sub-button' type="submit" >submit</button>
            </form>

            <div>
                <p> name :{name}</p>
                <p> branch :{branch}</p>
                <p> college :{college}</p>
                <p> user :{user}</p>
                <p> password :{password}</p>
            </div>

        </div>
    )
}
export default Forms;
