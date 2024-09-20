import React from "react";
import "./Page1.css";
import { Link, Outlet } from "react-router-dom";
// import Page2 from "./Page2";
function Page1() {
  return (
    <div className="first_div">


      <br />
      <h2>Go to Page 2</h2><Link to="/second_page">Click Me!</Link>
	  <h2>Go to Page 3</h2><Link to="/third_page">Click Me!</Link>

	  <Outlet />
	  <div className="header">
        <h2>Header</h2>
      </div>
      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

function Page3(){
	return(
		<div>
			<h1>Hello! This is page3</h1>
		</div>
	)
}

export {Page1,Page3};
