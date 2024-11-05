import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'projects' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];

  return (
    // NAVBAR START
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black'>
      <div>
        <h1 className='text-5xl font-signature ml-2 tracking-wide'>Jeetu Suthar</h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200 hover:text-white'
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500 hover:text-white duration-200 md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu with Transition */}
      <ul
        className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-800 to-black 
          transform ${nav ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}
      >
        {links.map(({ id, link }) => (
          <li key={id} className='px-4 capitalize cursor-pointer py-6 text-4xl'>
            <Link to={link} smooth duration={500} onClick={() => setNav(false)}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    // NAVBAR END
  );
};

export default Navbar;
