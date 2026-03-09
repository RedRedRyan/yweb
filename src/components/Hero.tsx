import React from 'react'


const Hero = () => {
  return (
    <section id='hero'> 
    <h1>ystudios</h1>
    <div className='body'>
    <div className="content">
		<div className="space-y-5 hidden md:block">
			 <p>Silicon Savannah ?</p>
			 <p className="subtitle">
				The Only Way <br /> is Up
			 </p>
			</div>
			
			<div className="view-cocktails">
			 <p className="subtitle">
				Creating digital experiences and designing solutions from AI to business Software
			 </p>
			 <a href="#projects">View projects</a>
			</div>
		 </div>
	</div>
    </section>
  )
}

export default Hero