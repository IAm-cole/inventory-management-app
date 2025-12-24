// import React from "react";
// import Header from "../components/header/page";
// import SideBar from "../components/sideBar/page";

// const layout = ({ children }) => {
//   return (
//     <div className="flex w-screen bg-gradient-to-br from-purple-50 to-cyan-100 ">

//       <div>
//         <SideBar />
//       </div>

//       <div className=" ">

//         <div className=" ">
//           <Header />
//         </div>
//        <div className="">

//         {children}

//        </div>

//       </div>
//     </div>
//   );
// };

// export default layout;
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const routes = [
  {path: "/dashboard", label: "Dashboard"},
  { path: "/dashboard/inventory-management", label: "Inventory Management" },
  { path: "/dashboard/pos", label: "POS (Point of Sales)" },
  { path: "/dashboard/report", label: "Reporting & History" },
];
const DashboardLayout = ({ children }) => {
  const pathname = usePathname();

  const linkClass = (path) =>
    `text-sm lg:text-base  font-medium px-4 py-2 text-white rounded-xl cursor-pointer  text-nowrap transition-colors duration-200 text-slate-700
       ${
         pathname === path
           ? "bg-cyan-800/50 shadow-lg text-gray-600 "
           : "text-gray-900 hover:bg-gray-700/10 "
       }`;
  return ( 
    <section>
      <div className="flex flex-col justify-center items-center pt-6  w-screen min-h-screen"> 
        <div className=" bg-gradient-to-t from-cyan-900 to-cyan-500 p-3 text-slate-50 rounded-lg flex gap-4">
          {routes.map(({ path, label }) => (
            <Link prefetch={false}
              key={path}
              href={path}
              className={linkClass(path)}
              aria-current={pathname === path ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className=" flex grow mt-6">{children}</div>
      </div>
    </section>
   
  );
};

export default DashboardLayout;
