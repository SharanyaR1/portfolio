import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-13 pt-12 pb-8">
      {/* Main Footer Content */}
      <div className="text-center mb-5">
        {/* Social Links with Line */}
        <div className="relative flex justify-center gap-8 mb-8">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
          
          <a 
            href="https://github.com/SharanyaR1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative z-10"
          >
            <div className="p-3 rounded-full bg-white border-2 border-gray-100 group-hover:border-gray-200 transition-all duration-300 group-hover:scale-110 shadow-sm">
              <FaGithub className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/sharanyarchandra/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative z-10"
          >
            <div className="p-3 rounded-full bg-white border-2 border-gray-100 group-hover:border-blue-200 transition-all duration-300 group-hover:scale-110 shadow-sm">
              <FaLinkedin className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </div>
          </a>
          
          <a 
            href="mailto:sharanyaramchandra@gmail.com"
            className="group relative z-10"
          >
            <div className="p-3 rounded-full bg-white border-2 border-gray-100 group-hover:border-red-200 transition-all duration-300 group-hover:scale-110 shadow-sm">
              <FaEnvelope className="w-6 h-6 text-gray-600 group-hover:text-red-500 transition-colors" />
            </div>
          </a>
        </div>
      </div>

      <div className="text-gray-700 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Sharanya Ramchandra.</p>  
      </div>
    </footer>
  );
}