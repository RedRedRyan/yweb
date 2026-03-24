import gsap from 'gsap'
import { MorphSVGPlugin, ScrambleTextPlugin, ScrollTrigger, SplitText, ScrollSmoother, DrawSVGPlugin } from 'gsap/all'
// import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import BubbleMenu from './components/BubbleMenu'
import Projects from './components/Projects'
import { navLinks } from '../constants'
import Blog from './components/Blog'
import Contact from './components/Contact'
gsap.registerPlugin(ScrollTrigger, SplitText, MorphSVGPlugin, ScrambleTextPlugin, ScrollSmoother, DrawSVGPlugin)
const App = () => {

  
  return (
    <main>
     
      <BubbleMenu
          logo={<span style={{ fontWeight: 700 }}>RB</span>}
          items={navLinks}
          menuAriaLabel="Toggle navigation"
          menuBg="#79d700"
          menuContentColor="#111111"
          useFixedPosition={false}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
      />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact/>
      <Footer />
    </main>
  )
}

export default App