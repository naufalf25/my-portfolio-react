import React from 'react'
import countrylistapp from '../assets/portfolio/countrylistapp.png'
import sedapapps from '../assets/portfolio/sedapapps.png'
import todolist from '../assets/portfolio/todolist.png'
import huddlelandingpage from '../assets/portfolio/huddlelandingpage.png'
import introsection from '../assets/portfolio/introsection.png'
import ilmuelektro from '../assets/portfolio/ilmuelektro.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: countrylistapp,
      alt: 'countrylistapp',
      demo: 'https://naufalf25.github.io/country-list-app/',
      code: 'https://github.com/naufalf25/country-list-app',
    },
    {
      id: 2,
      src: sedapapps,
      alt: 'sedapapps',
      demo: 'https://sedapapps.netlify.app/',
      code: 'https://github.com/naufalf25/sedap-apps-restaurant-catalogue',
    },
    {
      id: 3,
      src: todolist,
      alt: 'todolist',
      demo: 'https://mytodolistapps.netlify.app/',
      code: 'https://github.com/naufalf25/Todo-Apps-using-ReactJS',
    },
    {
      id: 4,
      src: huddlelandingpage,
      alt: 'huddlelandingpage',
      demo: 'https://naufalf25.github.io/Huddle-Landing-Page/',
      code: 'https://github.com/naufalf25/Huddle-Landing-Page',
    },
    {
      id: 5,
      src: introsection,
      alt: 'introsection',
      demo: 'https://naufalf25.github.io/Intro-section-with-dropdown-navigation/',
      code: 'https://github.com/naufalf25/Intro-section-with-dropdown-navigation',
    },
    {
      id: 6,
      src: ilmuelektro,
      alt: 'ilmuelektro',
      demo: 'https://naufalf25.github.io/Ilmu-Elektro/',
      code: 'https://github.com/naufalf25/Ilmu-Elektro',
    },
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Here is some of my work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, alt, demo, code }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt={alt} className='rounded-md duration-200 hover:scale-105' />
              <div className='flex justify-center items-center text-center'>
                <a href={demo} className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105' target='_blank' rel='noreferrer'>Demo</a>
                <a href={code} className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105' target='_blank' rel='noreferrer'>Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio