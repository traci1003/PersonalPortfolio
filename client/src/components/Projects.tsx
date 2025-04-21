import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, ExternalLink, Star, GitFork, Shield, Database, LineChart, Code, FileCode, Cpu, PenTool, Moon, BellRing, ShieldAlert } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import AnimatedBackground from "./AnimatedBackground";
import FloatingTechIcons from "./FloatingTechIcons";

// Import project images
import zenSpaceImage from "@assets/zen-space.svg";
import cyberAlarmShieldImage from "@assets/cyber-alarm-shield.svg";
import phishShieldAiImage from "@assets/phish-shield-ai.svg";
import repoJavascriptImage from "@assets/repo-javascript.svg";
import repoPythonImage from "@assets/repo-python.svg";
import repoGenericImage from "@assets/repo-generic.svg";

// Helper functions for language-specific styling
const getLanguageColor = (language: string | null) => {
  if (!language) return "text-gray-400";
  
  const colors: Record<string, string> = {
    "JavaScript": "text-yellow-500",
    "TypeScript": "text-blue-500",
    "Python": "text-green-500",
    "Java": "text-red-500",
    "C#": "text-purple-500",
    "PHP": "text-indigo-500",
    "Ruby": "text-red-600",
    "Go": "text-blue-400",
    "Rust": "text-orange-600",
    "C++": "text-pink-600",
    "HTML": "text-orange-500",
    "CSS": "text-blue-600",
  };
  
  return colors[language] || "text-primary";
};

const getLanguageIcon = (language: string | null) => {
  if (!language) return <Code />;
  
  switch (language) {
    case "JavaScript":
    case "TypeScript":
      return <FileCode />;
    case "Python":
      return <PenTool />;
    case "Java":
    case "C#":
    case "C++":
      return <Cpu />;
    default:
      return <Code />;
  }
};

const getRepositoryImage = (language: string | null) => {
  if (!language) return repoGenericImage;
  
  switch (language) {
    case "JavaScript":
    case "TypeScript":
      return repoJavascriptImage;
    case "Python":
      return repoPythonImage;
    default:
      return repoGenericImage;
  }
};

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

