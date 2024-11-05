import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className='w-full  bg-black text-white py-4 fixed bottom-0 left-0 sm:relative'>
      <div className='container mx-auto text-center'>
        {/* Social Links for Mobile */}
        <div className='flex justify-center space-x-4 lg:hidden'>
          <a href='https://linkedin.com' target='_blank' rel='noreferrer' className='text-white hover:opacity-75'>
            <FaLinkedin size={30} />
          </a>
          <a href='https://github.com/JeetuSuthar' target='_blank' rel='noreferrer' className='text-white hover:opacity-75'>
            <FaGithub size={30} />
          </a>
          <a href='mailto:jeetusuthar2315@gmail.com' target='_blank' rel='noreferrer' className='text-white hover:opacity-75'>
            <HiOutlineMail size={30} />
          </a>
          <a href='' download className='text-white hover:opacity-75'>
            <BsFillPersonLinesFill size={30} />
          </a>
          <a href='https://leetcode.com/Jeetu_Suthar' target='_blank' rel='noreferrer' className='text-white hover:opacity-75'>
            <SiLeetcode size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
