import React, { useEffect } from 'react';
import outerWheel from '../assets/big-wheel.svg';
import innerWheel from '../assets/small-wheel.svg';
import redBg from '../assets/wheel-red-bg.svg';
import normalBg from '../assets/wheel-bg.png';
import gsap from 'gsap';
import './Wheel.css';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const BigWheel = () => {
    useEffect(() => {
        const timeline = gsap.timeline();
        //  gsap.to('.inner-container', {delay:2,backgroundColor:'#0000', duration: 0.5, yoyo: true,})
        gsap.to('.wheel-container', { delay: 2, duration: 0.2, backgroundImage: 'url(/wheel-bg.png)' })
        timeline.to('.inner-container', {
            delay: 2, scale: 1, duration: 2, yoyo: true, ease: 'bounce', onComplete: () => {
                gsap.to('.outer-wheel', { rotate: '180', duration: 2, repeat: -1, yoyo: true, repeatDelay: 0.5 });
                gsap.to('.inner-wheel', { rotate: '-180', duration: 2, repeat: -1, yoyo: true, repeatDelay: 0.5 });
            }
        })

        const tl2 =gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                trigger: ".section-2",
                start: "top 100%",
                end: "top 0%",
                markers:true
            },
        });
        tl2.to(".wheel-container", {
            translate:'30% -30%',
            minHeight:'unset',
            top:'0px',
            right:0
          });
        tl2.to(".inner-container",{scale:1})
    }, []);

    const handleClick = () => {
        gsap.to('.inner-container', { delay: 0.5, scale: 2, opacity: 0.04, duration: 2, yoyo: true, })
        gsap.to('.wheel-container', { delay: 0.5, backgroundImage: 'none', duration: 1.5, zIndex: 0 })
    }

    return (
        <div className='fixed z-20 w-full min-h-screen flex justify-center items-center wheel-container bg-cover' style={{ backgroundImage: 'url(/wheel-red-bg.svg)' }}>
            <div className='w-full md:w-1/2 m-5 mx-auto relative inner-container scale-[200%] py-32 lg:py-0' >{/*style={{backgroundColor:'#2E0A0A'}}*/}
                <div className='rounded-full overflow-hidden'>
                    <img src={outerWheel} alt="outer-wheel" className='w-full h-full object-contain outer-wheel' />
                </div>
                <div className='rounded-full overflow-hidden absolute w-7/12 p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inner-wheel'>
                    <img src={innerWheel} alt="inner-wheel" className='w-full h-full object-contain' />
                </div>
                <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4' onClick={handleClick}></button>
            </div>
        </div>
    );
};

export default BigWheel;
