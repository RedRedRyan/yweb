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
       {/* Projects Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appList.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
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