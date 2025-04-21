import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Laptop, 
  Drill, 
  Users, 
  CheckCircle,
  Code,
  Server,
  Lock,
  Database
} from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    { name: "JavaScript", percentage: 90 },
    { name: "Python", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "Node.js", percentage: 85 },
    { name: "Security Testing", percentage: 90 }
  ];

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="text-3xl text-primary" />,
      skills: ["JavaScript", "Python", "TypeScript", "Bash", "HTML/CSS"]
    },
    {
      title: "Frameworks",
      icon: <Server className="text-3xl text-primary" />,
      skills: ["React", "Node.js", "Express", "REST APIs"]
    },
    {
      title: "Security Tools",
      icon: <Lock className="text-3xl text-primary" />,
      skills: ["Wireshark", "Nmap", "Nessus", "Metasploit"]
    },
    {
      title: "Other Tools",
      icon: <Database className="text-3xl text-primary" />,
      skills: ["Git", "AWS", "Agile Development", "Data Annotation"]
    }
  ];

  const softSkills = [
    "Team Collaboration",
    "Problem Solving",
    "Time Management",
    "Communication"
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 }
    })
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
        >
          <h2 className="section-heading">My Skills</h2>
          <div className="section-divider"></div>
          <p className="section-description">Proficient in JavaScript, Python, React, and Node.js with expertise in security tools and practices.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Technical Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Laptop className="text-primary mr-2" />
                  Technical Proficiency
                </h3>
                
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="skill-progress-bar">
                      <motion.div 
                        className="skill-progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Soft Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={2}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Users className="text-primary mr-2" />
                  Professional Attributes
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center bg-gray-50 rounded-lg p-3">
                      <CheckCircle className="text-primary mr-2 h-5 w-5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={index + 3}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <div className="text-primary mr-2">
                      {category.icon}
                    </div>
                    {category.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <CheckCircle className="text-primary mr-2 h-4 w-4" />
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
