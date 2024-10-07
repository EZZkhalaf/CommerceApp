


// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { CiSearch } from 'react-icons/ci';
// import { CgAssign, CgProfile } from 'react-icons/cg';
// import { CiShoppingCart } from 'react-icons/ci';
// import { IoMdMenu } from "react-icons/io";
// import { IoIosArrowDropdown } from "react-icons/io";





// const Navigation = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu
//   const [visible , setVisible] = useState(false);
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   return (
//     <div className='flex items-center justify-between py-5 font-medium bg-slate-400 w-full fixed top-0 left-0 z-10'>
      
//       {/* the logo will be added later  */}
//       <div className='pl-6'>
//         <Link to={'/'}>
//           <h1 className='text-xl md:text-2xl'>Logo</h1>
//         </Link>
//       </div>

//       {/* Hamburger Icon for mobile */}
//       <div className='md:hidden pr-6'>
//         <button onClick={toggleMobileMenu} className='text-2xl'>
//           {/* Replace with a hamburger icon */}
//           {isMobileMenuOpen ? '✖' : '☰'}
//         </button>
//       </div>

//       {/* Navigation Links */}
//       {/* a bug with small screens when pressing the dash for the home etc eleements and wont remove then  */}
//       <div className={`flex md:flex ${isMobileMenuOpen ? 'flex-col absolute bg-slate-400 top-full left-0 w-full' : 'hidden md:flex'}`}>
//         <NavLink to='/' className='flex flex-col items-center gap-1 m-3 hover:scale-105 transition-transform duration-300'>
//           <p>Home</p>
//           <hr className='w-24 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/collection' className='flex flex-col items-center gap-1 m-3 hover:scale-105 transition-transform duration-300'>
//           <p>Collection</p>
//           <hr className='w-24 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/about' className='flex flex-col items-center gap-1 m-3 hover:scale-105 transition-transform duration-300'>
//           <p>About</p>
//           <hr className='w-24 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/contact' className='flex flex-col items-center gap-1 m-3 hover:scale-105 transition-transform duration-300'>
//           <p>Contact</p>
//           <hr className='w-24 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//       </div>

//       {/* Search and Profile buttons */}
//       <div className='flex pr-8 items-center'>
//         <div className='pr-6'>
//           <button className='hover:scale-105 hover:text-blue-500 transition-transform duration-300'>
//             <CiSearch />
//           </button>
//         </div>

//         <div className='group relative'>
//           <button className='hover:scale-105 hover:text-blue-500 transition-transform duration-300'>
//             <CgProfile />
//           </button>
//           <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
//             <div className='flex flex-col gap-2 w-40 py-3 px-5 bg-slate-200 text-gray-500 rounded'>
//               <p className='cursor-pointer hover:text-black'>my profile</p>
//               <p className='cursor-pointer hover:text-black'>Orders</p>
//               <p className='cursor-pointer hover:text-black'>Logout</p>
//             </div>
//           </div>
//         </div>

//         <div className='flex items-center pl-6 hover:scale-105'>
//           <button>
//             <CiShoppingCart className='text-2xl' />
//           </button>
//           <div>
//             <p className='bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center ml-2'>
//               10
//             </p>
//           </div>
//           {/* for small screens fix later  */}
//           {/* <img onClick={()=>setVisible(true)} src={<IoMdMenu />} className='w-5 cursor-pointer sm:hidden'/>
//           <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
//               <div className='flex flex-col text-gray-400'>
//                 <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3'>
//                   <img className='h-4 rotate-180 ' src={<IoIosArrowDropdown />} alt=''/>
//                   <p>Back</p>
//                 </div> onClick={()=>setVisible(false)}
//                 <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border ' to='/'>Home</NavLink>
//                 <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border ' to='/collection'>collection</NavLink>
//                 <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border ' to='/about'>about</NavLink>
//                 <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border ' to='/contact'>contact</NavLink>

//               </div>
//           </div> */}
          
          








//         </div>
//       </div>
//     </div>
//   );
// };


// export default Navigation;



import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { CiShoppingCart } from 'react-icons/ci';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900 text-white shadow-lg  left-0">
      <div className="flex px-6 py-4  justify-between items-center  ">
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
       

        <div className="flex items-center space-x-6 mr-[200px] ">
          <button className="text-xl hover:text-green-300 transition duration-300">
            <CiSearch />
          </button>
          <div className="relative flex">
            <button className="text-xl hover:text-white transition duration-300">
              <CgProfile />
            </button>
          </div>
          <div className="relative flex">
            <button className="text-xl hover:text-green-300 transition duration-300">
              <CiShoppingCart />
            </button>
            <span className=" top-0 right-0 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ">10</span>
          </div>
       

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-2xl">
              {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 z-40 md:hidden ">
          <div className="flex flex-col items-center mt-16 space-y-6 ">
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
