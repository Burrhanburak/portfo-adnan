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
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
  "/iletisim": {
    name: "Iletisim",
  },
  "/about": {
    name: "hakkımızda",
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
                width="44"
                height="24"
                viewBox="0 0 149 126"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="149" height="126" rx="23" fill="white" />
                <path
                  d="M54 52.633V70C54 71.8565 54.7375 73.637 56.0503 74.9497C57.363 76.2625 59.1435 77 61 77H89C90.8565 77 92.637 76.2625 93.9497 74.9497C95.2625 73.637 96 71.8565 96 70V49C96 47.1435 95.2625 45.363 93.9497 44.0503C92.637 42.7375 90.8565 42 89 42H61C59.1435 42 57.363 42.7375 56.0503 44.0503C54.7375 45.363 54 47.1435 54 49V52.633ZM61 45.5H89C89.9283 45.5 90.8185 45.8687 91.4749 46.5251C92.1313 47.1815 92.5 48.0717 92.5 49V51.59L75 61.012L57.5 51.59V49C57.5 48.0717 57.8687 47.1815 58.5251 46.5251C59.1815 45.8687 60.0717 45.5 61 45.5ZM57.5 55.566L74.1705 64.54C74.4254 64.6772 74.7105 64.7491 75 64.7491C75.2895 64.7491 75.5746 64.6772 75.8295 64.54L92.5 55.566V70C92.5 70.9283 92.1313 71.8185 91.4749 72.4749C90.8185 73.1313 89.9283 73.5 89 73.5H61C60.0717 73.5 59.1815 73.1313 58.5251 72.4749C57.8687 71.8185 57.5 70.9283 57.5 70V55.566Z"
                  fill="black"
                />
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
                  isActive ? "bg-black text-white " : "text-black "
                }`}
              >
                <span className="relative z-10">{name}</span>
                {isActive && (
                  <span
                    className="absolute inset-0 z-0 rounded-md"
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
