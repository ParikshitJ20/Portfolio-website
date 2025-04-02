import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { socialLinks } from '../constants';
import emailjs from '@emailjs/browser';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope, 
  FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt
} from 'react-icons/fa';

// Map for social media icons
const socialIcons: { [key: string]: React.ReactElement } = {
  github: <FaGithub className="text-2xl" />,
  linkedin: <FaLinkedin className="text-2xl" />,
  twitter: <FaTwitter className="text-2xl" />,
  mail: <FaEnvelope className="text-2xl" />,
};

// Explicitly define the type for socialLinks to avoid TypeScript errors
type SocialLink = {
  name: string;
  icon: string;
  url: string;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Use EmailJS to send the form
    if (formRef.current) {
      // Replace these values with your actual EmailJS service ID, template ID, and public key
      emailjs.sendForm(
        'service_roxmh7v', 
        'template_k3fwgij', 
        formRef.current, 
        'gPvALixBr8DzEds70'
      )
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          setIsSubmitting(false);
          setError('Failed to send your message. Please try again later.');
          
          // Reset error message after 5 seconds
          setTimeout(() => {
            setError(null);
          }, 5000);
        });
    }
  };

  return (
    <section id="contact" className="section-padding bg-black-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute w-full h-full inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute top-20 right-10 w-60 h-60 bg-purple-600/30 rounded-full filter blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading mb-3">Contact Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="subheading max-w-2xl mx-auto">
            Feel free to reach out to me for collaborations or just a friendly chat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-tertiary p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-secondary">Pune, MH</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-tertiary p-3 rounded-lg">
                  <FaEnvelope className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-secondary">parikshitjayale20@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-tertiary p-3 rounded-lg">
                  <FaPhoneAlt className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-secondary">7666116153</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((link: SocialLink, index: number) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-tertiary hover:bg-blue-600/20 p-3 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {socialIcons[link.icon]}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-tertiary rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  className="bg-green-600/20 border border-green-500 rounded-lg p-4 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-green-400 font-medium">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </motion.div>
              ) : error ? (
                <motion.div
                  className="bg-red-600/20 border border-red-500 rounded-lg p-4 text-center mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-red-400 font-medium">
                    {error}
                  </p>
                </motion.div>
              ) : null}
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-secondary">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black-200 border border-tertiary focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-secondary">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black-200 border border-tertiary focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-secondary">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-black-200 border border-tertiary focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all resize-none"
                      placeholder="Hi there, I'd like to talk about..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="btn btn-primary w-full flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        Send Message <FaPaperPlane className="ml-2" />
                      </span>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 