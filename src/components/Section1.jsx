import React, { useEffect } from 'react'
import aries from '../assets/Aries.png';
import cancer from '../assets/Cancer.png';
import leo from '../assets/Leo.png';
import taurus from '../assets/Taurus.png';
import gsap from 'gsap';

const Section1 = () => {
    const scrollInto=(target)=>{
        const targetElement = document.getElementById(target);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest',duration:8000 });
        }
    }

    const handleExpandCards = () => {
        gsap.to('.aries', { left: '33%', top: '20%', duration: 2, ease: 'back.inOut', yoyo: true })
        gsap.to('.leo', { left: '120%', top: '35%', duration: 2, ease: 'back.inOut', yoyo: true })
        gsap.to('.taurus', { left: '70%', top: '-10%', duration: 2, ease: 'back.inOut', yoyo: true })
        gsap.to('.cancer', { left: '-30%', top: '5%', duration: 2, ease: 'back.inOut', yoyo: true })
    }

    return (
        <div className='flex items-center lg:flex-row flex-col-reverse justify-center xl:px-32 z-10 red-bg bg-no-repeat bg-cover min-h-screen panel'>
            <div className='w-full z-10 flex flex-col xl:space-y-5 space-y-1 lg:px-0 px-10 xl:my-0 my-10'>
                <h6 className='text-red-700 md:text-md text-sm font-bold'>ABOUT US</h6>
                <h1 className='text-white xl:text-6xl md:text-4xl text-xl font-semibold uppercase'>Learn <br />everything by<br />yourself using<br />Astrology</h1>
                <p className='text-white text-xs 4xl:text-xl'>Astrology encompasses various forms of divination. That assert to be<br />able to decipher information regarding occurrences on Earth and<br />human affairs by examining the apparent positions of celestial<br />objects.</p>
                <button className='md:py-4 md:px-8 px-4 py-2 bg-red-700 text-white w-max hover:bg-red-800'>Let's started</button>
            </div>
            <div className='w-full z-10'>
                <div className='w-1/3 relative h-full mx-auto' onMouseEnter={handleExpandCards} onTouchStart={handleExpandCards}>
                    <img src={aries} alt="aries" className='w-full h-full object-contain invisible' />

                    <img src={taurus} alt="aries" className='w-full h-full object-contain absolute top-0 left-1/2 transform -translate-x-1/2 taurus  cursor-pointer hover:brightness-125' onClick={()=> scrollInto('taurus-section')} />
                    <img src={cancer} alt="aries" className='w-full h-full object-contain absolute top-0 left-1/2 transform -translate-x-1/2 cancer cursor-pointer hover:brightness-125' onClick={()=> scrollInto('cancer-section')} />
                    <img src={leo} alt="aries" className='w-full h-full object-contain absolute top-0 left-1/2 transform -translate-x-1/2 leo cursor-pointer hover:brightness-125' onClick={()=> scrollInto('leo-section')} />
                    <img src={aries} alt="aries" className='w-full h-full object-contain absolute top-0 left-1/2 transform -translate-x-1/2 aries cursor-pointer hover:brightness-125' onClick={()=> scrollInto('aries-section')} />
                </div>
            </div>
        </div>
    )
}

export default Section1