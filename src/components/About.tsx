import React from 'react'
import FlowingMenu from './FlowingMenu';
const About = () => {
    const demoItems = [
        { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
        { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
        { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
        { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
      ];
  return (
    <section id='about'>
        <div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems}
  speed={15}
  textColor="#ffffff"
  bgColor="#060010"
  marqueeBgColor="#ffffff"
  marqueeTextColor="#060010"
  borderColor="#ffffff"
/>
</div>

    </section>
  )
}

export default About