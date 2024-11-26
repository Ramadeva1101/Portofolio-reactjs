import React from 'react';
import { Heart, Coffee, Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Ramadeva1101',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-[#2dba4e]'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rammdv_',
      icon: <Instagram className="w-5 h-5" />,
      color: 'hover:text-[#E4405F]'
    },
   
    {
      name: 'WhatsApp',
      url: 'https://wa.me/6282146281427',
      icon: <Phone className="w-5 h-5" />,
      color: 'hover:text-[#25D366]'
    },
    {
      name: 'Email',
      url: 'mailto:ramadeva1101@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:text-[#EA4335]'
    }
  ];

  return (
    <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white">Ramadeva</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Web Developer yang berfokus pada pengembangan aplikasi web dengan Laravel dan React.
              Terbuka untuk peluang kerja sama.
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:ramadeva1101@gmail.com" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                ramadeva1101@gmail.com
              </a>
              <a 
                href="https://wa.me/6282146281427" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +62 821-4628-1427
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors">
                Home
              </a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors">
                Skills
              </a>
              <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`bg-white dark:bg-gray-700 p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${link.color}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-300 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> and <Coffee className="w-4 h-4 text-brown-500" />
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Ramadeva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;