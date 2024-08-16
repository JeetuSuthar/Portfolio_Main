import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='font-bold text-4xl inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me </p>

        </div>
        <div className='flex justify-center items-center'>
            <form className='flex flex-col w-full md:w-1/2' action="https://getform.io/f/bvrezkdb" method='POST'>
               
                <input type="text" name="name" placeholder='Enter Your Name ' id="" className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input type="email" name="email" placeholder='Enter Your Mail ' id="" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />  
                <textarea name="message" rows={10} placeholder='Enter your message here ' className='p-2 bg-transparent border-2 rounded-md my-4 text-white focus:outline-none ' id=""></textarea>          
                 <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md my-8 mx-auto flex items-center hover:scale-110 duration-300'>Let's Talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
