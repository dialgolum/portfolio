import { useState } from 'react'
import profileImage from './assets/IMG/my-pic.jpg'
import tasteProjectImage from './assets/projects/taste.png'
import reactIcon from './assets/icons/React (1).png'
import pythonIcon from './assets/icons/python.png'
import htmlIcon from './assets/icons/html.png'
import cssIcon from './assets/icons/css.png'
import javaIcon from './assets/icons/java.png'
import cIcon from './assets/icons/c.png'
import cppIcon from './assets/icons/c++.png'
import mysqlIcon from './assets/icons/mysql.png'
import phpIcon from './assets/icons/php.png'
import javaScriptIcon from './assets/icons/js.png'
import typeSciptIcon from './assets/icons/typescript.png'
import tailwindIcon from './assets/icons/Tailwind CSS.png'
import mongodbIcon from './assets/icons/MongoDB.png'
import streamlitIcon from './assets/icons/Streamlit.png'
import androidIcon from './assets/icons/Android Studio.png'
import figmaIcon from './assets/icons/Figma.png'
import springIcon from './assets/icons/Spring.png'
import vsIcon from './assets/icons/vs.png'
import githubIcon from './assets/icons/githubIcon.png'
import linkedinIcon from './assets/icons/linkedinIcon.png'
import emailIcon from './assets/icons/emailIcon.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-400">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
      </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Name and Details */}
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Hi! I'm Dilum
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Passionate about creating beautiful, functional, and user-centered digital experiences. 
                I love turning complex problems into simple, beautiful solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  View My Work
                </button>
        <button 
                  onClick={() => window.open('https://mysliit-my.sharepoint.com/:b:/g/personal/it23150102_my_sliit_lk/ETPk2D5W4J9Cu0b19G-L6uwBQDkIrWIxzlNaNTa1Bnts-w?e=wT8Bib', '_blank')}
                  className="px-8 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-colors"
        >
                  Resume
        </button>
              </div>
            </div>
            
            {/* Right Side - Profile Image */}
            <div className="flex justify-center md:justify-end">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                  <img 
                    src={profileImage} 
                    alt="John Doe" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">About Me</h2>
          <div className="flex flex-col gap-6">
            {/* Education Card */}
            <div className="flex items-center bg-gray-700 rounded-lg p-4 md:p-6 hover:bg-gray-600 transition-all duration-300 hover:scale-[1.02] group w-full min-h-[90px] md:min-h-[110px]">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl mr-6">
                🎓
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-blue-400">Education</h3>
                    <p className="text-gray-300 text-sm md:text-base">Bachelor of Science in Information Technology</p>
                  </div>
                  <div className="text-right md:ml-8">
                    <p className="text-blue-400 font-medium">SLIIT University</p>
                    <p className="text-gray-400 text-xs md:text-sm">2020 - 2024</p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  <p className="text-gray-300 text-xs md:text-sm">
                    Specialized in Software Engineering with focus on modern web technologies and database management.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="flex items-center bg-gray-700 rounded-lg p-4 md:p-6 hover:bg-gray-600 transition-all duration-300 hover:scale-[1.02] group w-full min-h-[90px] md:min-h-[110px]">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-2xl mr-6">
                💼
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-blue-400">Experience</h3>
                    <p className="text-gray-300 text-sm md:text-base">Full Stack Developer</p>
                  </div>
                  <div className="text-right md:ml-8">
                    <p className="text-blue-400 font-medium">Tech Solutions Inc.</p>
                    <p className="text-gray-400 text-xs md:text-sm">2022 - Present</p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  <p className="text-gray-300 text-xs md:text-sm">
                    Developing scalable web applications using React, Node.js, and cloud technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className="flex items-center bg-gray-700 rounded-lg p-4 md:p-6 hover:bg-gray-600 transition-all duration-300 hover:scale-[1.02] group w-full min-h-[90px] md:min-h-[110px]">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-2xl mr-6">
                ⚡
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-blue-400">Expertise</h3>
                    <p className="text-gray-300 text-sm md:text-base">Frontend & Backend Development</p>
                  </div>
                  <div className="text-right md:ml-8">
                    <p className="text-blue-400 font-medium">Modern Web Stack</p>
                    <p className="text-gray-400 text-xs md:text-sm">5+ Years</p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  <p className="text-gray-300 text-xs md:text-sm">
                    Proficient in React, TypeScript, Node.js, and various modern development tools and frameworks.
        </p>
      </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'C', logo: cIcon },
              { name: 'C++', logo: cppIcon },
              { name: 'HTML', logo: htmlIcon },
              { name: 'CSS', logo: cssIcon },
              { name: 'PHP', logo: phpIcon },
              { name: 'Java', logo: javaIcon },
              { name: 'React', logo: reactIcon },
              { name: 'JavaScript', logo: javaScriptIcon },
              { name: 'TypeScript', logo: typeSciptIcon },
              { name: 'Tailwind', logo: tailwindIcon },
              { name: 'Spring Boot', logo: springIcon },
              { name: 'MongoDB', logo: mongodbIcon },
              { name: 'MySQL', logo: mysqlIcon },
              { name: 'Android Studio', logo: androidIcon },
              { name: 'Figma', logo: figmaIcon },
              { name: 'Python', logo: pythonIcon },
              { name: 'Streamlit', logo: streamlitIcon },
              { name: 'VS Code', logo: vsIcon }
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-800 rounded-full flex items-center justify-center mb-3 hover:bg-gray-700 transition-all duration-300 hover:scale-110 border-2 border-transparent hover:border-blue-400 overflow-hidden">
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="w-12 h-12 md:w-14 md:h-14 object-contain"
                  />
                </div>
                <span className="text-gray-300 text-sm md:text-base font-medium text-center group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
                tech: ["React", "Node.js", "Stripe", "MongoDB"]
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates.",
                tech: ["React", "Socket.io", "Express", "PostgreSQL"]
              },
              {
                title: "Portfolio Website",
                description: "A modern, responsive portfolio website built with React and Tailwind CSS.",
                tech: ["React", "TypeScript", "Tailwind CSS"]
              },
              {
                title: "Weather Dashboard",
                description: "A beautiful weather application with location-based forecasts.",
                tech: ["React", "OpenWeather API", "Chart.js"]
              },
              {
                title: "Social Media Clone",
                description: "A social media platform with posts, comments, and user authentication.",
                tech: ["React", "Firebase", "Material-UI"]
              },
              {
                title: "Blog Platform",
                description: "A content management system for bloggers with markdown support.",
                tech: ["Next.js", "Prisma", "PostgreSQL"]
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-700 rounded-lg overflow-hidden project-card hover:scale-105 transition-transform duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={tasteProjectImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Get In Touch</h2>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6 text-center">Let's Connect</h3>
            <p className="text-gray-300 mb-12 text-center max-w-2xl">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate or just want to say hello!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-2xl">
              <a 
                href="https://github.com/dialgolum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors">
                  <img 
                    src={githubIcon} 
                    alt="GitHub" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">GitHub</h4>
                <p className="text-gray-300 text-sm text-center">@dialgolum</p>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/dilum-hapugoda-91815030b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors">
                  <img 
                    src={linkedinIcon} 
                    alt="LinkedIn" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">LinkedIn</h4>
                <p className="text-gray-300 text-sm text-center">Dilum Hapugoda</p>
              </a>
              
              <a 
                href="mailto:dilumhapugoda@gmail.com"
                className="flex flex-col items-center p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors">
                  <img 
                    src={emailIcon} 
                    alt="Email" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Email</h4>
                <p className="text-gray-300 text-sm text-center">dilumhapugoda@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 John Doe. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
