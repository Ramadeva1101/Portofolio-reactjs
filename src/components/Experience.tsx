import React from 'react';

interface ExperienceData {
  title: string;
  company: string;
  date: string;
  description: string[];
}

const experienceData: ExperienceData[] = [
  {
    title: "Frontend Developer",
    company: "PT. Teknologi Indonesia",
    date: "2022 - Sekarang",
    description: [
      "Mengembangkan dan memelihara aplikasi web menggunakan React dan TypeScript",
      "Mengoptimalkan performa aplikasi dan implementasi responsive design",
      "Berkolaborasi dengan tim backend untuk integrasi API"
    ]
  },
  // ... data lainnya
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Pengalaman Kerja
        </h2>
        
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <p className="text-violet-600 font-medium mt-1">
                {exp.company}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {exp.date}
              </p>
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 