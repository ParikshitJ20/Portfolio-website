import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGit, 
  FaJava, FaPython, FaDocker
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiTailwindcss, 
  SiMongodb, SiExpress, SiSpringboot
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

// Define skill categories with their skills
const skillCategories = [
  {
    name: "Programming",
    skills: [
      { name: "Java", level: 90, icon: "java" },
      { name: "Python", level: 85, icon: "python" },
      { name: "SQL", level: 80, icon: "sql" },
      { name: "JavaScript", level: 85, icon: "javascript" },
      { name: "HTML", level: 95, icon: "html5" },
      { name: "CSS", level: 95, icon: "css3" },
    ]
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 85, icon: "react" },
      { name: "Node.js", level: 85, icon: "nodejs" },
      { name: "Express.js", level: 75, icon: "express" },
      { name: "Spring Boot", level: 70, icon: "springboot" },
    ]
  },
  {
    name: "Developer Tools",
    skills: [
      { name: "Git", level: 90, icon: "git" },
      { name: "MongoDB", level: 85, icon: "mongodb" },
      { name: "REST API", level: 85, icon: "api" },
      { name: "Docker", level: 75, icon: "docker" },
    ]
  }
];

// Map for skill icons
const skillIcons: { [key: string]: React.ReactElement } = {
  html5: <FaHtml5 className="text-2xl text-orange-500" />,
  css3: <FaCss3Alt className="text-2xl text-blue-500" />,
  javascript: <SiJavascript className="text-2xl text-yellow-400" />,
  typescript: <SiTypescript className="text-2xl text-blue-600" />,
  react: <FaReact className="text-2xl text-cyan-400" />,
  tailwind: <SiTailwindcss className="text-2xl text-cyan-500" />,
  nodejs: <FaNodeJs className="text-2xl text-green-500" />,
  express: <SiExpress className="text-2xl text-gray-500" />,
  springboot: <SiSpringboot className="text-2xl text-green-600" />,
  git: <FaGit className="text-2xl text-red-500" />,
  mongodb: <SiMongodb className="text-2xl text-green-500" />,
  docker: <FaDocker className="text-2xl text-blue-400" />,
  java: <FaJava className="text-2xl text-red-400" />,
  python: <FaPython className="text-2xl text-blue-500" />,
  sql: <TbSql className="text-2xl text-blue-300" />,
  api: <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">API</div>,
};

// Fallback icon for skills without a specific icon
const defaultIcon = <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">S</div>;

const SkillItem = ({ skill, index }: { skill: any; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {skillIcons[skill.icon] || defaultIcon}
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-sm text-secondary">{skill.level}%</span>
      </div>
      <div className="h-3 bg-tertiary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1 }}
        ></motion.div>
      </div>
    </div>
  );
};

const SkillCategory = ({ category, index }: { category: any; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-black-200 p-6 rounded-xl shadow-card"
    >
      <h3 className="text-xl font-bold mb-6 text-white-100 border-b border-blue-600/30 pb-2">{category.name}</h3>
      <div>
        {category.skills.map((skill: any, skillIndex: number) => (
          <SkillItem 
            key={`skill-${skillIndex}`} 
            skill={skill} 
            index={skillIndex} 
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="section-padding bg-black-100">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading mb-3">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="subheading max-w-2xl mx-auto">
            My technical expertise and proficiency in various technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={`category-${index}`} 
              category={category} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 