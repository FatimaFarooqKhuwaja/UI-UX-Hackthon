import React from 'react'
import Link from "next/link"
import Image from "next/image"
import NikeLogo from "../assets/NikeLogo.png"
import searchIcon from "../assets/searchIcon.png"
import heartIcon from "../assets/heartIcon.png"
import bagIcon from "../assets/bagIcon.png"

const page = () => {
  return (
    <div>

     {/* Second Navbar */}
     <nav className="bg-white shadow-sm ">
        <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Image
             src={NikeLogo}
              alt="Logo"
               className="h-8" /> 
          </div>

          {/* Center: Navigation Links */}
          <div className=" space-x-6 hidden md:flex">
            <Link href="/home" className="text-black text-[14px] font-[600]">New & Featured</Link>
            <Link href="/shop" className="text-black text-[14px] font-[600]">Men</Link>
            <Link href="/categories" className="text-black text-[14px] font-[600]">Women</Link>
            <Link href="/deals" className="text-black text-[14px] font-[600]">Kids</Link>
            <Link href="/about" className="text-black text-[14px] font-[600]">Sale</Link>
            <Link href="/contact" className="text-black text-[14px] font-[600]">SNKRS</Link>
          </div>

          {/* Right: Icons and Search Bar */}
          <div className="flex items-center space-x-4">

                 {/* Search Bar */}
                 <div className="flex">
                 <div className="flex-shrink-0 py-[5px]">
         <Image
         className="h-7"
         src={searchIcon}
         alt="logo"
         />
        </div> 

                 <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="text-black px-4 py-[5px] rounded-full border border-gray-300"
                
              /> </div>
      
        </div>
           
           

            {/* Shopping Bag Icon */}
            <div className="flex-shrink-0">
         <Image
         className="h-7"
         src={heartIcon}
         alt="logo"
         />
        </div>

            {/* Heart Icon */}
            <Link href="/Cart"> <div className="flex-shrink-0">
             
         <Image
         className="h-7"
         src={bagIcon}
         alt="logo"
         />
        </div></Link>

       
          </div>
        </div>
      </nav>

     
     
    </div>
  )
}

export default page
