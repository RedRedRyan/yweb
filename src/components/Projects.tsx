import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { appList } from "../../constants/index"
import ProjectCard from './ProjectCard';

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
 
  useGSAP(() => {
   const start = isMobile ? 'top 20%' : 'top top';
   
   const maskTimeline = gsap.timeline({
    scrollTrigger: {
     trigger: '#projects',
     start: "top top",
     end: 'bottom top',
     scrub: 1.5,
    }
   })
   const flowerTimeline = gsap.timeline({
    scrollTrigger: {
     trigger: '#projects',
     start:'top center',
     end: 'bottom top',
     scrub: 1,
     pin: true,
    }
   })
   
   maskTimeline
    .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut',y: -300, duration: 3 }, 0)
    .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut '})
    .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'})
    .to(".project-section", { opacity: 1, duration: 3, ease: 'power1.inOut', y:-200 }, 0)
    
      

      flowerTimeline
      .to(".right-star", {
        y: 480,
        x: 0,
        rotation: -180,
        ease: "power1.inOut",
        duration: 3
        
        }, 0)
      .to(".left-star", {
        y: -480,
        x: 0,
        rotation: 180,
        ease: "power1.inOut",
        duration: 3
        }, 0)
        .to(".mid-star", {
          y: 0,
          rotation: 180,
          ease: "none",
          duration: 3
          }, 0)
        
    

  })



  return (
    <section id='projects'>
      <img src="/images/flower.png" alt="mask" className="right-star" />
      <img src='/images/flower.png' className='mid-star'/>
      <img src="/images/flower.png" alt="mask" className="left-star" />
      <div className="container mx-auto h-full pt-20">

		<h2 className="will-fade">PROJECTS</h2>
		
		<div className="content">
      
       {/* Projects Grid */}
       <div id='masked-content'>
     <div className="project-grid">
          {appList.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        </div>
        
	<div>
    
  </div>
		</div>
		
		<div className="masked-container">
		 <h2 className="will-fade">Made  Y</h2>
		 <div id="masked-content">
      
      
      <p>Build It With Us</p>
        
		 </div>
		</div>
	 </div>

    </section>
  )
}

export default Projects