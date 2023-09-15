import React from "react";
import { Link } from "react-router-dom";


const Navbar = () =>{

   return (
      <>
        <nav className="navbar flex items-center justify-start bg-lime-950 w-full">
            <div className="logo flex">
                <img className="image w-16 h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/2560px-R_logo.svg.png"/>
                <h1 className="text-white">Ramsmujh</h1>
            </div>
            <ul className="flex items-center justify-between">
               <li className="text-white"><Link to='/service'>service</Link></li>
               <li className="text-white"><Link to='/About'>About</Link></li>
               <li className="text-white"><Link to='/Register'>Register</Link></li>
               <li className="text-white"><Link to='/Login'>Login</Link></li>
               <li className="text-white"><Link to='/Logout'>Logout</Link></li>
            </ul>
        </nav>
      </>
   )
}

export default Navbar