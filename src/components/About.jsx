import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-10 sm:mt-20'>
          My name is Jeetu Suthar. I am studying BE in Computer Engineering from Sinhgad Institute of Technology and Science. I am currently in my 3rd year. I know Web Development and also practice Data Structures and Algorithms (DSA).
        </p>
        <br />
        <p className='text-xl mt-10 sm:mt-20'>
          I am passionate about technology and constantly seeking to improve my skills and knowledge. My experience in web development includes working with various technologies and frameworks to create dynamic and responsive web applications. Additionally, I enjoy solving complex problems and enhancing my problem-solving abilities through Data Structures and Algorithms.
        </p>
      </div>
    </div>
  )
}

export default About
