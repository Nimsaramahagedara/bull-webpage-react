import React, { useEffect } from 'react'
import cancer from '../assets/LandingPage/cancer-big.png'
import cancerTitle from '../assets/LandingPage/cancer-title.png';
import backBtn from '../assets/back-button.svg';
import { scrollInto } from '../utils/scrollInto';
import gsap from 'gsap';
const Section5 = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.fromTo('.cancer-image', {
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
    <div className='text-xl text-white bg-gradient-to-r from-[#031019] via-[#060E15] to-[#110C0D] flex flex-col lg:flex-row items-center min-h-screen pb-10 lg:pb-0 section-2 panel relative' id='cancer-section'>
      <button className='lg:w-6 w-5 aspect-square absolute top-10 left-10 z-20 hover:brightness-75' onClick={()=>scrollInto('section-1')}><img src={backBtn} className='w-full h-full object-cover' /></button>
      <div className='w-full lg:w-1/2 z-10 relative h-full'>
        <img src={cancer} alt="aries" className='w-full h-full object-contain cancer-image' />
        <img src={cancerTitle} alt="aries" className='md:w-96 w-52 absolute md:bottom-20 bottom-10 left-1/2 -translate-x-1/2' />
      </div>
      <div className='w-full lg:w-1/2 lg:px-40 px-10 z-20'>
        <h2 className='xl:text-6xl md:text-4xl text-xl font-semibold uppercase lg:mb-20 mb-5'>astronomy & astrology</h2>
        <p className='text-sm 4xl:text-xl mb-4'>It should come as no surprise that these bold rams are the first sign of the zodiac since Aries wants to be in the lead. Aries is brash and bold, therefore it makes sense that they jump into even the most difficult situations (the head is the body part connected with Aries).</p>
        <p className='text-sm 4xl:text-xl mb-4'>The cardinal sign of Aries marks the beginning of the zodiac wheel as well as the spring season. Astrologers hold that every sign absorbs the lessons—both happy and painful—learned by its predecessors. There is no innate wisdom with Aries, though; instead, they approach life with a vibrant joie de vivre that wonderfully balances their unique impulsivity. Aries is known for its naive optimism.</p>
      </div>
    </div>
  )
}

export default Section5