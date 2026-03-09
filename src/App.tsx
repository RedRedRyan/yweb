import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
// import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import BubbleMenu from './components/BubbleMenu'
import Projects from './components/Projects'
import { navLinks } from '../constants'

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {

  
  return (
    <main>
     
      <BubbleMenu
          logo={<span style={{ fontWeight: 700 }}>RB</span>}
          items={navLinks}
          menuAriaLabel="Toggle navigation"
          menuBg="#5e00d7"
          menuContentColor="#111111"
          useFixedPosition={false}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
      />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}

export default App