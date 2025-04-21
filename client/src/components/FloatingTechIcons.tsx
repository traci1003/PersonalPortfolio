import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Shield, Cpu, LineChart, Monitor } from "lucide-react";

interface FloatingIconProps {
  icon: React.ReactNode;
  delay: number;
  x: number;
  y: number;
  scale: number;
  duration: number;
}

const FloatingIcon = ({ icon, delay, x, y, scale, duration }: FloatingIconProps) => {
  return (
    <motion.div
      className="absolute text-primary/20"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 0.5, 1, 0],
        y: [y, y - 100],
        x: [x, x + (Math.random() * 50 - 25)],
        scale: [scale, scale * 1.2, scale]
      }}
      transition={{ 
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 5 + 5
      }}
    >
      {icon}
    </motion.div>
  );
};

export default function FloatingTechIcons() {
  const [icons, setIcons] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    // Create a set of random floating icons
    const techIcons = [
      <Code size={24} />,
      <Server size={24} />,
      <Database size={24} />,
      <Shield size={24} />,
      <Cpu size={24} />,
      <LineChart size={24} />,
      <Monitor size={24} />
    ];
    
    const floatingIcons = [];
    
    for (let i = 0; i < 7; i++) {
      const icon = techIcons[i % techIcons.length];
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * 300 + 400; // Position them in the projects section
      const scale = Math.random() * 0.5 + 0.5;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;
      
      floatingIcons.push(
        <FloatingIcon
          key={i}
          icon={icon}
          delay={delay}
          x={x}
          y={y}
          scale={scale}
          duration={duration}
        />
      );
    }
    
    setIcons(floatingIcons);
  }, []);
  
  return <div className="fixed inset-0 pointer-events-none z-0">{icons}</div>;
}