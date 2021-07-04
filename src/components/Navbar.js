import React from 'react'
import { FaBars,   FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12  border-solid border-t-2 shadow-sm border-white">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid  border-b-2 border-white pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
        <Link className=" font-extrabold text-xl tracking-tight" to="/">Golabot</Link>
        </div>
        <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border-2 rounded text-black border-gray-300 hover:text-gray-600 hover:border-white">
        <FaBars className="fill-current h-3 w-3"/>
        </button>
        </div>
        </div>
        <div class="menu-full flex-row  flex-grow lg:flex lg:items-center lg:w-auto lg:px-4 px-8">
        <div className="text-md font-bold text-black lg:flex-grow">
        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text:text-white px-4 py-2 rounded hover:bg-gray-200">
        Chats 
        </Link>
        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text:text-white px-4 py-2 rounded hover:bg-gray-200">
        Blogs 
        </Link>
        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text:text-white px-4 py-2 rounded hover:bg-gray-200">
        Products 
        </Link>
        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text:text-white px-4 py-2 rounded hover:bg-gray-200">
        Download 
        </Link>
        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text:text-white px-4 py-2 rounded hover:bg-gray-200">
        Library 
        </Link>
        </div>
        <form className="mb-4 w-full md:mb-0 md:w-1/4">
        <label className="hidden" for="search-form">Search</label>
        <input className="bg-gray-50 border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="search" type="text"/>
        <button className="hidden">Submit</button>
        </form>
            <nav>
            <ul className="list-reset md:flex md:h-6 md:items-center">
            <div className="text-black flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
            <div className="cursor-pointer hover:underline">
                <p>Hello Sachin Kumar</p>
                <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>
            <div className="cursor-pointer hover:underline">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
            </div>
            
            
        <div className="relative link flex items-center">
                <span className="absolute top-0 right-9 md:right-10 h-5 w-5 bg-yellow-500 text-center rounded-full text-black font-bold">
                    0
                </span>
            <div className="relative cursor-pointer hover:underline flex items-center">
                <FaShoppingBasket className="h-9 w-9"/>
                <p class="hidden md:inline font-extrabold md:text-sm mt-2 "></p>
                </div>
            </div>
        </div>
        </ul>
        </nav>
        </div>
        
            
        </nav>
    )
}

export default Navbar;
