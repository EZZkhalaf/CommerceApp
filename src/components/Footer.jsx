


import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-5 mt-9">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-10">
        
        {/* Logo and Description Section */}
        <div className="w-full lg:w-[40%] text-center lg:text-left">
          <p className="text-2xl font-bold mb-4">LOGO</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsa et error laborum possimus repellendus deleniti labore, iusto veniam ex, provident adipisci consequuntur obcaecati tenetur omnis sit nulla minima fugiat?
          </p>
        </div>
        
        {/* Navigation Links Section */}
        <div className="w-full lg:w-[20%] flex flex-col items-center lg:items-start">
          <p className="text-lg font-bold mb-4">Done By Ezzeldeen Khalaf</p>
          <ul className="text-sm text-gray-500 space-y-2">
            <li className="hover:text-gray-700 transition-colors duration-200 cursor-pointer">Home</li>
            <li className="hover:text-gray-700 transition-colors duration-200 cursor-pointer">About</li>
            <li className="hover:text-gray-700 transition-colors duration-200 cursor-pointer">Delivery</li>
            <li className="hover:text-gray-700 transition-colors duration-200 cursor-pointer">Privacy</li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="w-full lg:w-[20%] text-center lg:text-left">
          <p className="text-lg font-bold mb-4">Message Me</p>
          <ul className="text-sm text-gray-500 space-y-2">
            <li>+962792259327</li>
            <li>ezzeldeenawni@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* i will add copy right section here when i deploy this web */}
    </footer>
  )
}

export default Footer;
