import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaFilePdf, FaGraduationCap, FaBriefcase, FaTrophy, FaCertificate } from 'react-icons/fa';

const ResumeSection = ({ title, items, icon, delay }: { title: string; items: any[]; icon: React.ReactElement; delay: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="mb-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="text-blue-500 text-xl">{icon}</div>
        <h3 className="text-xl font-bold text-white-100">{title}</h3>
      </div>
      <div className="space-y-6 pl-7 border-l-2 border-blue-600/30">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[25px] top-1.5"></div>
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-bold">{item.title}</h4>
              {item.date && <span className="text-sm text-blue-500">{item.date}</span>}
            </div>
            <p className="text-secondary italic mb-1">{item.subtitle}</p>
            <p className="text-sm text-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Resume = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Education data
  const educationItems = [
    {
      title: "University Degree",
      subtitle: "Vishwakarma Institute of Technology, Pune",
      description: "Bachelor of Electronics and Telecommunication, with a focus on software development and data structures.",
      date: "2021 - 2025"
    },
    {
      title: "College Studies",
      subtitle: "Dawale Jr. College, Akola",
      description: "Advanced studies in Computer Applications and Information Technology.",
      date: "2019 - 2021"
    }
  ];

  // Experience data
  const experienceItems = [
    {
      title: "AI Intern",
      subtitle: "Edunet Foundation",
      description: "Completed an AI-focused internship under Microsoft & SAP’s TechSaksham initiative and worked on a real-time leaf disease detection project. Gained hands-on experience in AI applications, computer vision, and industry best practices.",
      date: "Jan-2025 - Feb-2025"
    }
  ];

  // Certifications data
  const certificationItems = [
    {
      title: "AWS Essential Training",
      subtitle: "Amazon Web Services",
      description: "Completed training on AWS cloud services, infrastructure, and deployment strategies.",
      date: "2023"
    },
    {
      title: "Deloitte Australia Data Analytics",
      subtitle: "Deloitte",
      description: "Learned advanced data analytics techniques and tools used in the industry.",
      date: "2022"
    }
  ];

  // Achievements data
  const achievementItems = [
    {
      title: "Research Paper Publication",
      subtitle: "ICIICS Conference 2024",
      description: "Published a research paper on innovative computing solutions at the International Conference on Intelligent Information and Computing Systems."
    },
    {
      title: "99 Percentile Score in AMCAT",
      subtitle: "Aspiring Minds' Computer Adaptive Test",
      description: "Achieved top percentile scores in the standardized assessment for employability."
    }
  ];

  return (
    <section id="resume" className="section-padding bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading mb-3">Resume</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="subheading max-w-2xl mx-auto">
            A summary of my education, certifications, and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-8">
              <ResumeSection 
                title="Education" 
                items={educationItems} 
                icon={<FaGraduationCap />} 
                delay={0.2} 
              />
              <ResumeSection 
                title="Certifications" 
                items={certificationItems} 
                icon={<FaCertificate />} 
                delay={0.4} 
              />
            </div>
            
            <div className="space-y-8">
              <ResumeSection 
                title="Experience" 
                items={experienceItems} 
                icon={<FaBriefcase />} 
                delay={0.3} 
              />
              <ResumeSection 
                title="Achievements" 
                items={achievementItems} 
                icon={<FaTrophy />} 
                delay={0.5} 
              />
            </div>
          </div>

          <motion.div
            className="bg-black-100 rounded-xl p-8 shadow-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">Download Complete Resume</h3>
            <p className="text-secondary mb-6">
              For a more detailed overview of my experience, skills, and qualifications
            </p>
            <motion.a
              href="https://drive.google.com/file/d/18FRl99elizNLTMAZk2TnsSfQ_n6qNhZj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilePdf className="text-xl" /> Download Resume <FaDownload className="ml-1" />
            </motion.a>
            <p className="text-sm text-secondary mt-4">
              PDF format • Last updated March 2025
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 