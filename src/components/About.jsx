import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-5'>
          I am <b>Front-End Web Developer</b> with more than 1 year experience. As an experienced Front-End Web Developer, I have the skills to develop and improve responsive and attractive websites. I am proficient in <b>HTML, CSS, JavaScript, and frameworks such as TailwindCSS and ReactJS</b>. I have successfully completed many projects. Such as to-do list websites, inventory data collection websites, restaurant catalog websites using APIs, responsive landing page websites and many more.
        </p>
        <br />
        <p className='text-xl mt-5'>I always focus on <b>quality</b> and a good end result and make sure that the websites I create are well-accessed on different devices. I am ready to work with you to create unique and attractive websites that meet your needs.</p>
      </div>
    </div>
  )
}

export default About