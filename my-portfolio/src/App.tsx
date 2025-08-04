import { useState } from 'react'

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
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
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
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-4xl font-bold">JD</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Full Stack Developer & UI/UX Designer
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I love turning complex problems into simple, beautiful solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with 5+ years of experience in creating 
                web applications that make a difference. I specialize in React, Node.js, and 
                modern web technologies.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Quick Facts</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Based in San Francisco, CA
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Available for remote work
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Passionate about clean code
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Always learning new technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
              <div className="space-y-3">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: `${Math.random() * 30 + 70}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Backend</h3>
              <div className="space-y-3">
                {['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: `${Math.random() * 30 + 70}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Tools & Others</h3>
              <div className="space-y-3">
                {['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'CI/CD'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: `${Math.random() * 30 + 70}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                tech: ["React", "Node.js", "Stripe", "MongoDB"],
                image: "🛒"
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates.",
                tech: ["React", "Socket.io", "Express", "PostgreSQL"],
                image: "📋"
              },
              {
                title: "Portfolio Website",
                description: "A modern, responsive portfolio website built with React and Tailwind CSS.",
                tech: ["React", "TypeScript", "Tailwind CSS"],
                image: "💼"
              },
              {
                title: "Weather Dashboard",
                description: "A beautiful weather application with location-based forecasts.",
                tech: ["React", "OpenWeather API", "Chart.js"],
                image: "🌤️"
              },
              {
                title: "Social Media Clone",
                description: "A social media platform with posts, comments, and user authentication.",
                tech: ["React", "Firebase", "Material-UI"],
                image: "📱"
              },
              {
                title: "Blog Platform",
                description: "A content management system for bloggers with markdown support.",
                tech: ["Next.js", "Prisma", "PostgreSQL"],
                image: "✍️"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-700 rounded-lg overflow-hidden project-card">
                <div className="p-6">
                  <div className="text-4xl mb-4">{project.image}</div>
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

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Work Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Senior Full Stack Developer",
                company: "TechCorp Inc.",
                period: "2022 - Present",
                description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies."
              },
              {
                title: "Full Stack Developer",
                company: "StartupXYZ",
                period: "2020 - 2022",
                description: "Built and maintained multiple web applications, working closely with design and product teams."
              },
              {
                title: "Frontend Developer",
                company: "Digital Agency",
                period: "2019 - 2020",
                description: "Created responsive websites and web applications for various clients using modern frontend technologies."
              }
            ].map((job, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-400">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">{job.title}</h3>
                    <p className="text-gray-300">{job.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{job.period}</span>
                </div>
                <p className="text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Feel free to reach out if you'd like to collaborate or just want to say hello!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">📧</span>
                  <span className="text-gray-300">john.doe@email.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">📱</span>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">📍</span>
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full p-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
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