export default function Projects() {
  const { data: repositories, isLoading, error } = useQuery<Repository[]>({
    queryKey: ['/api/github-repos'],
  });
  
  // Featured projects from resume
  const featuredProjects = [
    {
      id: 1,
      title: "ZenSpace",
      description: "A meditation and wellness application with daily reminders, guided sessions, and progress tracking to help users develop mindfulness habits and reduce stress.",
      skills: ["React", "Node.js", "User Experience", "Authentication"],
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"],
      icon: <Moon className="h-12 w-12 text-primary/80" />,
      image: zenSpaceImage,
      githubUrl: "https://github.com/traci1003/ZenSpace",
      demoUrl: "https://zen-mood-1-traci1003.replit.app/auth",
      featured: true
    },
    {
      id: 2,
      title: "Cyber Alarm Shield",
      description: "An advanced security system for detecting unusual network activities and potential intrusions, featuring real-time alerts and comprehensive threat logging.",
      skills: ["Security", "Java", "Networking", "Alerting"],
      techStack: ["Java", "Spring Boot", "WebSockets", "PostgreSQL", "Redis", "Docker"],
      icon: <BellRing className="h-12 w-12 text-primary/80" />,
      image: cyberAlarmShieldImage,
      githubUrl: "https://github.com/traci1003/CyberAlarmShield",
      demoUrl: "https://cyber-alarm-shield-traci1003.replit.app/alarm",
      featured: true
    },
    {
      id: 3,
      title: "Phish Shield AI",
      description: "An AI-powered email and message scanner that identifies phishing attempts, using machine learning to detect subtle patterns associated with fraudulent communications.",
      skills: ["AI/ML", "Python", "Security", "NLP"],
      techStack: ["Python", "TensorFlow", "Flask", "PostgreSQL", "Docker", "NLTK"],
      icon: <ShieldAlert className="h-12 w-12 text-primary/80" />,
      image: phishShieldAiImage,
      githubUrl: "https://github.com/traci1003/PhishShieldAI",
      demoUrl: "https://phish-shield-ai-traci1003.replit.app/",
      featured: true
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

  // Display a maximum of 3 projects
  const displayedProjects = repositories?.slice(0, 3);
  
  // Custom descriptions for repositories (will fall back to GitHub description if not found)
  const getEnhancedDescription = (repo: Repository) => {
    const descriptions: Record<string, string> = {
      "ZenSpace": "A meditation and wellness application with daily reminders, guided sessions, and progress tracking to help users develop mindfulness habits.",
      "CyberAlarmShield": "An advanced security system for detecting unusual network activities and potential intrusions, featuring real-time alerts.",
      "PhishShieldAI": "An AI-powered email and message scanner that identifies phishing attempts using machine learning to detect subtle patterns."
    };
    
    return descriptions[repo.name] || repo.description || "No description provided";
  };

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <AnimatedBackground />
      <FloatingTechIcons />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
        >
          <h2 className="section-heading">My Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">A selection of my recent work and GitHub projects.</p>
        </motion.div>
        
        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index + 1}
              >
                <Card className="h-full flex flex-col transition-transform hover:shadow-xl hover:-translate-y-2 overflow-hidden group">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/30 flex items-center justify-center transition-all duration-300 group-hover:opacity-90 group-hover:bg-gradient-to-b group-hover:from-primary/50 group-hover:to-primary/80">
                      <div className="flex flex-col items-center">
                        {project.icon}
                        <div className="bg-white text-primary px-4 py-2 rounded-full mt-4 shadow-lg transform translate-y-8 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 font-medium">
                          View Details
                        </div>
                      </div>
                    </div>
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-0 left-0 bg-yellow-500 text-white px-3 py-1 text-sm font-semibold transform rotate-0 origin-top-left shadow-md z-10">
                        Featured
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Tech stack badges */}
                    <div className="mb-2">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <Badge key={idx} className="bg-primary/90 text-white hover:bg-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Skills badges */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-primary text-white"
                        asChild
                      >
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        asChild
                        className="flex-1"
                      >
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          <span>GitHub</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-8">GitHub Repositories</h3>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <Card key={index}>
                <div className="h-48">
                  <Skeleton className="h-full w-full" />
                </div>
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <div className="flex space-x-2">
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center p-8 bg-red-50 rounded-lg">
            <p className="text-red-500">Failed to load projects. Please try again later.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects?.length ? (
                displayedProjects.map((repo, index) => (
                  <motion.div 
                    key={repo.id}
                    className="h-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    custom={index + 1}
                  >
                    <Card className="h-full flex flex-col transition-transform hover:shadow-xl hover:-translate-y-2 overflow-hidden group">
                      <div className="h-48 relative overflow-hidden">
                        {/* Language-specific image */}
                        <img 
                          src={getRepositoryImage(repo.language)} 
                          alt={repo.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Overlay with language icon */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/30 flex items-center justify-center transition-all duration-300 group-hover:opacity-90 group-hover:bg-gradient-to-b group-hover:from-gray-800/50 group-hover:to-gray-800/80">
                          <div className="flex flex-col items-center">
                            <div className={`text-5xl ${getLanguageColor(repo.language)}`}>
                              {getLanguageIcon(repo.language)}
                            </div>
                            <div className="bg-white text-gray-800 px-4 py-2 rounded-full mt-4 shadow-lg transform translate-y-8 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 font-medium">
                              View Repository
                            </div>
                          </div>
                        </div>
                        
                        {/* Language badge */}
                        {repo.language && (
                          <Badge className="absolute top-0 right-0 m-2 bg-primary">
                            {repo.language}
                          </Badge>
                        )}
                        
                        {/* Most Popular badge - for repos with most stars */}
                        {repo.stargazers_count > 0 && (
                          <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-semibold shadow-md z-10">
                            Popular
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <h3 className="font-semibold text-xl mb-2">{repo.name}</h3>
                        <p className="text-gray-600 mb-4 flex-grow">
                          {getEnhancedDescription(repo)}
                        </p>
                        
                        {/* Tech stack badges - extracted from topics */}
                        {repo.topics && repo.topics.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                              {repo.topics.map((topic, idx) => (
                                <Badge key={idx} className="bg-primary/90 text-white hover:bg-primary">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Repo stats */}
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <div className="flex items-center mr-4">
                            <GitFork className="h-4 w-4 mr-1" />
                            <span>{repo.forks_count}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-1" />
                            <span>{repo.stargazers_count}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {repo.homepage && (
                            <Button 
                              size="sm" 
                              className="flex-1 bg-primary text-white hover:bg-primary/90"
                              asChild
                            >
                              <a 
                                href={repo.homepage} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                              >
                                <ExternalLink className="h-4 w-4 mr-1" />
                                <span>Live Demo</span>
                              </a>
                            </Button>
                          )}
                          <Button 
                            size="sm" 
                            variant="outline"
                            asChild
                            className={repo.homepage ? "flex-1" : "w-full"}
                          >
                            <a 
                              href={repo.html_url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-center"
                            >
                              <Github className="h-4 w-4 mr-1" />
                              <span>GitHub</span>
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">No projects found</p>
                </div>
              )}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                className="px-6 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
                asChild
              >
                <a href="https://github.com/traci1003" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="mr-2" />
                  View More on GitHub
                </a>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
