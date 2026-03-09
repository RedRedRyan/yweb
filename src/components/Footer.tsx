import React from 'react'

const Footer = () => {
  return (
    <section id="footer">
    <div className='footer-grid'>
		<div className="md:col-span-3">
		 <div  className="info1" />
         <h1>ystudios</h1>
		 
		</div>
		
		<div className="md:col-span-3">
		 <div  className="info2" />
            <h1>Contact Us</h1>
		</div>
        
		
		
     </div>
     <div className='w-full'>
     <p className='text-[white]'>&copy; {new Date().getFullYear()} YStudios. All Rights Reserved.</p>
        </div>
    </section>
  )
}

export default Footer