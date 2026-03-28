import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'
import ScrollReveal from './ScrollReveal';
import Carousel from './Carousel';
import { techLogos } from '../../constants/index';
import LogoLoop from './LogoLoop';

const About = () => {


 useGSAP(() => {
	const titleSplit = SplitText.create('#about h2', {
	 type: 'words'
	})
	
	const artTimeline = gsap.timeline({
		trigger: "#about",
		start: 'top center',
		repeat: -1,
		yoyo: true,
		defaults: { ease: 'power1.inOut', duration: 4 },
	})
	artTimeline
	.set('#svg-stage', { opacity: 1 })
  	.from('path', { drawSVG:'0% 0%' })
  	.to('path', { drawSVG:'100% 100%' })
	
	const riseTimeline = gsap.timeline({
		scrollTrigger: {
		trigger: '#about',
		scrub: true,
		}
	})
	riseTimeline
	.to(".about-header", { y: -200, ease: 'sine.inOut'}, 0)
	.fromTo("#svg-stage", { y: 200 }, { y: -400, ease: 'sine.inOut'}, 0)

	const scrollTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#about',
		start: 'top center'
	 }
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5')
 })
 
 return (

	<div id="about">
				<svg
					id="svg-stage"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-1 -1 103 103"
					fill="none"
					strokeWidth="2.2"
					opacity={0}
					className='about-art'
					>
					<defs>
						<linearGradient id="grad-1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
						<stop offset="0.2" stopColor="#2C026B" />
						<stop offset="0.8" stopColor="#5e00d7" />
						</linearGradient>
					</defs>
					<path stroke="url(#grad-1)" d="M50.5 50.5h50v50s-19.2 1.3-37.2-16.7S56 35.4 35.5 15.5C18.5-1 .5.5.5.5v50h50s25.6-.6 38-18 12-32 12-32h-50v100H.5S.2 80.7 11.8 68.2 40 49.7 50.5 50.5Z" />
				</svg>
		<div className='flex items-center justify-between mb-10 gap-5  p-5 flex-col md:flex-row'>

		<div className=''>
			
						<h2 className='about-header'>About <br/> Us</h2>

								
		</div>

		<div className='xl:w-2/3  md:w-full' >
		<ScrollReveal
  baseOpacity={0.1}
  enableBlur
  baseRotation={3}
  blurStrength={4}
>
In the heart of the Silicon Savannah,
 four alumni from The Multimedia University of Kenya decided to blur the lines between technology and art.
 Diverse talent, this is Y.
</ScrollReveal>
		</div>
		
		</div>
	 
	 
	 <div className="top-grid">
		
		
		<div className="md:col-span-3 bg-green">
			<div  className="info1" />
		 	<Carousel
			baseWidth={300}
			autoplay={true}
			autoplayDelay={3000}
			pauseOnHover={false}
			loop={true}
			round={false}
			/>

		</div>
		<div className='md:col-span-9 bg-white'>
			<h1 className='text-green text-6xl font-arvo text-center py-4'>Tools</h1>
		<div style={{ height: '200px', position: 'relative', overflow: 'hidden'}} >
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="right"
        logoHeight={80}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="white"
        ariaLabel="Technology partners"
      />
	  </div>

		</div>
		
		
	 	</div>
	 
	 
	</div>
 )
}
export default About