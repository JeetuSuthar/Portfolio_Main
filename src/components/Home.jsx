import React from 'react'
import HeroImage from "../assets/heroImage.jpg";
import {MdKeyboardArrowRight} from "react-icons/md"
import heroimg from "../assets/skill1.gif"
import mm from "../assets/mm.png";
const Home = () => {
  return (
    <div name="home" className=' h-screen bg-gradient-to-b from-black via-black to bg-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col mb-11  justify-center'>
                <h2 className='text-white text-4xl font-bold sm:text-7xl'> I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>I have a passion for web design and love to Develop web applications .
                I know how to create your website to run across devices using the latest technologies available
                </p>
 
                <div>
                    <button className=' group text-white w-fit  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to bg-indigo-700 cursor-pointer'>
                        Portfolio 
                        <span className=' group-hover:rotate-90 duration-300 '>
                        <MdKeyboardArrowRight size={25} 
                        className='ml-1 '/>
                        </span>
                        
                    </button>
                </div>
            </div>
            <div>
                <img className='rounded-full  mx-auto md:w-full  w-2/3 ' src={mm} alt="My profile" />
            </div>
        </div>
      
    </div>
  )
}

export default Home
