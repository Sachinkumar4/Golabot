import React from 'react'
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    
  </div>
 
    
  
   
    <div>
      <Link  to="/" className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"><FaBars className="fill-current w-4 h-5"/></Link>
    </div>
  
</nav>
    )
}

export default Nav;
