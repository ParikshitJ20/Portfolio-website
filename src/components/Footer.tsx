import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { navLinks, socialLinks } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Map for social media icons
  const socialIcons: { [key: string]: React.ReactElement } = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    twitter: <FaTwitter />,
    mail: <FaEnvelope />,
  };

  return (
    <footer className="bg-black-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold gradient-text mb-4">Portfolio</h2>
            <p className="text-secondary mb-6 max-w-md">
              A passionate developer focused on creating exceptional digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white-100 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {socialIcons[link.icon]}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-secondary hover:text-white-100 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-secondary">
              <li>Pune, MH</li>
              <li>parikshitjayale20@gmail.com</li>
              <li>+91 7666116153</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-tertiary pt-8 mt-8 text-center text-secondary text-sm">
          <p>
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <p className="mt-2">
            Designed and built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 