import { motion } from 'framer-motion';

const Experience = () => {
  const educationExperiences = [
    {
      year: "2024",
      title: "Advanced Web Development",
      skills: [
        "React.js & Next.js Development",
        "Laravel Framework",
        "Database Management (MySQL)",
        "API Integration"
      ]
    },
    {
      year: "2023",
      title: "Frontend Development",
      skills: [
        "JavaScript ES6+",
        "React.js Fundamentals",
        "Responsive Web Design",
        "Version Control (Git)"
      ]
    },
    {
      year: "2022",
      title: "Web Development Basics",
      skills: [
        "HTML5 & CSS3",
        "Basic JavaScript",
        "Bootstrap Framework",
        "Basic Database Concepts"
      ]
    },
    {
      year: "2021",
      title: "Programming Fundamentals",
      skills: [
        "Basic Programming Logic",
        "Algorithm Fundamentals",
        "Basic Web Concepts",
        "Problem Solving Skills"
      ]
    }
  ];

  const workExperiences = [
    {
      company: "PT HOOKI GLOBAL KREASI",
      period: "Feb - May 2024",
      role: "Software Engineer",
      tasks: [
        "Website and Application Testing",
        "Analyzing Company Data",
        "Create Corp Website",
        "Frontend Development"
      ]
    },
    {
      company: "PT BAMBOO MEDIA CIPTA PERSADA",
      period: "Oktober - Desember 2024",
      role: "Frontend Developer",
      tasks: [
        "Manajemen Data Application",
        "UI/UX Implementation",
        "React.js Development",
        "Website Maintenance"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-transparent bg-clip-text">
          Experience
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-indigo-600 mb-6">
              Study
            </h3>   
            <div className="relative h-[400px] overflow-hidden">
              <div className="absolute w-full animate-infiniteScroll">
                <div className="space-y-6">
                  {educationExperiences.map((edu, index) => (
                    <motion.div
                      key={`edu-1-${index}`}
                      className="p-4 bg-white/50 rounded-lg border border-indigo-100"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm">
                          {edu.year}
                        </span>
                        <h4 className="font-semibold text-gray-800">{edu.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {edu.skills.map((skill, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-6">
                  {educationExperiences.map((edu, index) => (
                    <motion.div
                      key={`edu-2-${index}`}
                      className="p-4 bg-white/50 rounded-lg border border-indigo-100"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm">
                          {edu.year}
                        </span>
                        <h4 className="font-semibold text-gray-800">{edu.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {edu.skills.map((skill, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-indigo-600 mb-8">
              Pengalaman Kerja
            </h3>
            <div className="relative h-[400px] overflow-hidden">
              <div className="absolute w-full animate-infiniteScroll">
                <div className="space-y-8">
                  {workExperiences.map((work, index) => (
                    <motion.div
                      key={`work-1-${index}`}
                      className="p-6 bg-white/50 rounded-lg border border-indigo-100 hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-bold text-gray-800 mb-2">{work.company}</h4>
                      <p className="text-sm text-indigo-600 mb-3">{work.period}</p>
                      <p className="text-gray-700 font-medium mb-4">{work.role}</p>
                      <ul className="space-y-3">
                        {work.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 text-sm gap-3">
                            <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-8">
                  {workExperiences.map((work, index) => (
                    <motion.div
                      key={`work-2-${index}`}
                      className="p-6 bg-white/50 rounded-lg border border-indigo-100 hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-bold text-gray-800 mb-2">{work.company}</h4>
                      <p className="text-sm text-indigo-600 mb-3">{work.period}</p>
                      <p className="text-gray-700 font-medium mb-4">{work.role}</p>
                      <ul className="space-y-3">
                        {work.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 text-sm gap-3">
                            <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 