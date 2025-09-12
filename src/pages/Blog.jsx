import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { toast } from "../components/ui/use-toast";
import "./styles/Blog.css";

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
     image: "https://images.unsplash.com/photo-1577510409458-a70f1efcba3d",
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
     image: "https://images.unsplash.com/photo-1577510409458-a70f1efcba3d",
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
     image: "https://images.unsplash.com/photo-1577510409458-a70f1efcba3d",
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
     image: "https://images.unsplash.com/photo-1577510409458-a70f1efcba3d",
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
     image: "https://images.unsplash.com/photo-1577510409458-a70f1efcba3d",
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
     image: "https://images.unsplash.com/photo-1577510409458-a70f1efcba3d",
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
      description: "Feature not implemented yet! 🚀",
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
    <div className="blog-page">
      <div className="blog-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="blog-heading gradient-text">Blog</h1>
          <p className="blog-subtext">
            Insights, experiences, and thoughts on development, design, trading,
            athletics, healthcare, and entrepreneurship
          </p>
        </motion.div>

        {/* Search + Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Search */}
          <div className="search-bar">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="categories">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div layout className="blog-grid">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="blog-card"
              onClick={() => handleReadMore(post.id)}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img alt={post.title} src={post.image} />
                <div className="overlay"></div>
                <div className="category">{post.category}</div>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <div>
                    <Calendar size={16} /> <span>{formatDate(post.date)}</span>
                  </div>
                  <div>
                    <Clock size={16} /> <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>

                <div className="blog-tags">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <span key={i}>
                      <Tag size={12} style={{ marginRight: "0.25rem" }} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="blog-readmore">
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="blog-empty">
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝</div>
              <h3>No posts found</h3>
              <p>Try adjusting your search terms or category filter</p>
            </div>
          </motion.div>
        )}

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="blog-newsletter"
        >
          <h2>Stay Updated</h2>
          <p>
            Subscribe to get notified about new blog posts covering the latest
            in technology, design, trading insights, athletic performance,
            healthcare innovations, and entrepreneurship.
          </p>
          <div className="form">
            <input type="email" placeholder="Enter your email" />
            <Button onClick={() => handleReadMore("newsletter")}>
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
