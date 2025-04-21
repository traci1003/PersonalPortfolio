import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <Card className="w-full max-w-md mx-4 shadow-lg overflow-hidden">
        <div className="h-2 bg-primary"></div>
        <CardContent className="p-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <AlertCircle className="h-8 w-8 text-red-500" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Oops! Page Not Found</h1>
            
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <Button asChild className="bg-primary text-white flex items-center gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
            
            <div className="mt-8 text-sm text-center text-gray-500">
              <p>© {new Date().getFullYear()} TDs-RESUMEPortfolio.com</p>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
