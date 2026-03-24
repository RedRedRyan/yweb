import React from 'react'
import { mockBlogs } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

type BlogPost = {
  id: string | number
  title: string
  author: string
  image: string
  description: string
  date: string
}

const Blog: React.FC = () => {
  useGSAP(() => {
    
    

    const blogTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#blog',
        start: 'top 80%',
        end: 'bottom top',
        scrub: 1,
      },
    })


  })
 

  return (
    <section id='blog'>
      <div className='blog-grid'>
        <div className='md:col-span-8 bg-transparent rounded-3xl p-8 flex items-center justify-center'>
        <div id="smooth-wrapper">
		<div id="smooth-content">
		
		</div>
	</div>
          <h2 className='text-right text-4xl font-bold text-green md:w-full xl:text-6xl'>
            Our <br /> Blog
          </h2>
        </div>

        {mockBlogs.map((blog: BlogPost) => (
          <div key={blog.id} className='blog-card'>
            
            <h3 className='blog-title'>{blog.title}</h3>
            <span className='blog-author'>By {blog.author}</span>
            <div className='blog-image-container'>
              <div className='blog-image'>
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className='blog-overlay'>
                <div className='overlay-content'>
                  <p className='blog-description'>{blog.description}</p>
                </div>
                <div className='overlay-meta'>
                  <span className='blog-date'>{blog.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog