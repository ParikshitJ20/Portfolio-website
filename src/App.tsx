import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'
import { initEmailJS } from './utils/emailjs'
import './App.css'

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    // Initialize EmailJS
    initEmailJS();
    
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />

      {/* Scroll to top button */}
      <motion.button
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white-100 z-50 shadow-lg ${
          showScrollButton ? 'block' : 'hidden'
        }`}
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showScrollButton ? 1 : 0, scale: showScrollButton ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>
    </div>
  )
}

export default App
