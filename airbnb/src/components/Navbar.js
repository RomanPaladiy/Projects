import React from 'react';
import logo from '../assets/logo.jpg';
import { GiWorld } from 'react-icons/gi';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';


const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b">
        {/* Left */}
        <div className=" w-40 flex">
            <img src={logo} className="
            object-cover " />
        </div>
        {/* Middle */}
        <div className="flex justify-center items-center relative shadow-sm
         shadow-gray-400 border rounded-full">
          <input type= "search" 
          placeholder="" className="py-2.5 w-[20rem] rounded-full outline-0"/>
          <div className=" flex justify-between absolute w-full
           pr-16 pl-7 font-semibold text-gray-600">
            <button className="w-full">Place</button>
            <button className=" border-l border-x px-6">Time</button>
            <button className="w-full text-gray-600/60
            pl-2">Group Size</button>
          </div>
          <div className="bg-[#ff5a60] p-2 rounded-full mr-2">
            <FiSearch className="text-white" />
          </div>
        </div>
        {/* Right */}
        <div className="flex  items-center
        pr-4 font-semibold text-gray-600">
          <p>Rent Your Home</p>
          <GiWorld className="mx-4" />
          <div className="flex items-center border px-4 py-2 rounded-full gap-3">
            <FiMenu className="text-[19px]" />
            <BiUser className="text-[19px]" />
          </div>

        </div>
    </div>
  )
}

export default Navbar