import React, { useState } from "react";
import { useFilter } from "@/app/context/context";

const DisplayCart = () => {
  const { cart, setCart, completeSale } = useFilter();

  const handleDeleteCart = (id) => {
    setCart((cart) => cart.filter((item) => item.id !== id));
  };

  return (
    <section className=" min-h-screen w-full">
      <div className="grid grid-cols-3 py-2">
        <h2 className="text-lg font-bold">Cart</h2>
        <p className="font-bold text-center"> Qauntity</p>
        <p className="font-bold text-end">Action</p>
      </div>

      {cart.length === 0 && <p>No items yet</p>}
      {cart.filter(Boolean).map((item) => (
        <div key={item.id} className="grid grid-cols-3 py-2">
          <span>{item.name}</span>
          <span className="text-center">{item.quantity}</span>
          <button
            onClick={() => handleDeleteCart(item.id)}
            className="text-red-600 hover:text-red-700 cursor-pointer text-end"
          >
            Delete
          </button>
        </div>
      ))}

      <button
        onClick={completeSale}
        className="bg-blue-600 px-4 py-2 text-white rounded-lg mt-6"
      >
        Complete Sale
      </button>

      {/* <div className="">
          <div className=" ">
            <h2 className="text-base font-semibold mb-1  uppercase">Current Cart</h2>
          </div>

          <div className="bg-white gap-4 h-86 ">
            <div className="flex flex-col ">
              <div className=" p-6 space-y-4">
                <h2 className="flex justify-between items-center text-xs">
                  {" "}
                  {data.name} <span>{data.price}</span>{" "}
                </h2>
                <h2 className="flex justify-between items-center text-xs">
                  {" "}
                  Total<span>₦200</span>{" "}
                </h2>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>item</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                
              </table>
              <div>
                <p>Subtotal</p>
                <p>Sales Tax</p>
                <p>Subtotal</p>
              </div>
              <div className="flex justify-center place-items-end">
                <button className="bg-blue-600 px-3 py-3 cursor-pointer text-white rounded-lg text-sm capitalize ">
                  checkout
                </button>
              </div>
            </div>
          </div>
        </div> */}
    </section>
  );
};

export default DisplayCart;
