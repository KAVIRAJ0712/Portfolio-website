import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Portfolio</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="text-white hover:text-blue-400 transition">Home</a>
            <a href="#about" className="text-white hover:text-blue-400 transition">About</a>
            <a href="#projects" className="text-white hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-white hover:text-blue-400 transition px-3 py-2">Home</a>
            <a href="#about" className="block text-white hover:text-blue-400 transition px-3 py-2">About</a>
            <a href="#projects" className="block text-white hover:text-blue-400 transition px-3 py-2">Projects</a>
            <a href="#contact" className="block text-white hover:text-blue-400 transition px-3 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;