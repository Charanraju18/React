import React,{useState} from 'react'
// import {student_details} from './students_data';
import { Cars } from './car_models';
import './cars_div.css'
import { dataObj } from './dummydata';
import Product from './Product';


const arr = [1,2,3,4,5,6,7,8,9,0];
const fruit = ['apple','banana','mango','orange','pineapple']
const char = ['luffy','zoro','sanji','kinomen','chopper','brook','franky']

const filterNum = arr.filter((item) => item<=5);
// console.log(filterNum);


arr.sort((n1,n2)=>n2-n1);
function List_and_maps1() {
  return (
	<>
	<center>
	<div className='map'>
		<ul>
		{
			arr.map((item)=>{
				return(
					<li key={item}>items : {item}</li>
				)
			})
		}
		</ul>
	</div>
	{/* <div className='list'>
		<ol>
			{
				fruit.map((item)=>{
					return(
						<li key={item}>Fruit : {item}</li>
					)
				})
			}
		</ol>
	</div> */}
	<div>
		<ol>
			{
				char.map((name,ki)=>{
					return(
							<div key={ki}>
								<li>Name : {name}</li>
							</div>
					)
				})
			}
		</ol>
	</div>
	</center>
	</>
  )
}


function List_and_maps2(){
	console.log(student_details)
	return(
		<>
		<h1>Student Details</h1>
		{
			student_details.map((student,index)=>{
				return(
					<div key={index} style={{margin: "auto"}}>
						<p><b>Name </b>: {student.name}</p>
						<p><b>Roll Number </b>: {student.roll}</p>
						<p><b>College </b>: {student.clg}</p>
						<p><b>Branch </b>: {student.branch}</p>
						<br />
					</div>

				)
			})
		}
		</>
	)
}


function List_and_maps3(){
	return(
		<>
		<h1 style={{textAlign: 'center'}}>Lists And Maps</h1>
			<div className='cars_division'>

			{
				Cars.map((items,index)=>{
					return(
						<>
							<div key={index} className='inner_car'>
								<img src={items.image} width={300}/>
								<p><br/><b>MODEL</b> : {items.model}</p>
							</div>
						</>
					)
				})
			}
			</div>
		</>
	)
}


function List_and_maps(){

	const [data, setdata] = useState(dataObj)

	const sortData = () =>{
		const dummy = [...dataObj]
		dummy.sort((n1,n2)=> n1.price-n2.price)
		setdata(dummy)
	}

	const [first, setfirst] = useState('')
	const searchedParameter = (e)=>{
		const searchValue = e.target.value;
		setfirst(searchValue);
	}

	const searchedData = first.toLowerCase()

	const filters = data.filter((item)=> (item.productName).toLowerCase().includes(searchedData));

	const likecard = (id)=>{
		const dumData = [...data];
		dumData.forEach((item)=>{
			if(item.productId===id){
				item.liked = !item.liked
			}
		})
		setfirst(dumData)
	}

	const displaydata = first ? filters : data;

	return(
		<>
			<div>
				<br/><br/><br/><br/>
				<h1 style={{textAlign: 'center'}}>List and Maps Filter,Search,Sort,Reduce Methods</h1>
				<center><button onClick={sortData} className='sort_btn'>Sort Data</button>
				<input type='text' placeholder='Search Item' onChange={(e)=>searchedParameter(e)} className='input_field'/></center>
				<br></br>
				{
					displaydata.map((product,ind)=>{
						return(
							<>
								<Product productData={product} like={product}/>
							</>
						)
					})
				}
			</div>
		</>
	)
}

export default List_and_maps