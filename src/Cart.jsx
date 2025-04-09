import React from 'react';
import { useSelector } from 'react-redux';
import ItemList from './ItemList';
import { useDispatch } from 'react-redux';
import { clearCart } from './Utils/cartSlice';
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const Dispatch = useDispatch();

  const handleclearCart = () => {
    //Dispatch action
    Dispatch(clearCart());
  };
  return (
    <>
      <div className=" m-auto p-5 text-center border border-solid-black border-spacing-4 w-6/12">
        <div className="flex justify-between">
          <h1 className="font-bold my-6 text-2xl">Cart</h1>
          <button
            className="px-4 text-xl font-bold text-green-800 rounded-xl border border-4 border-solid-green-800"
            onClick={handleclearCart}
          >
            Clear Cart
          </button>
        </div>

        <ItemList data={cartItems} />
      </div>
      <div></div>
    </>
  );
};

export default Cart;
