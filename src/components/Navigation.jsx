

import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { CiShoppingCart } from 'react-icons/ci';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { ShopContext } from '../Context/shopContext';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {showSearch , setShowSearch} = useContext(ShopContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900 text-white shadow-lg left-0">
      <div className="flex px-6 py-4 justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="text-green-500 hover:text-green-300 transition duration-300">BrandLogo</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink exact to="/" activeClassName="text-green-400" className="hover:text-green-300 transition duration-300">
            Home
          </NavLink>
          <NavLink to="/collection" activeClassName="text-green-400" className="hover:text-green-300 transition duration-300">
            Collection
          </NavLink>
          <NavLink to="/about" activeClassName="text-green-400" className="hover:text-green-300 transition duration-300">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="text-green-400" className="hover:text-green-300 transition duration-300">
            Contact
          </NavLink>
        </div>

        {/* Icons (Search, Profile, Cart) */}
        <div className="flex items-center space-x-6">
            <button 
              onClick={() => setShowSearch(true)}
              className="text-xl hover:bg-white hover:text-green-300 transition duration-300 rounded-md p-2">
                <CiSearch className="transition duration-300 hover:text-black" />
            </button>
        <div className="relative flex">
            <button 
                className="text-xl hover:bg-white transition duration-300 rounded-md p-2" >
                  <CgProfile className="transition duration-300 hover:text-black" />
            </button>
        </div>
        <div className="relative flex">
            <button 
                className="text-xl hover:bg-white hover:text-green-300 transition duration-300 rounded-md p-2">
                  <CiShoppingCart className="transition duration-300 hover:text-black" />
            </button>
            <span className="absolute top-0 right-0 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center bg-red-500">10</span>
        </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-2xl focus:outline-none">
              {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-gray-900 z-50 h-screen md:hidden">
          <div className="flex flex-col items-center mt-16 space-y-6">
            <NavLink exact to="/" onClick={toggleMobileMenu} className="text-white hover:text-green-300 text-lg">
              Home
            </NavLink>
            <NavLink to="/collection" onClick={toggleMobileMenu} className="text-white hover:text-green-300 text-lg">
              Collection
            </NavLink>
            <NavLink to="/about" onClick={toggleMobileMenu} className="text-white hover:text-green-300 text-lg">
              About
            </NavLink>
            <NavLink to="/contact" onClick={toggleMobileMenu} className="text-white hover:text-green-300 text-lg">
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
