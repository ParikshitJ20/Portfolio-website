import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    name: "AI MockInterview Pro",
    description: "AI-driven mock interview platform with real-time role-based questions, speech analysis, and feedback.",
    longDescription: "AI-driven mock interview platform with real-time role-based questions, speech analysis, and feedback. Helps users prepare for technical interviews with personalized feedback.",
    image: "/images/ai-interview.svg",
    githubUrl: "https://github.com/ParikshitJ20/AI-Mock-Interview-Platform",
    //liveUrl: "https://ai-mockinterview.vercel.app",
    technologies: ["Next.js", "WebRTC", "AI"]
  },
  {
    id: 2,
    name: "HealthGuard Blockchain",
    description: "Secure blockchain-based system ensuring tamper-proof medical record management.",
    longDescription: "Secure blockchain-based system ensuring tamper-proof medical record management. Allows patients and healthcare providers to securely access and share medical records.",
    image: "/images/health-blockchain.svg",
    githubUrl: "https://github.com/ParikshitJ20/HealthGuard-Blockchain-Enabled-Medical-Record-System",
    technologies: ["Blockchain", "Solidity", "React"]
  },
  {
    id: 3,
    name: "Brand Monitoring",
    description: "AI-powered logo detection system for real-time brand monitoring across digital platforms.",
    longDescription: "AI-powered logo detection system for real-time brand monitoring across digital platforms. Helps brands track their presence across media and identify unauthorized usage.",
    image: "/images/brand-monitoring.svg",
    githubUrl: "https://github.com/ParikshitJ20/brand-monitoring",
    technologies: ["Python", "YOLOv5"]
  },
  {
    id: 4,
    name: "SkyTraffic-Manager",
    description: "Multi-threaded simulation optimizing aircraft takeoff/landing while preventing deadlocks.",
    longDescription: "Multi-threaded simulation optimizing aircraft takeoff/landing while preventing deadlocks. Implements advanced algorithms for efficient runway allocation.",
    image: "/images/air-traffic.svg",
    githubUrl: "https://github.com/ParikshitJ20/SkyTraffic-Manager",
    technologies: ["Java", "Multithreading", "Mutex", "Semaphores"]
  },
  {
    id: 5,
    name: "Potato Leaf Disease Detection",
    description: "AI model for plant disease detection, helping farmers identify crop issues early.",
    longDescription: "AI model for plant disease detection, helping farmers identify crop issues early. Uses computer vision to analyze leaf images and classify diseases.",
    image: "/images/potato-disease.svg",
    githubUrl: "https://github.com/ParikshitJ20/Potato-Leaf-Disease-Detection",
   // liveUrl: "https://potato-disease.vercel.app",
    technologies: ["TensorFlow", "Flask", "React"]
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-tertiary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group h-64">
        {/* Project Image */}
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-contain p-4 bg-tertiary transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
          <div className="p-6 w-full">
            <h3 className="text-xl font-bold mb-2 text-white-100">{project.name}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="text-xs bg-blue-600/30 text-blue-400 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <motion.div 
          className="absolute inset-0 bg-black/80 p-6 flex flex-col justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <h3 className="text-xl font-bold mb-3 text-white-100">{project.name}</h3>
            <p className="text-secondary text-sm">
              {project.longDescription}
            </p>
          </div>
          
          <div className="flex gap-4 mt-4">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-tertiary hover:bg-blue-600/20 p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`GitHub repository for ${project.name}`}
            >
              <FaGithub className="text-xl" />
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-tertiary hover:bg-blue-600/20 p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Live demo for ${project.name}`}
              >
                <FaExternalLinkAlt className="text-xl" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading mb-3">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="subheading max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing my technical skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/ParikshitJ20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-xl" /> View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
