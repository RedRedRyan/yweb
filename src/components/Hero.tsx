import React from 'react'
import Aurora from './Aurora'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrambleTextPlugin, SplitText } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrambleTextPlugin, SplitText);

const Hero = () => {

	const isMobile = useMediaQuery({ maxWidth: 767 });
	useGSAP(() => {
		

      
		

		const heroSplit = new SplitText(".title", {
		 type: "chars, words",
		});
		
		const paragraphSplit = new SplitText(".subtitle", {
		 type: "lines",
		});
		
		// Apply text-gradient class once before animating
		heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

		gsap.fromTo(".left-leaf", { x: -600 }, { x: 0, duration: 2, ease: "power1.inOut" });

		gsap.to(".title", {
			duration : 2.5,
			scrambleText: {
				text: "ystudios",
				chars: "01",
				revealDelay: 0.2,
				tweenLength: true,
				speed: 0.1,
				newClass: "text-gradient",

			},
			ease: "power2.inOut",
			overwrite: "auto",
		});

		gsap.from(heroSplit.chars, {
		yPercent: -100,
		ease: "power1.in",
		delay: 0.5,
		duration: 1.5,
		});

		
		gsap.from(paragraphSplit.lines, {
		 opacity: 0,
		 yPercent: 100,
		 duration: 1.8,
		 ease: "expo.out",
		 stagger: 0.06,
		 delay: 1,
		});
		gsap
		.timeline({
		 scrollTrigger: {
			trigger: "#hero",
			start: "top top",
			end: "bottom top",
			scrub: true,
		 },
		})
		.to(".right-leaf", { y: 800 }, 0)
		.to(".left-leaf", { y: -200 }, 0)
		.to(".arrow", { y: 100 }, 0);
		
	});
  return (
    <section id='hero'> 
	<Aurora/>
    <h1 className='title'>ystudios</h1>

	
		
	<img
		 src="/images/flower.png"
		 alt="left-leaf"
		 className="left-leaf"
		/>
		<img
		 src="/images/shuriken.png"
		 alt="right-leaf"
		 className="right-leaf"
		/>
    <div className='body'>
    <div className="content">
		<div className="space-y-5 hidden md:block">
			
			 <p className="subtitle">
				The Only Way <br /> is Up
			 </p>
			</div>
			
			<div className="view-cocktails">
			 <p className="subtitle">
				Creating digital experiences.
			 </p>
			 <a href="#projects" className='badge'>View projects</a>
			</div>
		 </div>
	</div>
    </section>
  )
}

export default Hero