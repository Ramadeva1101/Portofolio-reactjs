import React, { useState } from 'react';
import { Moon, Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const whatsappLink = "https://wa.me/082146281427";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Code className="text-indigo-600" size={24} />
              <h1 className="text-xl font-bold">Rama <span className="text-indigo-600">Deva</span></h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-gray-600 hover:text-indigo-600 transition-colors duration-300 group px-4 py-2 rounded-lg
                    ${activeLink === link.href ? 'bg-indigo-50 text-indigo-600' : ''}`}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
             
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Let's Talk
              </a>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X size={24} className="text-gray-600" />
                ) : (
                  <Menu size={24} className="text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="mt-4 md:hidden border-t pt-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-gray-600 hover:text-indigo-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-gray-50
                      ${activeLink === link.href ? 'bg-indigo-50 text-indigo-600' : ''}`}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Let's Talk
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;