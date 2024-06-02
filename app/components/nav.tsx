//
// 'use client';
// import { useState } from 'react';
//
// export function Navbar() {
//   const [isActive, setIsActive] = useState(false);
//
//   const toggleMenu = () => {
//     setIsActive(!isActive);
//   };
//
//   return (
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//           <div className="relative flex items-center justify-between h-16">
//             <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//               <div className="flex-shrink-0 flex items-center">
//                 <span className="text-lg font-bold text-gray-900">Navbar</span>
//                 <span className="text-lg font-bold text-gray-900">Navbar</span>
//                 <span className="text-lg font-bold text-gray-900">Navbar</span>
//
//
//               </div>
//               <div className="hidden sm:block sm:ml-6">
//                 <div className="flex space-x-4">
//                   <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 transition duration-300">Home</a>
//                   <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 transition duration-300">About</a>
//                   <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 transition duration-300">Services</a>
//                   <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 transition duration-300">Contact</a>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//               <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition duration-300" aria-expanded="false">
//                 <span className="sr-only">Open main menu</span>
//                 {/* Hamburger icon */}
//                 <svg className={`${isActive ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//                 {/* Close icon */}
//                 <svg className={`${isActive ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//
//         {/* Mobile menu */}
//         <div className={`${isActive ? 'block' : 'hidden'} sm:hidden`}>
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300">Home</a>
//             <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300">About</a>
//             <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300">Services</a>
//             <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300">Contact</a>
//           </div>
//         </div>
//       </nav>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoIcon from "./LogoIcon";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="relative flex items-center justify-between ">
        <div className="navbar navbar-">
          <Link href="/">
            <LogoIcon />
          </Link>
        </div>
        <div className="px-1  py-1 md:py-1  ext-sm text-white rounded-lg">
          <div className="rounded-md bg-white/6 ring-1 ring-white/10">
            <Link href="mailto:Burakozcann@proton.me">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b w-full my-8"></div>
      <div className="flex items-center flex-wrap gap-2 mb-8">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = pathname === path;
          return (
            <Link key={path} href={path}>
              <button
                className={`text-sm transition-colors px-2 py-1 rounded-md relative ${
                  isActive ? "text-black" : "text-gray-500 hover:text-white"
                }`}
              >
                <span className="relative z-10">{name}</span>
                {isActive && (
                  <span
                    className="absolute inset-0 z-0 bg-white rounded-md"
                    style={{ opacity: 1 }}
                  ></span>
                )}
              </button>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Navbar;
