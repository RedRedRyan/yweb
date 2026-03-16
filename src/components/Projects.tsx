import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
 
  useGSAP(() => {
   const start = isMobile ? 'top 20%' : 'top top';
   
   const maskTimeline = gsap.timeline({
    scrollTrigger: {
     trigger: '#projects',
     start,
     end: 'bottom center',
     scrub: 1.5,
     pin: true
    }
   })
   
   maskTimeline
    .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
    .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut '})
    .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'})
  })
  return (
    <section id='projects'>
      <div className="container mx-auto h-full pt-20">
		<h2 className="will-fade">PROJECTS</h2>
		
		<div className="content">
		 {/* <ul className="space-y-4 will-fade">
			{goodLists.map((feature, index) => (
			 <li key={index} className="flex items-center gap-2">
				<img src="/images/check.png" alt="check" />
				<p>{feature}</p>
			 </li>
			))}
		 </ul> */}
		 
		 
		 
		 {/* <ul className="space-y-4 will-fade">
			{featureLists.map((feature, index) => (
			 <li key={index} className="flex items-center justify-start gap-2">
				<img src="/images/check.png" alt="check" />
				<p className="md:w-fit w-60">{feature}</p>
			 </li>
			))}
		 </ul> */}
		</div>
		
		<div className="masked-container">
		 <h2 className="will-fade">Made with Y</h2>
		 <div id="masked-content">
			<h3>Made with Craft, Poured with Passion</h3>
			<p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
		 </div>
		</div>
	 </div>

    </section>
  )
}

export default Projects