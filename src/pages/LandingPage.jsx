import React from 'react'
import BigWheel from '../components/BigWheel'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'



const LandingPage = () => {
  return (
      <div className='w-full bg-gray-200 relative landing-page'>
        <BigWheel />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
  )
}

export default LandingPage