import React from 'react';
import Image from "next/image";
import deleverIcon from "../assets/deleverIcon.png";
import heartIcon from "../assets/heartIcon.png";
import deleteIcon from "../assets/deleteIcon.png";
import gearupImg1 from "../assets/gearupImg1.png";
import blackshoes from "../assets/blackShoes.png";

const Checkout = () => {
  return (
    <div className="w-full h-auto bg-[#ffffff] py-10 px-4 place-items-center ">

      {/* Main Flex Container */}
      <div className="lg:flex justify-around gap-8 items-start max-w-screen-xl mx-auto ">

        {/* Left Section */}
        <div className="w-full max-w-[450px] text-[#111111] lg:flex-[0.65]">
          <h1 className="text-[18px] font-[600]">How would you like to get your order?</h1>
          <p className="text-[15px] font-[400] mt-2 text-[#757575]">
            Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More
          </p>

          {/* Delivery Option */}
          <div className="w-full flex gap-[10px] sm:w-1/2 p-2 border-2 border-gray-300 rounded-md mt-6">
            <Image src={deleverIcon} alt="delever Icon" width={18} height={18} />
            <span className="text-[14px] font-[500] w-full">Deliver It</span>
          </div>

          <h1 className="text-[21px] font-[500] pt-[15px]">Enter your name and address:</h1>
          {/* Input Fields */}
          <div className="mt-4">
            <input
              type="text"
              id="first-name"
              name="first-name"
              className=" w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="First Name"
            />
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last Name"
            />
            <input
              type="text"
              id="address-line-1"
              name="address-line-1"
              className="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Address Line 1"
            />
            <p className="text-[#757575] text-[14px] font-[500] mt-2 ">We do not ship to P.O. Boxes</p>
            <input
              type="text"
              id="address-line-2"
              name="address-line-2"
              className="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Address Line 2"
            />
            <input
              type="text"
              id="address-line-3"
              name="address-line-3"
              className="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Address Line 3"
            />
            <div className="flex space-x-4 mt-4">
              <div className="w-full sm:w-1/2 p-3 border-2 border-gray-300 rounded-md text-center">
                <span className="text-sm text-gray-700">Postal Code</span>
              </div>
              <div className="w-full sm:w-1/2 p-3 border-2 border-gray-300 rounded-md text-center">
                <span className="text-sm text-gray-700">Locality</span>
              </div>
            </div>

            {/* State/Territory */}

            <div className="flex space-x-4 mt-4">
              <select
                id="state-territory"
                name="state-territory"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>State/Territory</option>
              </select>
              <div className="w-full sm:w-1/2 p-3 border-2 border-gray-300 rounded-md text-center">
                <span className="text-sm text-gray-700">India</span>
              </div>
            </div>

            {/* cheak boxes */}

            <div className="flex items-center justify-between mb-6 mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                />
                <label htmlFor="newsletter" className="text-sm text-[#8D8D8D]">Save this address to my profile</label>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6 mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                />
                <label htmlFor="newsletter" className="text-sm text-[#8D8D8D]">Make this my preferred address</label>
              </div>
            </div>

            {/* personal contact information */}

            <h1 className="text-[21px] font-[500] pt-[15px]">What's your contact information?</h1>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
            <p className="text-[#757575]">A confirmation email will be sent after checkout</p>
            <input
              type="number"
              id="password"
              name="phonenumber"
              className="w-full p-3 mt-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone Number"
            />
            <p className="text-[#757575] text-[14px] font-[500]">A carrier might contact you to confirm delivery.</p>
          </div>
            
            {/* PAN */}

          <h1 className="text-[21px] font-[500] pt-[18px]">What's your PaN?</h1>
          <input
            type="text"
            id="PAN"
            name="PAN"
            className="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="PAN"
          />
            <p className="text-[#757575] text-[14px] font-[500]">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>


          {/* cheak boxes of PAN */}

<div className="flex items-center justify-between mb-6 mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                />
                <label htmlFor="newsletter" className="text-sm text-[#8D8D8D]">Save PAN details to Nike Profile</label>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6 mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                />
                <label htmlFor="newsletter" className="text-sm text-[#8D8D8D]">I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</label>
              </div>
            </div>

          {/* button */}

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-[#F5F5F5] text-[#757575] text-lg font-semibold rounded-[25px] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
           Continue
          </button>

          <div className="border-t border-gray-300 mb-4"></div>
          <h1 className="text-[16px] text-[700] mt-[20px]">Delivery</h1>

          <div className="border-t border-gray-300 mb-4"></div>
          <h1 className="text-[16px] text-[600] mt-[17px]">Shipping</h1>

          <div className="border-t border-gray-300 mb-4"></div>
          <h1 className="text-[16px] text-[600] mt-[17px]">Billing</h1>

          <div className="border-t border-gray-300 mb-4"></div>
          <h1 className="text-[16px] text-[600] mt-[17px]">Payment</h1>

        </div>















        {/* Right Section */}
        <div className="w-full max-w-[300px] text-[#111111] lg:flex-[0.35] mt-6 lg:mt-0">
          {/* Summary Section */}
          <h2 className="text-[20px] font-semibold mb-4">Order Summary</h2>

          {/* Subtotal */}
          <div className="flex justify-between text-[16px] font-[400] mb-4">
            <p>Subtotal</p>
            <p>₹ 20 890.00</p>
          </div>

          {/* Estimated Delivery & Handling */}
          <div className="flex justify-between text-[16px] font-[400] mb-4">
            <p>Delivery/Shipping</p>
            <p>Free</p>
          </div>

          {/* Horizontal Line */}
          <div className="border-t border-gray-300 mb-4"></div>

          {/* Total */}
          <div className="flex justify-between text-[16px] font-[600] mb-4">
            <p>Total</p>
            <p>₹ 20 890.00</p>
          </div>
          <p>(The total reflects the price of your order, including all duties and taxes)</p>

          {/* Horizontal Line */}
          <div className="border-t border-gray-300 mb-6"></div>

          {/* Product Item */}
          <div className="flex items-center gap-4 mb-6">
            <Image src={gearupImg1} alt="Product" className="object-cover h-[180px] w-[180px]" />
            <div>
              <div className="flex justify-between">
                <h3 className="text-[18px] font-[700] pt-[40px]">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <p className="text-[16px] font-[600] pt-[40px]">MRP: ₹ 3 895.00</p>
              </div>
              <p className="text-[15px] mt-1 text-[#757575]">Men's Short-Sleeve Running Top <br /> Ashen Slate/Cobalt Bliss</p>
              <p className="text-[15px] mt-1 text-[#757575]"><span>Size L</span> <span>Quantity 1</span></p>

              {/* Heart and Delete Icons */}
              <div className="flex gap-4 mt-4 items-center">
                <Image src={heartIcon} alt="Heart Icon" width={18} height={18} />
                <Image src={deleteIcon} alt="Delete Icon" width={18} height={18} />
              </div>
            </div>
          </div>

          {/* Product Item */}
          <div className="flex items-center gap-4 mb-6">
            <Image src={blackshoes} alt="Product" className="object-cover h-[180px] w-[180px]" />
            <div>
              <div className="flex justify-between">
                <h3 className="text-[18px] font-[700]">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <p className="text-[16px] font-[600]">MRP: ₹ 3 895.00</p>
              </div>
              <p className="text-[15px] mt-1 text-[#757575]">Men's Short-Sleeve Running Top <br /> Ashen Slate/Cobalt Bliss</p>
              <p className="text-[15px] mt-1 text-[#757575]"><span>Size L</span> <span>Quantity 1</span></p>

              {/* Heart and Delete Icons */}
              <div className="flex gap-4 mt-4 items-center">
                <Image src={heartIcon} alt="Heart Icon" width={18} height={18} />
                <Image src={deleteIcon} alt="Delete Icon" width={18} height={18} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;
