import React from 'react';
import Image from 'next/image';
import blackshoes from '../assets/blackShoes.png';
import whiteshoes from "../assets/whiteShoes.png"
import whitepinkshoes from "../assets/whitepinkshoes.png"
import Link from "next/link"

const ProductPage = () => {
  return (
    <div className="flex flex-col lg:flex-row p-6 space-x-0 lg:space-x-4">

      {/* Sidebar: Navbar */}
      <div className="w-full lg:w-[250px] bg-white border-r border-gray-300">
        <ul className="list-none p-4">
          <li className="text-gray-700 mb-2">Shoes</li>
          <li className="text-gray-700 mb-2">Sports Bras</li>
          <li className="text-gray-700 mb-2">Tops & T-Shirts</li>
          <li className="text-gray-700 mb-2">Hoodies & Sweatshirts</li>
          <li className="text-gray-700 mb-2">Jackets</li>
          <li className="text-gray-700 mb-2">Trousers & Tights</li>
          <li className="text-gray-700 mb-2">Shorts</li>
          <li className="text-gray-700 mb-2">Tracksuits</li>
          <li className="text-gray-700 mb-2">Jumpsuits & Rompers</li>
          <li className="text-gray-700 mb-2">Skirts & Dresses</li>
          <li className="text-gray-700 mb-2">Socks</li>
          <li className="text-gray-700 mb-2">Accessories & Equipment</li>
        </ul>
      </div>

      {/* Vertical Separator */}
      <div className="border-l border-gray-300 h-full lg:block hidden mx-4"></div>

      {/* Product Cards */}
      <div className="flex flex-col lg:flex-row w-full lg:space-x-4 space-y-6 lg:space-y-0">
        {/* Product Card */}
        <div className="w-full lg:w-[348px] h-[348px] bg-white border border-gray-300 rounded-lg shadow-lg">
          {/* Product Image */}
          <Image 
            src={whiteshoes} 
            alt="Nike Air Force 1 Mid '07" 
            className="w-full h-[200px] object-cover" 
          />

          {/* Texts below the image */}
          <div className="p-4">
            {/* Red Text */}
            <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
            
            {/* Product Name */}
            <h1 className="text-xl font-bold mt-1">Nike Air Force 1 Mid '07</h1>
            
            {/* Category */}
            <p className="text-[#757575] text-sm mt-1">Men's Shoes</p>

            {/* Additional Category */}
            <p className="text-[#757575] text-sm mt-1">1 Colour</p>

            {/* MRP */}
            <h1 className="text-xl font-bold mt-1">MRP: ₹ 10,795.00</h1>
          </div>
        </div>

        {/* Product Card */}
        <div className="w-full lg:w-[348px] h-[348px] bg-white border border-gray-300 rounded-lg shadow-lg">
          {/* Product Image */}
          <Image 
            src={blackshoes} 
            alt="Nike Air Force 1 Mid '07" 
            className="w-full h-[200px] object-cover" 
          />

          {/* Texts below the image */}
          <div className="p-4">
            {/* Red Text */}
            <h3 className="text-red-600 text-sm font-semibold">ye text</h3>
            
            {/* Product Name */}
            <h1 className="text-[16px] font-bold mt-1">Nike Court Vision Low Next Nature</h1>
            
            {/* Category */}
            <p className="text-[#757575] text-sm mt-1">Just In</p>

            {/* Additional Category */}
            <p className="text-[#757575] text-sm mt-1">1 Colour</p>

            {/* MRP */}
            <h1 className="text-xl font-bold mt-1">MRP : ₹ 4 995.00</h1>
          </div>
        </div>

        {/* Product Card */}
        <div className="w-full lg:w-[348px] h-[348px] bg-white border border-gray-300 rounded-lg shadow-lg">
          {/* Product Image */}
          <Image 
            src={whitepinkshoes} 
            alt="Nike Air Force 1 Mid '07" 
            className="w-full h-[200px] object-cover" 
          />

          {/* Texts below the image */}
          <div className="p-4">
            {/* Red Text */}
            <Link href="/ProductDetail"><h3 className="text-red-600 text-sm font-semibold">Click here</h3></Link>
            
            {/* Product Name */}
            <h1 className="text-xl font-bold mt-1">Nike Air Force 1 Mid '07</h1>
            
            {/* Category */}
            <p className="text-[#757575] text-sm mt-1">Men's Shoes</p>

            {/* Additional Category */}
            <p className="text-[#757575] text-sm mt-1">1 Colour</p>

            {/* MRP */}
            <h1 className="text-[16px] font-bold mt-1">MRP : ₹ 8 695.00</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
