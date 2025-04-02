import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const typedElement = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        'Full Stack Developer',
        'Frontend Developer',
        'Blockchain Developer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute w-full h-full inset-0 overflow-hidden">
        <div className="absolute top-60 left-20 w-48 h-48 bg-purple-600/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl text-secondary mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Parikshit Jayale</h1>
            <div className="text-2xl md:text-3xl text-secondary mb-8">
              <span>I'm a </span>
              <span ref={typedElement} className="text-white-100"></span>
            </div>

            <p className="text-lg md:text-xl text-secondary mb-10 max-w-2xl mx-auto">
              Building beautiful, responsive, and user-friendly web applications with modern technologies.
              Specializing in frontend development, blockchain solutions, and cybersecurity.
            </p>

            <div className="flex items-center justify-center gap-4 mb-16">
              <motion.a
                href="https://github.com/ParikshitJ20"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <FaGithub className="text-xl" /> GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/parikshit-jayale-254195231/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <FaLinkedin className="text-xl" /> LinkedIn
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center"
          >
            <a
              href="#about"
              className="animate-bounce inline-block p-3 rounded-full bg-tertiary hover:bg-tertiary/80 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 