import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "development",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "Modern e-commerce website interface with shopping cart and product gallery",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "design",
      description: "UI/UX design for a modern mobile banking application",
      tech: ["Figma", "Prototyping", "User Research"],
      image: "Mobile banking app interface design with clean modern UI",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Task Management System",
      category: "development",
      description:
        "Collaborative task management platform with real-time updates",
      tech: ["Vue.js", "Firebase", "WebSocket"],
      image:
        "Task management dashboard with kanban boards and team collaboration",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Healthcare Dashboard",
      category: "design",
      description:
        "Comprehensive dashboard design for healthcare professionals",
      tech: ["Adobe XD", "User Testing", "Wireframing"],
      image: "Healthcare dashboard interface with patient data and analytics",
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Crypto Trading Bot",
      category: "development",
      description: "Automated trading bot with advanced algorithms",
      tech: ["Python", "APIs", "Machine Learning"],
      image: "Cryptocurrency trading bot interface with charts and analytics",
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "Fitness App Design",
      category: "design",
      description: "Complete UI/UX design for a fitness tracking application",
      tech: ["Sketch", "InVision", "User Journey"],
      image:
        "Fitness tracking app design with workout plans and progress tracking",
      github: "#",
      demo: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "development", label: "Development" },
    { id: "design", label: "UI/UX Design" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleProjectClick = (type, url) => {
    toast({
      title: `🚧 ${type} Link`,
      description:
        "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <div className="min-h-screen pt-20 section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my latest projects showcasing software development and UI/UX
            design expertise
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "border-gray-600 text-gray-400 hover:text-white hover:border-white"
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={project.title}
                  src="https://images.unsplash.com/photo-1595872018818-97555653a011"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={() => handleProjectClick("GitHub", project.github)}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={() => handleProjectClick("Demo", project.demo)}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create amazing
            digital experiences. Let's discuss your next project!
          </p>
          <Button
            onClick={() => handleProjectClick("Contact", "/contact")}
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
