import React from 'react'
import HeroImage from '../assets/heroimage.png'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white'>
            I'm a Front-End Web Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I have 1 years of experience building web applications. I very love to build web application using technology like Webpack, ReactJS, and TailwindCSS.
          </p>
          <div>
            <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio 
              <span className='group-hover:translate-x-1 duration-300'>
                <HiArrowNarrowRight size={20} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-3/4 md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home