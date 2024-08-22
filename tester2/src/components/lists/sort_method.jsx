import React from 'react'
import './sort_cars.css'

function Sort_method() {
	const cars = [
		{
			image : 'https://www.westislandford.ca/images/ckfinder/version-mythique-mustang/Mustang_GT350_1965.jpg',
			model : 'mustang',
			year: 1969,
			price : 10000000
		},
		{
			image : 'https://www.westislandford.ca/images/ckfinder/version-mythique-mustang/Mustang_GT500_1968.jpg',
			model : 'mustang',
			year: 1970,
			price : 9000000
		},
		{
			image : 'https://www.westislandford.ca/images/ckfinder/version-mythique-mustang/Mustang_GT500_2022.jpg',
			model : 'mustang',
			year: 1971,
			price : 700000
		},
		{
			image : 'https://www.westislandford.ca/images/ckfinder/version-mythique-mustang/Mustang_Mach1_2021.jpg',
			model : 'mustang',
			year: 1972,
			price : 800000
		},
		{
			image : 'https://www.westislandford.ca/images/ckfinder/version-mythique-mustang/Mustang_Mach1_2003.jpg',
			model : 'mustang',
			year: 1973,
			price : 7500000
		}
	]
	cars.sort((n1,n2)=>[(n1.price)-(n2.price)]);
  return (
	<>
	<center><h1>CARS SORT METHOD</h1></center>

	<div className='Cars_Division'>

		{
			cars.map((item,index)=>{
				return(
				<div key={index} className='sort_cars'>
					<img src={item.image} width={300}></img>
					<p>Car Model : {item.model}</p>
					<p>Launch Year : {item.year}</p>
					<p>Price : {item.price}</p>
				</div>
				)
			})
		}
	</div>
	</>
  )
}

function Cycle_sort(){
	const cycle = [
		{
			image: 'https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw27b4d07c/Products/F11/BCF1120BLBK001/medium.png?sh=160&sfrm=png',
			brand : 'Hero',
			model : 'F11',
			price : '6600',
			colors : ['black','blue','red']
		},
		{
			image: 'https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw00724f10/Products/Slingshot/BCSLS26BKGN001/Medium%20(1).png?sh=160&sfrm=png',
			brand : 'Hero',
			model : 'SLINGSHOT',
			price : '7030',
			colors : ['black','green','radium']
		},
		{
			image: 'https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dwfa04c612/Products/NewVoltage/RedGrey/310x160.png?sh=160&sfrm=png',
			brand : 'Hero',
			model : 'NEW VOLTAGE',
			price : '11090',
			colors : ['silver','white','black']
		},
		{
			image : 'https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw2258ac66/Products/Milano/BSMIL27GY00002/medium.png?sh=160&sfrm=png',
			brand : 'Hero',
			model : 'MILANO',
			price : '11515',
			colors : ['silver','black']
		}
	]
	return(
		cycle.map((item,index)=>{
			return(
				<>
					<img src={item.image} width={300}/>
					<p>Brand : {item.brand}</p>
					<p>Model Name : {item.model}</p>
					<p>Price : {item.price}</p>
					<p>Colors : {item.colors.map(color=>{
						return(
							<p>{color}</p>
						)
					})}</p>
				</>
			)
		})
	)
}

export {Sort_method,Cycle_sort}