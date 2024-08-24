import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './React_Slick.css'

function React_Slick0() {
const settings = {
	dots: true,
	className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
	slidesToScroll: 1,
    speed: 500,
	responsive: [
		{
			breakpoint : 700,
			settings: {
				dots: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				speed: 400,
			}
		}
	]
}

  return (
	<div>
		<h1>React Slider</h1>
		<Slider {...settings}>
			<div className='outer'>
				<div className='inner'>
					<h2 style={{textAlign: 'center'}}>Slider 1</h2>
					<img src='https://www.westislandford.ca/images/ckfinder/version-mythique-mustang/Mustang_GT350_1965.jpg' width={300}/>
					<br/>
					<p style={{textAlign: 'center'}}><b>1965 Ford Mustang GT350</b></p>
				</div>
			</div>
			<div className='outer'>
				<div className='inner'>
					<h2 style={{textAlign: 'center'}}>Slider 2</h2>
		<img src='https://www.westislandford.ca/images/ckfinder/version-mythique-mustang/Mustang_GT500_2022.jpg' width={300}/>
		<br/>
		<p style={{textAlign: 'center'}}><b>2022 Ford Mustang GT500</b></p>

				</div>
			</div>
			<div className='outer'>
				<div className='inner'>
					<h2 style={{textAlign: 'center'}}>Slider 3</h2>
		<img src='https://www.westislandford.ca/images/ckfinder/version-mythique-mustang/Mustang_Bullitt_1968.jpg' width={300}/>
		<br/>
		<p style={{textAlign: 'center'}}><b>1968 Ford Mustang Bullitt</b></p>

				</div>
			</div>
			<div className='outer'>
				<div className='inner'>
					<h2 style={{textAlign: 'center'}}>Slider 4</h2>
		<img src='https://www.westislandford.ca/images/ckfinder/version-mythique-mustang/Mustang_Bullitt_2019.jpg' width={300}/>
		<br/>
		<p style={{textAlign: 'center'}}><b>2019 Ford Mustang Bullitt</b></p>

				</div>
			</div>
			<div className='outer'>
				<div className='inner'>
					<h2 style={{textAlign: 'center'}}>Slider 5</h2>
		<img src='https://www.westislandford.ca/images/ckfinder/version-mythique-mustang/Mustang_Mach1_1969.jpg' width={300}/>
		<br/>
		<p style={{textAlign: 'center'}}><b>1969 Ford Mustang Mach1</b></p>

				</div>
			</div>
			<div className='outer'>
				<div className='inner'>
					<h2 style={{textAlign: 'center'}}>Slider 6</h2>
		<img src='https://www.westislandford.ca/images/ckfinder/version-mythique-mustang/Mustang_Mach1_2021.jpg' width={300}/>
		<br/>
		<p style={{textAlign: 'center'}}><b>2021 Ford Mustang Mach1</b></p>

				</div>
			</div>
		</Slider>
	</div>
  )
}


function React_Slick1(){
	return(
		<>
			
		</>
	)
}


export {React_Slick0}