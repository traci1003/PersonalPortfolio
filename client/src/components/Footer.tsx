import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">Traci Davis</h2>
            <p className="text-gray-400">Software Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.linkedin.com/in/traci-davis-23502235a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/traci1003" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">&copy; {currentYear} <a href="https://TDs-RESUMEPortfolio.com" className="hover:text-primary transition-colors">TDs-RESUMEPortfolio.com</a>. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
