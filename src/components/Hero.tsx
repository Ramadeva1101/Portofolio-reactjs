import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Download, ExternalLink, Award, Users, Briefcase, Rocket, Star, Instagram, Phone, FileText } from 'lucide-react';

const Hero = () => {
  const [count1, setCount1] = useState(0);
  const [count3, setCount3] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Fungsi untuk menghasilkan angka random
    const generateRandom = () => Math.floor(Math.random() * 99);
    
    // Interval untuk animasi
    const randomInterval = setInterval(() => {
      if (!animationComplete) {
        setCount1(generateRandom());
        setCount3(generateRandom());
      }
    }, 100);

    // Timer untuk menghentikan animasi random dan menampilkan nilai final
    setTimeout(() => {
      clearInterval(randomInterval);
      setAnimationComplete(true);
      
      // Animasi menuju angka final
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      const targetCount1 = 12;
      const targetCount3 = 10;
      
      let currentStep = 0;
      const easeOutQuad = (t: number) => t * (2 - t);
      
      const counterInterval = setInterval(() => {
        currentStep++;
        const progress = easeOutQuad(currentStep / steps);
        
        setCount1(Math.floor(targetCount1 * progress));
        setCount3(Math.floor(targetCount3 * progress));
        
        if (currentStep >= steps) {
          clearInterval(counterInterval);
          setCount1(targetCount1);
          setCount3(targetCount3);
        }
      }, interval);
    }, 2000);

    return () => {
      setAnimationComplete(false);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen pt-24">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-[1fr,2fr] gap-8 items-start">
        {/* Left Column */}
        <div>
          <motion.div
            animate={{ 
              y: [-5, 5, -5] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
            className="bg-white rounded-[32px] p-8 shadow-xl border border-gray-100 relative overflow-hidden mb-6"
          >
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-violet-100/50" />
            <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-violet-100/50" />
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-violet-100/20 to-transparent" />

            {/* Profile Image - Ukuran diperbesar */}
            <div className="relative w-36 h-36 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-violet-400 animate-pulse" />
              <img 
                src="/profile.png" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="text-center space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-1">I Gede Ramadeva</h1>
                <p className="text-violet-600 font-medium">Software Engineering</p>
              </div>

              <p className="text-gray-600 text-sm px-4">
                A passionate <span className="text-violet-600 font-medium">Tech Enthusiast</span> specializing in{" "}
                <span className="text-violet-600 font-medium">Web Development</span> with modern technologies
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-5 pt-2">
                <a 
                  href="mailto:ramadeva1101@gmail.com" 
                  className="text-gray-400 hover:text-violet-600 transition-colors p-2 hover:bg-violet-50 rounded-xl"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/Ramadeva1101" 
                  className="text-gray-400 hover:text-violet-600 transition-colors p-2 hover:bg-violet-50 rounded-xl"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/rammdv_" 
                  className="text-gray-400 hover:text-violet-600 transition-colors p-2 hover:bg-violet-50 rounded-xl"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/6282146281427" 
                  className="text-gray-400 hover:text-violet-600 transition-colors p-2 hover:bg-violet-50 rounded-xl"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a 
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-violet-600 text-white py-2.5 px-4 rounded-xl hover:bg-violet-700 transition-colors text-sm font-medium"
                >
                  <FileText className="w-4 h-4" />
                  See CV
                </a>
                <button className="flex items-center justify-center gap-2 bg-violet-50 text-violet-600 py-2.5 px-4 rounded-xl hover:bg-violet-100 transition-colors text-sm font-medium">
                  <ExternalLink className="w-4 h-4" />
                  Portfolio
                </button>
              </div>
            </div>
          </motion.div>

          {/* Connect Card */}
          <div className="bg-white/95 rounded-3xl p-6 shadow-lg border border-gray-100">
            <h3 className="font-medium mb-4 text-gray-700">Connect with me</h3>
            <div className="flex justify-center gap-6">
              <a href="mailto:ramadeva1101@gmail.com" className="text-gray-600 hover:text-violet-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/Ramadeva1101" className="text-gray-600 hover:text-violet-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/rammdv_" className="text-gray-600 hover:text-violet-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/6282146281427" className="text-gray-600 hover:text-violet-600 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Intro Card */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-transparent bg-clip-text">
              Pengembangan Web dan Programming
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Saya adalah Siswa kelas 12 jurusan Rekayasa Perangkat Lunak di SMK Negeri 1 Denpasar, 
             Fokus pada pengembangan Web untuk meningkatkan
               kualitas website dan aplikasi, Terus Belajar mengenai konsep pemrograman, Agloritma dan struktur data.
            
              
            </p>
          </div>

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-violet-50 to-pink-50 rounded-xl p-2 sm:p-3 w-fit mb-2 sm:mb-3">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Pengalaman Kerja</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">PT HOOKI GLOBAL KREASI (Februari - Mei 2024)</p>
              <p className="text-xs sm:text-sm text-gray-600">PT BAMBOO MEDIA CIPTA PERSADA (Oktober - Desember 2024)</p>
            </div>
            
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-2 sm:p-3 w-fit mb-2 sm:mb-3">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Proyek Selesai</h3>
              <p className="text-xs sm:text-sm text-gray-600">Membuat Aplikasi Praktek Klinik Berbasis website, Membuat Corp website, Membuat website UMKM</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-violet-50 hover:to-pink-50">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600 mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl sm:text-2xl font-bold mb-1 transition-all duration-300">
                {count1}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">Kelas</p>
            </div>
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600 mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl sm:text-2xl font-bold mb-1">
                SMKN 1
              </h3>
              <p className="text-sm sm:text-base text-gray-600">Denpasar</p>
            </div>
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600 mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl sm:text-2xl font-bold mb-1 transition-all duration-300">
                {animationComplete ? `${count3}+` : count3}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;