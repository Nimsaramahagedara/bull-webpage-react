import React, { useEffect } from 'react'
import leo from '../assets/LandingPage/leo-big.png'
import leoTitle from '../assets/LandingPage/leo-title.png';
import backBtn from '../assets/back-button.svg';
import { scrollInto } from '../utils/scrollInto';
import gsap from 'gsap';

const Section4 = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.fromTo('.leo-image', {
      filter: 'brightness(90%)',
    }, {
      filter: 'brightness(120%)',
      duration: 1,
      ease: 'power2.out',
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className='text-xl text-white flex flex-col lg:flex-row items-center min-h-screen section-2 bg-gradient-to-b from-[#0D0C10] to-[#0D0C11] via-[#0B0B13] relative panel ' id='leo-section'>
      <button className='lg:w-6 w-5 aspect-square absolute top-10 left-10 z-20 hover:brightness-75' onClick={()=>scrollInto('section-1')}><img src={backBtn} className='w-full h-full object-cover' /></button>
      <div className='w-full lg:w-1/2 z-10 relative h-full'>
        <img src={leo} alt="aries" className='w-full h-full object-contain leo-image' />
        <img src={leoTitle} alt="aries" className='md:w-80 w-32 absolute md:bottom-20 bottom-10 left-1/2 -translate-x-1/2' />
      </div>
      <div className='w-full lg:w-1/2 lg:px-40 px-10 z-20'>
        <h2 className='xl:text-6xl md:text-4xl text-xl font-semibold uppercase lg:mb-20 mb-5'>astronomy & astrology</h2>
        <p className='text-sm 4xl:text-xl mb-4'>It should come as no surprise that these bold rams are the first sign of the zodiac since Aries wants to be in the lead. Aries is brash and bold, therefore it makes sense that they jump into even the most difficult situations (the head is the body part connected with Aries).</p>
        <p className='text-sm 4xl:text-xl mb-4'>The cardinal sign of Aries marks the beginning of the zodiac wheel as well as the spring season. Astrologers hold that every sign absorbs the lessons—both happy and painful—learned by its predecessors. There is no innate wisdom with Aries, though; instead, they approach life with a vibrant joie de vivre that wonderfully balances their unique impulsivity. Aries is known for its naive optimism.</p>
      </div>
    </div>
  )
}

export default Section4