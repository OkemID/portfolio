import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ButtonOne } from "../components/Button";
import { toast } from "../components/ui/use-toast";
import profile from "../../assets/profile.jpeg";
import "./styles/Home.css";

const Home = () => {
  const handleDownloadCV = () => {
    toast({
      title: "🚧 CV Download",
      description: "Please make a request for the latest CV 🚀",
    });
  };
  const handleHireMe = () => {
    toast({
      title: "🚧 Hire Me",
      description: "Please use the contact page 🚀",
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="introContainer"
          >
            {/* ========Heading======== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className=""
            >
              <h2 className="greeting">Hi, I'm</h2>
              <h1 className="name">Chukwubuokem O Mordi</h1>
              <h3 className="heading">
                Software Developer, UI/UX Designer & Marine Engineer
              </h3>
            </motion.div>

            {/*===========Description=========== */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="description"
            >
              A dynamic professional bridging the worlds of advanced engineering
              and creative technology. My journey from marine engineering to
              software development is fueled by a passion for solving complex
              problems and building intuitive, high-impact digital solutions.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
              }}
              className="CTA"
            >
              <Link to="/portfolio">
                <ButtonOne className="portfolioButton">
                  View My Portfolio
                  <ArrowRight className="portfolioIcon" />
                </ButtonOne>
              </Link>

              {/* ========Download CV======== */}
              <ButtonOne
                variant="outline"
                onClick={handleDownloadCV}
                className=""
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </ButtonOne>

              {/* ========Hire Me======== */}
              <ButtonOne
                onClick={handleHireMe}
                className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </ButtonOne>
            </motion.div>

            {/* =========Call to action========= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              className="CTA"
            >
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-gray-900"></div>
              </motion.div>

              <motion.div
                className="relative z-10 floating-animation"
                whileHover={{
                  scale: 1.05,
                }}
              >
                <img
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/20"
                  alt="Mordi Chukwubuokem"
                  src={profile}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="mouse"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default Home;
