"use client";

import React from "react";
import useAuth from "../../hooks/useAuth";
import Profile from "../../profile/Profile";

const Header = () => {
  const { user } = useAuth();
  return (
    <div className="w-screen">
      <main className="bg-gradient-to-t from-cyan-700 to-cyan-400/50 w-full overflow-x-auto">
        <div className="border-b border-gray-300 px-10 h-24 flex items-center justify-between shadow-xl">
          <header className="font-semibold">
            <h1 className="text-3xl uppercase md:text-center">Inventory</h1>
          </header>
           <div className="flex items-center justify-center ">
              {/* <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E"
                alt="profile-avatar"
                className="w-10 h-10 rounded-full object-cover border-2 text-[#63b3ed]"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                {user.username}
              </span> */}
              <div className="flex items-center justify-center ">
                 <Profile/>

              </div>
             
            </div>
       
        </div>
      </main>
    </div>
  );
};

export default Header;

  //  {user ? (
  //           <div className="flex items-center justify-center ">
  //             {/* <img
  //               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E"
  //               alt="profile-avatar"
  //               className="w-10 h-10 rounded-full object-cover border-2 text-[#63b3ed]"
  //             />
  //             <span className="ml-2 text-sm font-medium text-gray-700">
  //               {user.username}
  //             </span> */}
  //             <Profile/>
  //           </div>
  //         ) : (
  //           ""
  //         )}
