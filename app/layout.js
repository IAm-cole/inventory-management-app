// app/layout.js
import "./globals.css";

import Header from "./components/header/page"; // keep this path if that's your Header component
// import AuthProviders from "./providers/AuthProvider";

import { FilterProvider } from "./context/context";

export const metadata = {
  title: "Inventory Management",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex max-w-[1200px] flex-col w-screen bg-gradient-to-br from-purple-50 to-cyan-100 antialiased">
        {/* AuthProviders is a client component that wraps Auth0Provider + FilterProvider */}
        <FilterProvider>
          <Header />
          <main className="grow">{children}</main>
        </FilterProvider>
      </body>
    </html>
  );
}

// import "./globals.css";
// import Header from "./components/header/page";
// import { FilterProvider } from "./context/context";
// import { Auth0Provider } from "@auth0/auth0-react";

// export const metadata = {
//   title: "Inventory Management",
//   description: "",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`flex max-w-[1200] flex-col w-screen bg-gradient-to-br from-purple-50 to-cyan-100  antialiased`}
//       >
//         <Auth0Provider
//           domain={domain}
//           clientId={clientId}
//           authorizationParams={{ redirect_url: window.location.origin }}
//         >
//           <FilterProvider>
//             <Header />

//             <main className="grow"> {children} </main>
//           </FilterProvider>
//         </Auth0Provider>
//       </body>
//     </html>
//   );
// }
