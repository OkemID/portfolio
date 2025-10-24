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
        </div>

        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="about-text"
        >
          <h2>A Fusion of Engineering and Design</h2>
          <p>
            I am Chukwubuokem engineer by training, developer by craft, athlete
            by habit, and builder by purpose. I earned a B.Eng. in Marine
            Engineering (Second Class Upper) from the Federal University of
            Petroleum Resources, Effurun (FUPRE), and I’m currently pursuing a
            Master’s in Computer Science at Aston University, Birmingham. I grew
            up fascinated by systems: how engines convert fuel into motion, how
            code becomes product, how a body turns training into performance,
            and how communities transform ideas into opportunity. That curiosity
            is still my compass.
          </p>

          <h2>Early Curiosity - Systems Thinking</h2>
          <p>
            As a kid, I took things apart (radios, fans, toys) just to see how
            the pieces made sense together. Marine engineering sharpened that
            instinct into discipline: thermodynamics, propulsion, reliability,
            safety, and optimization. Software development expanded it further:
            data structures, UI/UX ergonomics, APIs, distributed systems, and
            product strategy. Sport gave me a feedback loop for improvement:
            train, measure, adjust, repeat. Health care taught me empathy and
            responsibility. These four lenses
            <strong>engineering, software, sport, and health</strong> are now
            the foundation of everything I build.
          </p>

          <h2>Engineering Foundation</h2>
          <p>
            Marine engineering taught me to think in <strong>lifecycles</strong>{" "}
            from specification to operation, maintenance, and continuous
            improvement. It trained me to spot failure modes, design for
            constraints, and prioritize the essentials: safety, efficiency, and
            sustainability. Those same habits now show up in my code reviews, my
            database design, my release plans, and my leadership style.
          </p>

          <h2>Becoming a Developer</h2>
          <p>
            Today, I'm a work in progress, building end-to-end products with
            JavaScript/TypeScript, React & React Native, Node.js/Express, and
            Python. I’m comfortable from data modeling (Postgres/PostGIS) and
            API design to mobile UI/UX, offline-first patterns, and DevOps. I
            care deeply about design systems, accessibility, and code quality. I
            enjoy turning ambiguous ideas into shippable, documented
            features—and I maintain a component library for reuse and
            consistency.
          </p>

          <h2>Athlete & Competitor</h2>
          <p>
            I’m a sprinter in the <strong>100m, 200m, and 400m.</strong>{" "}
            Training taught me discipline and patience, but also timing: not
            every day is a personal best, and that’s okay. You stack good days
            until the clock notices. My targets are specific, my logs are
            meticulous, and I use video, drills, and phase planning to track
            progress. The through line from the track to tech is simple:{" "}
            <strong>consistency beats intensity when sustained.</strong>
          </p>

          <h2>Health, Care, and Human-Centered Work</h2>
          <p>
            Coming from a family with my Mom as a nurse with hands-on experience
            in drug administration, caregiving, therapy, wellness coaching, and
            physical rehabilitation. Health care sharpened my ability to listen,
            to explain, and to put people at ease—skills that translate directly
            into product discovery, user interviews, and team leadership. When I
            design flows, I’m thinking about cognitive load, clarity, and the
            stakes if we get something wrong.
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
