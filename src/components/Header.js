import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone,  FaMailBulk, FaMapMarked } from 'react-icons/fa';
function Header() {
    return (
        <header className="text-gray-700 shadow-sm body-font border-b border-white">
        <div className="mb-2 sm:mb-0">
        <Link className="flex title-font font-extrabold text-2xl items-center text-gray-900 mb-4 md:mb-0" to="/"></Link>
        </div>
        <div className="lg:flex flex-grow items-center" id="navbar-warning">
        <ul className="flex flex-row lg:flex-row list-none ml-none ml-auto">
        <li className="nav-item">
        <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="https://www.facebook.com/skp.sachingola/"><FaFacebook className="w-4 h-4 text-lg text-black opacity-75"/></Link>
        </li>
        <li className="nav-item">
        <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/"><FaInstagram className="w-4 h-4 text-lg text-black opacity-75"/></Link>
        </li>
        <li className="nav-item">
        <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/"><FaTwitter className="w-4 h-4 text-lg text-black opacity-75"/></Link>
        </li>
        <li className="nav-item">
        <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/"><FaPhone className="w-4 h-4 text-lg text-black opacity-75"/></Link>
        </li>
        <li className="nav-item">
        <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/"><FaMailBulk className="w-4 h-4 text-lg text-black opacity-75"/></Link>
        </li>
        <li className="nav-item">
        <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/"><FaMapMarked className="w-4 h-4 text-lg text-black opacity-75"/></Link>
        </li>

        </ul>
        </div>
        </header>
    )
}

export default Header;
