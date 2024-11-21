import React, { useState } from 'react';
import { Github, Mail, Download, ExternalLink, Award, Users, Briefcase, Rocket, Star, Instagram, Phone, FileText } from 'lucide-react';
import cvFile from '../lib/cvbaru.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-[1fr,2fr] gap-8 items-start">
        {/* Left Column */}
        <div>
          {/* Profile Card */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 mb-6">
            <div className="aspect-square rounded-2xl bg-gradient-to-r from-violet-200 via-pink-200 to-cyan-200 overflow-hidden mb-6 transition-transform duration-300 shadow-lg">
            <img 
                src="/src/lib/profile.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-cyan-600 text-transparent bg-clip-text">I Gede Ramadeva</h1>
                <p className="text-gray-600">Software Engineering</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm hover:bg-violet-200 transition-colors cursor-default">
                  Available for hire
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm hover:bg-emerald-200 transition-colors cursor-default">
                  Remote friendly
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a 
                  href={cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-xl font-medium text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-700 to-cyan-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <FileText className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">See CV</span>
                </a>
                
                <button className="relative overflow-hidden group bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-medium text-sm hover:border-violet-200 hover:shadow-lg transition-all duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-50 to-cyan-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" /> Portfolio
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Connect Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <h3 className="font-semibold mb-4 text-gray-700">Connect with me</h3>
            <div className="flex justify-center gap-4">
              <a href="mailto:ramadeva1101@gmail.com" className="group bg-gray-50 p-3 rounded-xl hover:bg-gradient-to-r from-violet-50 to-cyan-50 transition-all duration-300 hover:shadow-md flex items-center justify-center hover:-translate-y-1">
                <Mail className="w-5 h-5 group-hover:text-violet-600 transition-colors" />
              </a>
              <a href="https://github.com/Ramadeva1101" className="group bg-gray-50 p-3 rounded-xl hover:bg-gradient-to-r from-violet-50 to-cyan-50 transition-all duration-300 hover:shadow-md flex items-center justify-center hover:-translate-y-1">
                <Github className="w-5 h-5 group-hover:text-violet-600 transition-colors" />
              </a>
              <a href="https://www.instagram.com/rammdv_" className="group bg-gray-50 p-3 rounded-xl hover:bg-gradient-to-r from-violet-50 to-cyan-50 transition-all duration-300 hover:shadow-md flex items-center justify-center hover:-translate-y-1">
                <Instagram className="w-5 h-5 group-hover:text-violet-600 transition-colors" />
              </a>
              <a href="https://wa.me/6282146281427" className="group bg-gray-50 p-3 rounded-xl hover:bg-gradient-to-r from-violet-50 to-cyan-50 transition-all duration-300 hover:shadow-md flex items-center justify-center hover:-translate-y-1">
                <Phone className="w-5 h-5 group-hover:text-violet-600 transition-colors" />
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
          <div className="grid grid-cols-2 gap-6">
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-violet-50 to-pink-50 rounded-xl p-3 w-fit mb-3">
                <Briefcase className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pengalaman Kerja</h3>
              <p className="text-gray-600 text-sm">PT HOOKI GLOBAL KREASI  (Februari - Mei 2024)</p>
              <p className="text-gray-600 text-sm"> PT BAMBOO MEDIA CIPTA PERSADA (Oktober - Desember 2024)</p>
            </div>
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-3 w-fit mb-3">
                <Rocket className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Proyek Selesai</h3>
              <p className="text-gray-600 text-sm">Membuat Aplikasi Praktek Klinik Berbasis website , Membuat Corp website, Membuat website UMKM</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6">
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-violet-50 hover:to-pink-50">
              <Award className="w-8 h-8 text-violet-600 mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-1">12</h3>
              <p className="text-gray-600">Kelas</p>
            </div>
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50">
              <Star className="w-8 h-8 text-cyan-600 mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-1">SMKN 1</h3>
              <p className="text-gray-600">Denpasar</p>
            </div>
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50">
              <Users className="w-8 h-8 text-pink-600 mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-1">10+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;