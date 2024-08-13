import React from 'react'
import styles from './styles.module.css'
import './normal.css'

export function Render() {
	const flag = true

		return(
			<>
			<div>
				<h1>Hello {`${flag ? "Luffy😁" : "Zoro😴"}`}</h1>
				<img src={`${flag ? 'luffy.webp' : 'roronoa-zoro.avif'}`} width={`${flag ? '400px' : '40%'}`} height={`${flag ? '400px' : '40%'}`}/>
			</div>
			</>
		)
}


export function StyleFunction(){
	const flag = false;
	return (
		<>
			<h1>Style Function</h1>
			<p className={`${flag ? styles.hero1 : styles.hero2}`}>Hello Luffy</p>
			<p className={`${flag ? 'heroine1' : 'heroine2'}`}>Hello Sanji</p>
		</>
	)
}