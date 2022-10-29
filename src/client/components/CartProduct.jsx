import React from 'react'
import { useState, useEffect } from 'react'

function CartProduct({ carts, setCarts, handleChange }) {

  const [price, setPrice] = useState(0);

  // const handleRemove = (_id) => {
  //   const arr = carts.filter((cakeItem) => cakeItem._id !== _id);
  //   setCarts(arr);
  //   handlePrice();
  // };

  // const handlePrice = () => {
  //   let ans = 0;
  //   carts.map((cakeItem) => (ans += cakeItem.amount * cakeItem.price));
  //   setPrice(ans);
  // };

  // useEffect(() => {
  //   handlePrice();
  // });
  return (
    <>
      {/* <div>
        {carts.map((cakeItem) => (
          <div className="cart_box" key={cakeItem._id}>
            <div className="cart_img">
              <img src={cakeItem.img} alt="nooooooooimg" />
              <p>{cakeItem.name}</p>
            </div>
            <div>
              <button onClick={() => handleChange(cakeItem, 1)}>+</button>
              <button>{cakeItem.price}</button>
              <button onClick={() => handleChange(cakeItem, -1)}> -</button>
            </div>
            <div>
              <span>{cakeItem.price}</span>
              <button onClick={() => handleRemove(cakeItem._id)}>Remove</button>
            </div>
          </div>
        ))}

        <h1>cart</h1>
      </div>

      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div> */}

      <h1>cart</h1>
    </>
  )
}

export default CartProduct
