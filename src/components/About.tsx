import React from 'react'

import LogoLoop from './LogoLoop';

const About = () => {


      const imageLogos = [
        { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
        { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
        { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
      ];
  return (
    <section id='about'>
        <div className='mt-10 mb-5'>
        <h1 className='text-center font-nunito text-3xl'>About Us</h1>
        <p className='text-center'>We use</p>
        </div>
        

<div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      
{/* Vertical loop with deceleration on hover */}
{/* <LogoLoop
  logos={imageLogos}
  speed={100}
  direction="left"
  logoHeight={60}
  gap={60}
  hoverSpeed={0}
  fadeOut
/> */}
    </div>
    </section>
  )
}

export default About