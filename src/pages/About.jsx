import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Award,
  Heart,
  Target,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { toast } from "../components/ui/use-toast";
import "./styles/About.css";

const About = () => {
  const handleDownloadCV = (type) => {
    toast({
      title: `🚧 ${type} CV Download`,
      description:
        "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const contactDetails = [
    { icon: <Phone />, text: "+44 (0)7349 859 301" },
    { icon: <Mail />, text: "chukwubuokem.mordi@gmail.com" },
    { icon: <MapPin />, text: "Birmingham, UK" },
  ];

  const values = [
    {
      icon: <Target />,
      title: "Innovation",
      description:
        "Constantly pushing boundaries and exploring new technologies to create cutting-edge solutions.",
    },
    {
      icon: <Heart />,
      title: "Passion",
      description:
        "Deeply committed to every project, bringing enthusiasm and dedication to deliver exceptional results.",
    },
    {
      icon: <Award />,
      title: "Excellence",
      description:
        "Striving for perfection in every detail, ensuring the highest quality in all deliverables.",
    },
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="about-heading gradient-text">About Me</h1>
          <p className="about-subtext">
            My journey, from the engine room of a ship to the architecture of an
            application.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-image"
          >
            <div>
              <img
                alt="Professional working in modern office environment"
                src="https://images.unsplash.com/photo-1560849144-739435323954"
              />
            </div>
            <div className="about-image-gradient"></div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="about-text"
          >
            <h2>A Fusion of Engineering and Design</h2>

            <p>
              I am a multi-talented professional with a strong foundation in
              Marine Engineering and a deep passion for Software Development and
              UI/UX Design...
            </p>

            <div className="glass-effect">
              <h3>Contact Information:</h3>
              {contactDetails.map((detail, index) => (
                <div key={index} className="contact-info">
                  <div className="icon">{detail.icon}</div>
                  <span>{detail.text}</span>
                </div>
              ))}
            </div>

            <div className="cv-section">
              <h3>Download My CVs:</h3>
              <div className="cv-buttons">
                <Button
                  variant="outline"
                  onClick={() => handleDownloadCV("Tech & Marine")}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Tech & Marine CV
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDownloadCV("General")}
                >
                  <Download className="mr-2 h-4 w-4" />
                  General CV
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="core-values"
        >
          <h2>Core Values</h2>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div key={index} className="value-card">
                <div className="icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
