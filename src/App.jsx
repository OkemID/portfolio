import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import OtherPassions from "@/pages/OtherPassions";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div
        className={`min-h-screen transition-all duration-500 ${
          isDarkMode ? "dark" : "light"
        }`}
      >
        <Helmet>
          <title>
            Creative Professional Portfolio - Software Developer & UI/UX
            Designer
          </title>
          <meta
            name="description"
            content="Multi-skilled creative professional specializing in software development and UI/UX design, with expertise in forex trading, athletics, healthcare, and entrepreneurship."
          />
        </Helmet>

        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main className="scroll-smooth">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/passions" element={<OtherPassions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Toaster />
      </div>
    </Router>
  );
}

export default App;
