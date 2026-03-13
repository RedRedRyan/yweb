import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'
import ScrollReveal from './ScrollReveal';

const About = () => {
 useGSAP(() => {
	const titleSplit = SplitText.create('#about h2', {
	 type: 'words'
	})
	
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
		<div className='flex items-center justify-between mb-10 gap-5'>

		<div className=''>
						<h2 className='text-4xl font-bold text-purple md:w-full xl:text-6xl'>About <br/> Us</h2>
		</div>

		<div className='xl:w-2/3  md:w-full' >
		<ScrollReveal
  baseOpacity={0.1}
  enableBlur
  baseRotation={3}
  blurStrength={4}
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>
		</div>
		
		</div>
	 
	 
	 <div className="top-grid">
		
		
		<div className="md:col-span-9 bg-green">
		 <div  className="info1" />
		 

		</div>
		
		<div className="md:col-span-3">
		 <div  className="noisy" />
		 <img src="/images/abt5.png" alt="grid-img-5" />
		</div>
	 </div>
	 
	 <div className="bottom-grid">
		<div className="md:col-span-8">
		 <div  className="noisy" />
		 <img src="/images/abt3.png" alt="grid-img-3" />
		</div>
		
		<div className="md:col-span-4">
		 <div  className="noisy" />
		 <img src="/images/abt4.png" alt="grid-img-4" />
		</div>
	 </div>
	 
	</div>
 )
}
export default About