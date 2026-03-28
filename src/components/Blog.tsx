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
  link: string
}

const Blog: React.FC = () => {
  useGSAP(() => {
    
    

    gsap.timeline({
      scrollTrigger: {
        trigger: '#blog',
        start: 'top 80%',
        end: 'bottom top',
        scrub: 1,
      },
    })

    gsap.to(".box", {
      keyframes: {
        y: [0, 180, 60, 10, 0],
        ease: "none", // <- ease across the entire set of keyframes (defaults to the one defined in the tween, or "none" if one isn't defined there)
        easeEach: "bounce", // <- ease between each keyframe (defaults to "power1.inOut")

      },
      rotate: 360,
      ease: "elastic", // <- the "normal" part of the tween. In this case, it affects "rotate" because it's outside the keyframes
      duration: 5,
      stagger: 0.2,
      repeat: -1,
    });
    
  })
 

  return (
    <section id='blog'>
      <div className='blog-grid'>
        <div className='md:col-span-4  rounded-3xl p-8 flex items-center justify-center'>
            <div className="box"><h2 className='text-center mt-3 text-4xl font-bold text-white md:w-full xl:text-6xl'>
                Our
              </h2></div>
            <div className="box"><h2 className='text-center mt-3 text-4xl font-bold text-white md:w-full xl:text-6xl'>
                Blog
              </h2></div>  
        </div>

        {mockBlogs.map((blog: BlogPost) => (
          <a key={blog.id} className='blog-card md:col-span-2' href={blog.link}>
            
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
          </a>
        ))}
      </div>
    </section>
  )
}

export default Blog
