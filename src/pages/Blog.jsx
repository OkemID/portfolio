import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { toast } from "../components/ui/use-toast";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Exploring the latest trends in web development including AI integration, serverless architecture, and the evolution of JavaScript frameworks.",
      category: "development",
      date: "2024-01-15",
      readTime: "8 min read",
      image:
        "Modern web development workspace with code on multiple screens and futuristic UI elements",
      tags: ["Web Development", "JavaScript", "AI", "Trends"],
    },
    {
      id: 2,
      title: "Creating Intuitive User Experiences: A Designer's Perspective",
      excerpt:
        "Deep dive into the principles of UX design and how to create interfaces that users love. Learn about user research, prototyping, and testing.",
      category: "design",
      date: "2024-01-10",
      readTime: "6 min read",
      image:
        "UX designer working on user interface mockups with design tools and user journey maps",
      tags: ["UX Design", "User Research", "Prototyping", "Design Thinking"],
    },
    {
      id: 3,
      title: "Trading Psychology: Mastering Your Emotions in Forex Markets",
      excerpt:
        "Understanding the psychological aspects of trading and how to develop the mental discipline required for consistent profitability.",
      category: "trading",
      date: "2024-01-05",
      readTime: "10 min read",
      image:
        "Professional trader analyzing forex charts with focus on market psychology and emotional control",
      tags: ["Forex", "Trading Psychology", "Risk Management", "Finance"],
    },
    {
      id: 4,
      title: "Peak Performance: Training Strategies for Sprint Athletes",
      excerpt:
        "Comprehensive guide to sprint training methodologies, including speed development, strength training, and recovery protocols.",
      category: "athletics",
      date: "2023-12-28",
      readTime: "7 min read",
      image:
        "Professional sprint athlete training on track with coach analyzing performance data",
      tags: ["Athletics", "Sprint Training", "Performance", "Sports Science"],
    },
    {
      id: 5,
      title: "Digital Health: Technology's Role in Modern Healthcare",
      excerpt:
        "Examining how technology is transforming healthcare delivery, from telemedicine to AI-powered diagnostics.",
      category: "healthcare",
      date: "2023-12-20",
      readTime: "9 min read",
      image:
        "Healthcare professional using digital technology and medical devices in modern hospital setting",
      tags: ["Healthcare", "Digital Health", "Technology", "Innovation"],
    },
    {
      id: 6,
      title: "Building Successful Startups: Lessons from the Trenches",
      excerpt:
        "Real-world insights from building multiple startups, including common pitfalls, funding strategies, and scaling challenges.",
      category: "entrepreneurship",
      date: "2023-12-15",
      readTime: "12 min read",
      image:
        "Startup team brainstorming in modern office with business plans and growth charts on whiteboards",
      tags: ["Entrepreneurship", "Startups", "Business Strategy", "Innovation"],
    },
  ];

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "development", label: "Development" },
    { id: "design", label: "Design" },
    { id: "trading", label: "Trading" },
    { id: "athletics", label: "Athletics" },
    { id: "healthcare", label: "Healthcare" },
    { id: "entrepreneurship", label: "Entrepreneurship" },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReadMore = (postId) => {
    toast({
      title: "🚧 Blog Post",
      description:
        "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
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
            Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, experiences, and thoughts on development, design, trading,
            athletics, healthcare, and entrepreneurship
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-8 max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "border-gray-600 text-gray-400 hover:text-white hover:border-white"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => handleReadMore(post.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={post.title}
                  src="https://images.unsplash.com/photo-1577510409458-a70f1efcba3d"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/80 text-white rounded-full text-sm font-medium capitalize">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h2>

                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full"
                    >
                      <Tag className="inline h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                  <span>Read More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No posts found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search terms or category filter
            </p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 glass-effect rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to get notified about new blog posts covering the latest
            in technology, design, trading insights, athletic performance,
            healthcare innovations, and entrepreneurship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
            />
            <Button
              onClick={() => handleReadMore("newsletter")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
