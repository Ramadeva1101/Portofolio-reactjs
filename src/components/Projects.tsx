import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Code, Star, GitFork } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo: string;
    github: string;
  };
  stats: {
    stars: number;
    forks: number;
  };
  category: string;
}

type FilterType = 'All' | 'Web Apps' | 'UI/UX';

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Website portfolio personal dengan animasi modern dan responsive design',
    image: '/src/lib/profil1.png',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    links: { demo: '#', github: 'https://github.com/Ramadeva1101' },
    stats: { stars: 10, forks: 3 },
    category: 'All'
  },
  {
    title: 'Sistem Praktek Klinik',
    description: 'Platform Aplikasi untuk pengelolaan data pasien, Obat, Pemeriksaan dan dokter',
    image: '/src/lib/project3.png',
    tags: ['Laravel', 'MySQL', 'Filament'],
    links: { demo: '#', github: 'https://github.com/Ramadeva1101' },
    stats: { stars: 20, forks: 8 },
    category: 'All'
  },
  {
    title: 'Sistem Informasi Akademik',
    description: 'Sistem informasi untuk mengelola data akademik mahasiswa dan dosen',
    image: '/src/lib/project2.png',
    tags: ['Laravel', 'MySQL', 'Bootstrap'],
    links: { demo: '#', github: 'https://github.com/Ramadeva1101' },
    stats: { stars: 15, forks: 5 },
    category: 'All'
  },
  {
    title: 'Web Application System',
    description: 'Sistem manajemen data berbasis web dengan fitur lengkap',
    image: '/src/lib/project2.png',
    tags: ['Laravel', 'MySQL', 'Bootstrap'],
    links: { demo: '#', github: 'https://github.com/Ramadeva1101' },
    stats: { stars: 25, forks: 10 },
    category: 'Web Apps'
  },
  {
    title: 'CRM Dashboard',
    description: 'Dashboard untuk manajemen pelanggan dan analisis data',
    image: '/src/lib/project3.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    links: { demo: '#', github: 'https://github.com/Ramadeva1101' },
    stats: { stars: 18, forks: 7 },
    category: 'Web Apps'
  },
  {
    title: 'Modern UI Design',
    description: 'Design sistem modern untuk aplikasi web',
    image: '/src/lib/image1.png',
    tags: ['Figma', 'UI/UX', 'Prototype'],
    links: { demo: '#', github: 'https://github.com/Ramadeva1101' },
    stats: { stars: 12, forks: 4 },
    category: 'UI/UX'
  },
  {
    title: 'Mobile App Interface',
    description: 'Interface design untuk aplikasi mobile dengan fokus pada user experience',
    image: '/src/lib/image2.png',
    tags: ['Adobe XD', 'UI/UX', 'Mobile'],
    links: { demo: '#', github: 'https://github.com/Ramadeva1101' },
    stats: { stars: 8, forks: 2 },
    category: 'UI/UX'
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  const filters: FilterType[] = ['All', 'Web Apps', 'UI/UX'];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' ? project.category === 'All' : project.category === activeFilter
  );

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
    if (swiperRef) {
      swiperRef.slideTo(0);
    }
  };

  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section dengan card yang lebih compact */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 mb-8 text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-1">MY WORKS</p>
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-cyan-600 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Explore a collection of my recent projects, showcasing innovative solutions 
            and creative designs built with modern technologies.
          </p>
        </div>

        {/* Projects Filter Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${filter === activeFilter 
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Carousel */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
            onSwiper={setSwiperRef}
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.title}>
                <div className="group/card bg-white rounded-xl overflow-hidden shadow-lg h-full border border-gray-100 hover:shadow-xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transform group-hover/card:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity flex items-end justify-between p-4">
                      <div className="flex gap-3">
                        <a href={project.links.demo} className="text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors">
                          Live Demo
                        </a>
                        <a href={project.links.github} className="text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors">
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-indigo-50 text-indigo-600 text-xs px-2.5 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* GitHub Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-500" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={14} className="text-indigo-500" />
                        <span>{project.stats.forks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">10+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>
            <div className="text-gray-600">Commits Made</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-violet-600 mb-2">10+</div>
            <div className="text-gray-600">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;