import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeWrite = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Seorang React Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Seorang Next JS Developer',
        1000,
        'Seorang Full Stack Developer',
        1000,
        'Seorang Web Design',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-black dark:text-white font-bold '
    />
  )
}

export default TypeWrite