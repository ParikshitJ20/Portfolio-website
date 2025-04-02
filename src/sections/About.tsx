import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="section-padding bg-black-100">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading mb-3">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="subheading max-w-2xl mx-auto">
            Get to know my background, skills, and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <motion.div
  className="md:col-span-5 lg:col-span-4 flex justify-center"
  initial={{ opacity: 0, x: -50 }}
  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <div className="relative w-80 h-60 md:w-52 md:h-72">
    <div className="absolute -left-4 -top-4 border-2 border-blue-600 rounded-xl w-full h-full"></div>
    <img
      src="/profile.png"
      alt="Profile"
      className="w-full h-full object-cover rounded-xl relative z-10"
    />
  </div>
</motion.div>


          <motion.div
            className="md:col-span-7 lg:col-span-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Parikshit Jayale</span>
            </h3>
            
            <p className="text-secondary mb-4">
              I am a passionate developer with expertise in front-end development, blockchain technology, and cybersecurity. With a strong foundation in modern web technologies, I strive to create intuitive and visually appealing digital experiences.
            </p>
            
            <p className="text-secondary mb-6">
              My journey in tech began during my undergraduate studies in Electronics and Telecommunication, where I discovered my passion for developing user-centric applications. Since then, I've worked on various projects ranging from responsive websites to decentralized applications on blockchain networks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-bold mb-2">Experience</h4>
                <p className="text-secondary">AI Intern</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Education</h4>
                <p className="text-secondary">B.Tech in Electronics and Telecommunication</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Location</h4>
                <p className="text-secondary">Pune, MH</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Interests</h4>
                <p className="text-secondary">Java, Web Development</p>
              </div>
            </div>

            <motion.a
              href="#contact"
              className="btn btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 