import React from 'react'
import  "./productCard.css"

const ProductCard = ({item , addToCart,removeFromCart}) => {
  return (
    <div className='card'>
      <h3>{item.title}</h3>
      <img src={item.thumbnail} alt={item.title} />
      <p>{item.price}</p>
      <button onClick={() => addToCart(item)}>Add to cart</button>
      <button onClick={() => removeFromCart(item.id)}>
  Remove
</button>
    </div>
  )
}

export default ProductCard
