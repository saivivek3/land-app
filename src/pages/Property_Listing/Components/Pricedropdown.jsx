// import React, { useState } from "react";

// const PriceDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedPrice, setSelectedPrice] = useState("any price");

//   const prices = ["$50", "$100", "$150", "$200"];

//   const handleSelect = (price) => {
//     setSelectedPrice(price);
//     setIsOpen(false);
//   };

//   return (
//     <div classNam ive text-left w-full md:w-auto">
//       {/* Button
//       <button
//         onClick={ tIsOpen((prev) => !prev)}
//         className tems-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
//       >
//         <span cla flex items-center">
//           <span c ="text-gray-600"></span>
//           <span c ="ml-2">{selectedPrice}</span>
//         </span>
//         <svg
//           xmlns=" ww.w3.org/2000/svg"
//           classNa w-5 text-gray-400"
//           viewBox  20"
//           fill="c lor"
//         >
//           <path
//             fillR nodd"
//             d="M5 a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
//             clipR nodd"
//           />
//         </svg>
//       </button>

//       {/* Dropdow /}
//       {isOpen &&
//         <div clas bsolute w-full z-50 right-0 mt-2 md:w-32 bg-white border border-gray-300 rounded-lg shadow-lg">
//           {prices ice) => (
//             <div
//               key
//               onC  => handleSelect(price)}
//               cla px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
//             >
//               {pr
//             </div
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Pr own;

import React from 'react';

function Pricedropdown() {
  return <div>Pricedropdown</div>;
}

export default Pricedropdown;
