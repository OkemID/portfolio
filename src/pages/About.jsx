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

const About = () => {
  const handleDownloadCV = (type) => {
    toast({
      title: `🚧 ${type} CV Download`,
      description:
        "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const contactDetails = [
    { icon: <Phone className="h-5 w-5" />, text: "+44 (0)7349 859 301" },
    {
      icon: <Mail className="h-5 w-5" />,
      text: "chukwubuokem.mordi@gmail.com",
    },
    { icon: <MapPin className="h-5 w-5" />, text: "Birmingham, UK" },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description:
        "Constantly pushing boundaries and exploring new technologies to create cutting-edge solutions.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description:
        "Deeply committed to every project, bringing enthusiasm and dedication to deliver exceptional results.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description:
        "Striving for perfection in every detail, ensuring the highest quality in all deliverables.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey, from the engine room of a ship to the architecture of an
            application.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                alt="Professional working in modern office environment"
                src="https://images.unsplash.com/photo-1560849144-739435323954"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              A Fusion of Engineering and Design
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              I am a multi-talented professional with a strong foundation in
              Marine Engineering and a deep passion for Software Development and
              UI/UX Design. My unique background allows me to approach problems
              with a robust, systems-thinking mindset, while my creative drive
              ensures the solutions are not only functional but also elegant and
              user-centric.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              From managing high-stakes projects in the maritime industry to
              designing and developing cross-platform applications, I thrive on
              turning complex challenges into seamless experiences. I am a
              natural leader, dedicated to fostering growth, collaboration, and
              excellence in every endeavor.
            </p>

            <div className="glass-effect rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Contact Information:
              </h3>
              {contactDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-300 gap-4"
                >
                  <div className="text-blue-400">{detail.icon}</div>
                  <span>{detail.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Download My CVs:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  onClick={() => handleDownloadCV("Tech & Marine")}
                  className="w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Tech & Marine CV
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDownloadCV("General")}
                  className="w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  General CV
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
            Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl p-8 text-center"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
