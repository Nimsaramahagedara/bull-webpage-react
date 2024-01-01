import React from 'react'
import cancer from '../assets/LandingPage/cancer-big.png'
import cancerTitle from '../assets/LandingPage/cancer-title.png';

const Section5 = () => {
  return (
    <div className='text-xl text-white bg-gradient-to-r from-[#031019] via-[#060E15] to-[#110C0D] flex flex-col lg:flex-row items-center z-10 min-h-screen section-2 panel' id='cancer-section'>
      <div className='w-full lg:w-1/2 z-10 relative h-full'>
        <img src={cancer} alt="aries" className='w-full h-full object-contain' />
        <img src={cancerTitle} alt="aries" className='md:w-96 w-52 absolute md:bottom-20 bottom-10 left-1/2 -translate-x-1/2' />
      </div>
      <div className='w-full lg:w-1/2 lg:px-40 px-10 z-10'>
        <h2 className='xl:text-6xl md:text-4xl text-xl font-semibold uppercase mb-20'>astronomy & astrology</h2>
        <p className='text-sm 4xl:text-xl mb-4'>It should come as no surprise that these bold rams are the first sign of the zodiac since Aries wants to be in the lead. Aries is brash and bold, therefore it makes sense that they jump into even the most difficult situations (the head is the body part connected with Aries).</p>
        <p className='text-sm 4xl:text-xl mb-4'>The cardinal sign of Aries marks the beginning of the zodiac wheel as well as the spring season. Astrologers hold that every sign absorbs the lessons—both happy and painful—learned by its predecessors. There is no innate wisdom with Aries, though; instead, they approach life with a vibrant joie de vivre that wonderfully balances their unique impulsivity. Aries is known for its naive optimism.</p>
      </div>
    </div>
  )
}

export default Section5