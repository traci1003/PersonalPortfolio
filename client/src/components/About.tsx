import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { User, Heart, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const education = [
    {
      degree: "B.S. in Cybersecurity",
      institution: "Southern New Hampshire University",
      period: "2022 - 2024"
    },
    {
      degree: "Google Certificate - IT Support",
      institution: "Coursera",
      period: "2022"
    },
    {
      degree: "Google Certificate - Data Analytics",
      institution: "Coursera",
      period: "2022"
    }
  ];

  const experience = [
    {
      role: "Software Developer",
      company: "Turing",
      period: "Jan 2025 - Present",
      description: "Developing REST APIs with Node.js, implementing Agile methodologies, and performing security testing with tools like Wireshark, Nmap, Nessus, and Metasploit."
    },
    {
      role: "Software Developer",
      company: "DataAnnotation",
      period: "2023 - Present",
      description: "Creating data annotation tools in Python, developing user interfaces with React, and enhancing application security through secure authentication methods."
    },
    {
      role: "Cybersecurity Apprentice",
      company: "Southern New Hampshire University",
      period: "Aug 2022 - Aug 2024",
      description: "Assisted in identifying and mitigating cybersecurity threats, supported security protocol development, and participated in incident response activities."
    }
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
        >
          <h2 className="section-heading">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-description">Get to know me better - my background, interests, and what drives me in the software development field.</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <User className="text-primary mr-2" />
                  Professional Background
                </h3>
                <p className="text-gray-700 mb-4">
                  I'm a Cybersecurity Graduate and Freelance Software Developer with hands-on experience in web development and secure coding. 
                  My journey in tech began with a strong foundation in cybersecurity, which gives me a unique perspective on creating secure 
                  and robust applications.
                </p>
                <p className="text-gray-700">
                  I'm proficient in JavaScript, Python, React, and Node.js, with a strong focus on AI-driven data projects. I have experience 
                  developing REST APIs, implementing Agile methodologies, and performing security testing with industry-standard tools. My unique 
                  blend of cybersecurity knowledge and software development skills allows me to build applications with security at their core.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={2}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Heart className="text-primary mr-2" />
                  Personal Interests
                </h3>
                <p className="text-gray-700 mb-4">
                  Beyond coding, I'm passionate about technology trends, open-source contributions, and staying updated with the latest
                  advancements in the software development world. I enjoy problem-solving challenges and puzzles that test my analytical thinking.
                </p>
                <p className="text-gray-700">
                  In my free time, I contribute to community coding projects and occasionally mentor aspiring developers. I believe in
                  the power of knowledge sharing and community building in the tech industry.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        {/* Education & Experience */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={3}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <GraduationCap className="text-primary mr-2" />
                  Education
                </h3>
                
                {education.map((item, index) => (
                  <div key={index} className="mb-6 border-l-2 border-primary pl-4">
                    <h4 className="font-medium text-lg">{item.degree}</h4>
                    <p className="text-gray-600">{item.institution}</p>
                    <p className="text-gray-500 text-sm">{item.period}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={4}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Briefcase className="text-primary mr-2" />
                  Experience
                </h3>
                
                {experience.map((item, index) => (
                  <div key={index} className="mb-6 border-l-2 border-primary pl-4">
                    <h4 className="font-medium text-lg">{item.role}</h4>
                    <p className="text-gray-600">{item.company}</p>
                    <p className="text-gray-500 text-sm">{item.period}</p>
                    <p className="text-gray-700 mt-2">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
