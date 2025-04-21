import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePicture from "@assets/IMG_4756.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-20 md:py-0">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-full w-64 h-64 mx-auto md:mx-0 p-2 shadow-lg overflow-hidden">
              <Avatar className="w-full h-full">
                <AvatarImage src={profilePicture} alt="Traci Davis" className="w-full h-full object-cover" />
                <AvatarFallback>TD</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Hello, I'm </span>
              <span className="text-primary">Traci Davis</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">Cybersecurity Graduate & Software Developer</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              Cybersecurity Graduate and Freelance Software Developer with hands-on experience in web development and secure coding. Proficient in JavaScript, Python, React, and Node.js, with a strong focus on AI-driven data projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-gray-50"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
