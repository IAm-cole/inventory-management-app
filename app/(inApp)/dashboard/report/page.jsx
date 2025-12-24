"use client";
import React from "react";
import { useFilter } from "@/app/context/context";

const Report = () => {
  const { salesHistory } = useFilter();

    // <div className=" w-screen px-4 md:px-8 lg:px-16 py-6  ">
    //   <main>
    //     <div className="flex flex-col mx-6 mb-8">
    //       <div className="flex items-center justify-center">
    //         <h1 className="text-lg font-semibold mb-1  uppercase underline line-height:2">
    //           Sales & Data Management
    //         </h1>
    //       </div>
    //       <div className="mx-4 mt-3">
    //         <p className="text-base font-semibold mb-1  uppercase ">
    //           Sales Transaction History
    //         </p>
    //       </div>
    //       <div className="w-full mt-1 bg-gray-200 p-4 rounded-lg ">
    //         <table className="w-full text-left border-collapse">
    //           <thead>
    //             <tr>
    //               <th className="text-sm">Date</th>
    //               <th className="text-sm">Item</th>
    //               <th className="text-sm">Quantity</th>
    //               <th className="text-sm">Unit Price</th>
    //               <th className="text-sm">Total</th>
    //             </tr>
    //           </thead>
    //           <tbody className="gap-3">
    //             <tr className="border-t border-gray-300">
    //               <td className="py-2 text-xs">2024-06-01</td>
    //               <td className="py-2 text-xs">Apple Cidar Drink</td>
    //               <td className="py-2 text-xs">3</td>
    //               <td className="py-2 text-xs">#200</td>
    //               <td className="py-2 text-xs">#600</td>
    //             </tr>
    //           </tbody>
    //           <tbody>
    //             <tr className="border-t border-gray-300">
    //               <td className="py-2 text-xs">2024-06-01</td>
    //               <td className="py-2 text-xs">Chocolate Pack</td>
    //               <td className="py-2 text-xs">6</td>
    //               <td className="py-2 text-xs">#100</td>
    //               <td className="py-2 text-xs">#600</td>
    //             </tr>
    //           </tbody>
    //           <tbody>
    //             <tr className="border-t border-gray-300">
    //               <td className="py-2 text-xs">2024-06-07</td>
    //               <td className="py-2 text-xs">Shoe</td>
    //               <td className="py-2 text-xs">1</td>
    //               <td className="py-2 text-xs">#300</td>
    //               <td className="py-2 text-xs">#300</td>
    //             </tr>
    //           </tbody>
    //         </table>

    //         <div className="mt-2 flex justify-end items-end ">
    //           <p className="pr-4">total sales:</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex flex-col mx-6">
    //       <h1 className="mt-8 text-lg font-semibold ">Data Management</h1>
    //       <div className="mt-4 ">
    //         <button className="bg-red-600 py-2 px-3 cursor-pointer rounded-lg">
    //           Clear All Data
    //         </button>
    //       </div>
    //     </div>
    //   </main>
    // </div>


    // new report page 
    




  

  return (
    <section className="w-full">
      <h1 className="text-lg font-bold mb-3">Sales Management</h1>

      {salesHistory.length === 0 && <p>No sales recorded yet.</p>}

      {salesHistory.map((sale) => (
        <main key={sale.id} className="w-full ">

      
        <div className="p-30 border rounded-lg mb-2  w-full bg-blue-800">

          <div className="">

       
         

          
          <h2 className="font-bold text-lg ">
            Sale ID: {sale.id}
          </h2>

          <p className="text-lg font-bold">Date: {new Date(sale.date).toLocaleString()}</p>
           </div>

          <table className="w-full mt-4 border-collapse ">
            <thead className="">
              <tr className="border-b ">
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Added At</th>
              </tr>
            </thead>

            <tbody>
              {sale.items.map(item => (
                <tr key={item.id} className="border-b text-center">
                  <td>{item.name}</td>
                  <td>₦{item.priceAtSale}</td>
                  <td>{item.quantity}</td>
                  <td>₦{item.priceAtSale * item.quantity}</td>
                  <td>{new Date(item.addedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="font-bold mt-4">
            Total Revenue: ₦{sale.total}
          </p>
           <div className="mt-2 flex items-center justify-center ">
           <button className="bg-red-600 py-1 text-sm px-2 cursor-pointer rounded-lg">
               Clear All Data
             </button>
          </div>
             </div>
         
       
          </main> 
   

      ))}
    </section>
  );
};

export default Report;


