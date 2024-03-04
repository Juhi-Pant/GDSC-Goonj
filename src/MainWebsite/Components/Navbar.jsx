import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  return (
    <>
      <div className='relative h-12 px-5 md:px-20 my-6 bg-white/30 backdrop-filter backdrop-blur-sm flex justify-between items-center rounded-full sticky'>
        {/* Hamburger Icon for small and medium screens, placed at the extreme right */}
        <div className="text-3xl text-white cursor-pointer md:hidden " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Menu Items in a column for small and medium screens */}
        <div className={` absolute top-full right-0 mt-2 p-5 bg-white/30 backdrop-filter backdrop-blur-sm rounded-md md:bg-transparent md:p-0 md:mt-0 md:relative ${isOpen ? "flex" : "hidden"} flex-col md:flex md:flex-row gap-x-5 md:gap-x-20 text-white cursor-pointer`}>
          <div className='text-lg'>HOME</div>
          <div className='text-lg'>OBJECTIVE</div>
          <div className='text-lg'>SPEAKERS</div>
          <div className='text-lg'>SPONSORS</div>
          <div className='text-lg'>PARTNERS</div>
        </div>
      </div>

      {/* Optional: Overlay for when the menu is open on small screens */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-10" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
}

export default Navbar;
