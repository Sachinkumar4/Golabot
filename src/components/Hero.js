import React from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <div className="bg-white opacity-70 min-h-screen">
        <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="relative">
        <div className="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
        <div className=" h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
        <Link className="absolute h-full w-full object-cover" src="/"></Link>
        <div className="absolute inset-0 bg-indigo-100 opacity-75"></div>
        <FaArrowAltCircleLeft className="relative w-2 h-1"/>
        
        </div>
        <div className="relative lg:w-7/12 bg-white">
        <FaArrowAltCircleRight className="absolute h-full text-white w-24 -ml-12"/>
        <div className="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
        <p>As <strong className="text-gray-900 font-medium">Golabot</strong>Grows rapidly, using Restapi pythons and ruby api helps them scale security easily &mdash; supporting everything from getting paid by users around the world to enabling Email Gateway for customers.</p> <p className="mt-6"><Link className="font-medium text-indigo-600 hover:text-indigo-900">Lets Start!</Link></p></div>

        </div>
        
        </div>
        <div className="absolute inset-y-0 left-0 lg:flex lg:items-center">
        <button className="mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
        <FaArrowAltCircleLeft className="h-full w-full text-indigo-900"/>
        </button>

        </div> 
        <div className="absolute inset-y-0 right-0 lg:flex lg:items-center">
        <button className="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
        <FaArrowAltCircleRight className="h-full w-full text-indigo-900"/>
        </button>
        </div>
        </div>
        </div>
            
        </div>
    )
}

export default Hero;
