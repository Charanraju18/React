import React from 'react'
import './lists_and_maps.jsx';
import './cars_div.css'


function Product(props,likecard) {
  const { productId, productName, brand, price, inStock, rating, features, warranty } = props.productData;
  return (
    <>
      <div className="details">
        <h3>{productName}</h3>
        <p>{brand}</p>
        <p>{price}</p>
        <p>{inStock}</p>
		<p>{rating}</p>
		<p>
			{
				features.map((item,ind)=>{
					return(
						<>
							<p>{item}</p>
						</>
					)
				})
			}
		</p>
		<p>{warranty}</p>
		<h2 onClick={()=> likecards(productId)}></h2>
      </div>
    </>
  );
}

export default Product