import React from "react";
// import { Fragment } from "react";
import './external.css';
import mod_css from "./styles.module.css";

const Demo0 = () => {
	return(
		<>
		{/* inline css  */}
		<h1 style={{color: 'white', backgroundColor: 'black'}}><i>Abcdef</i></h1>

		{/* external css  */}
		<h2 class="another_color">Ghijkl</h2>
		<h3>Mnopqrst</h3>
		</>
	)
}

export function Demo(){
	return(
		<h1 class="color">Hello world</h1>
	)
}
export function Demo1(){
	return(
		<div>

			{/* module css  */}
			<h2 className={mod_css.modulecss}>abcdeefghi</h2>
		</div>

	)
}
export default Demo0;