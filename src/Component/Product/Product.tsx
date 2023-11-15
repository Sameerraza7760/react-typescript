import React from 'react'
import { IProduct } from '../../types/types';

interface ProductProps{
  item:IProduct;
  handleaddToCart(id:number):void
}
function Product({item,handleaddToCart}:ProductProps,) {
  return (
    <div>
        <h1>{item.name}</h1>
        <p>{item.age}</p>
        <p>{item.gender}</p>
        <button onClick={()=>handleaddToCart(item.id)} >Add to Cart</button>
    </div>
  )
}

export default Product