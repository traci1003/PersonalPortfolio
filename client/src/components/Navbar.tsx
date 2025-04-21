import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 ${
        scrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-primary">TD</a>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("home")} className="text-gray-900 hover:text-primary transition-colors font-medium">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-gray-900 hover:text-primary transition-colors font-medium">
            About
          </button>
          <button onClick={() => scrollToSection("skills")} className="text-gray-900 hover:text-primary transition-colors font-medium">
            Skills
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-gray-900 hover:text-primary transition-colors font-medium">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-900 hover:text-primary transition-colors font-medium">
            Contact
          </button>
        </div>
        
        {/* Social Links */}
        <div className="hidden md:flex space-x-4">
          <a 
            href="https://www.linkedin.com/in/traci-davis-23502235a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin />
          </a>
          <a 
            href="https://github.com/traci1003" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-900 hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github />
          </a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              <button onClick={() => scrollToSection("home")} className="text-gray-900 hover:text-primary transition-colors font-medium py-2">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-gray-900 hover:text-primary transition-colors font-medium py-2">
                About
              </button>
              <button onClick={() => scrollToSection("skills")} className="text-gray-900 hover:text-primary transition-colors font-medium py-2">
                Skills
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-gray-900 hover:text-primary transition-colors font-medium py-2">
                Projects
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-900 hover:text-primary transition-colors font-medium py-2">
                Contact
              </button>
              <div className="flex space-x-4 py-2">
                <a 
                  href="https://www.linkedin.com/in/traci-davis-23502235a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin />
                </a>
                <a 
                  href="https://github.com/traci1003" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-900 hover:text-primary transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
