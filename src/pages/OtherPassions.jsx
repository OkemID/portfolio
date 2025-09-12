import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Trophy,
  Heart,
  Lightbulb,
  BarChart3,
  Timer,
  Award,
  Target,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { toast } from "../components/ui/use-toast";

const OtherPassions = () => {
  const [activeTab, setActiveTab] = useState("forex");

  const passions = {
    forex: {
      title: "Forex & Trading",
      icon: <TrendingUp className="h-8 w-8" />,
      description:
        "Strategic trading with advanced market analysis and risk management",
      content: {
        strategies: [
          "Technical Analysis & Chart Patterns",
          "Fundamental Economic Analysis",
          "Risk Management & Position Sizing",
          "Algorithmic Trading Strategies",
        ],
        platforms: ["MetaTrader 4/5", "TradingView", "cTrader", "NinjaTrader"],
        performance: [
          { metric: "Win Rate", value: "68%" },
          { metric: "Risk/Reward", value: "1:2.5" },
          { metric: "Monthly ROI", value: "12%" },
          { metric: "Max Drawdown", value: "8%" },
        ],
        image:
          "Professional forex trading setup with multiple monitors showing charts and market analysis",
      },
    },
    athletics: {
      title: "Athletics (Track & Field)",
      icon: <Trophy className="h-8 w-8" />,
      description:
        "Competitive sprinting with focus on speed development and performance optimization",
      content: {
        events: ["100m Sprint", "200m Sprint", "4x100m Relay", "Long Jump"],
        achievements: [
          "Regional Championship Gold Medal",
          "Personal Best: 10.85s (100m)",
          "University Track Team Captain",
          "State Qualifier 3 consecutive years",
        ],
        training: [
          { focus: "Speed Training", frequency: "4x/week" },
          { focus: "Strength Training", frequency: "3x/week" },
          { focus: "Recovery & Mobility", frequency: "Daily" },
          { focus: "Technical Drills", frequency: "5x/week" },
        ],
        image:
          "Athletic sprinter in starting position on professional track with stadium in background",
      },
    },
    healthcare: {
      title: "Healthcare/Nursing",
      icon: <Heart className="h-8 w-8" />,
      description:
        "Compassionate healthcare delivery with focus on patient care and medical technology",
      content: {
        specializations: [
          "Emergency Care & Trauma",
          "Patient Assessment & Care Planning",
          "Medical Technology Integration",
          "Health Education & Prevention",
        ],
        certifications: [
          "RN License",
          "BLS Certification",
          "ACLS Certification",
          "PALS Certification",
        ],
        services: [
          "Patient Care Coordination",
          "Health Assessments",
          "Medical Consultation",
          "Wellness Programs",
        ],
        image:
          "Professional healthcare worker in modern medical facility with advanced equipment",
      },
    },
    entrepreneurship: {
      title: "Entrepreneurship/Startup Projects",
      icon: <Lightbulb className="h-8 w-8" />,
      description:
        "Innovative startup ventures focusing on technology solutions and business development",
      content: {
        projects: [
          {
            name: "OKEMID",
            description:
              "Healthcare management platform connecting patients with providers",
            status: "Development Phase",
            tech: ["React Native", "Node.js", "MongoDB"],
          },
          {
            name: "Ehub",
            description: "Educational technology platform for online learning",
            status: "MVP Complete",
            tech: ["Vue.js", "Firebase", "Stripe"],
          },
        ],
        skills: [
          "Business Strategy & Planning",
          "Market Research & Analysis",
          "Product Development",
          "Investor Relations",
        ],
        image:
          "Modern startup office environment with entrepreneurs working on innovative technology projects",
      },
    },
  };

  const tabs = [
    { id: "forex", label: "Forex & Trading" },
    { id: "athletics", label: "Athletics" },
    { id: "healthcare", label: "Healthcare" },
    { id: "entrepreneurship", label: "Entrepreneurship" },
  ];

  const handleLearnMore = (passion) => {
    toast({
      title: `🚧 ${passion} Details`,
      description:
        "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const currentPassion = passions[activeTab];

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
            Other Passions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Exploring diverse interests beyond technology - from trading and
            athletics to healthcare and entrepreneurship
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "border-gray-600 text-gray-400 hover:text-white hover:border-white"
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header Section */}
          <div className="glass-effect rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="text-blue-400 mr-4">{currentPassion.icon}</div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  {currentPassion.title}
                </h2>
                <p className="text-gray-400 mt-2">
                  {currentPassion.description}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <img
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                alt={currentPassion.title}
                src="https://images.unsplash.com/photo-1701696934146-21e29efabc7f"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl -z-10"></div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Forex Content */}
              {activeTab === "forex" && (
                <>
                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5 text-blue-400" />
                      Trading Strategies
                    </h3>
                    <ul className="space-y-2">
                      {currentPassion.content.strategies.map(
                        (strategy, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-300"
                          >
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                            {strategy}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Performance Metrics
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {currentPassion.content.performance.map(
                        (metric, index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl font-bold gradient-text">
                              {metric.value}
                            </div>
                            <div className="text-gray-400 text-sm">
                              {metric.metric}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Athletics Content */}
              {activeTab === "athletics" && (
                <>
                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Award className="mr-2 h-5 w-5 text-blue-400" />
                      Achievements
                    </h3>
                    <ul className="space-y-2">
                      {currentPassion.content.achievements.map(
                        (achievement, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-300"
                          >
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                            {achievement}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Timer className="mr-2 h-5 w-5 text-blue-400" />
                      Training Schedule
                    </h3>
                    <div className="space-y-3">
                      {currentPassion.content.training.map((session, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <span className="text-gray-300">{session.focus}</span>
                          <span className="text-blue-400 font-semibold">
                            {session.frequency}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Healthcare Content */}
              {activeTab === "healthcare" && (
                <>
                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Heart className="mr-2 h-5 w-5 text-blue-400" />
                      Specializations
                    </h3>
                    <ul className="space-y-2">
                      {currentPassion.content.specializations.map(
                        (spec, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-300"
                          >
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                            {spec}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Certifications
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {currentPassion.content.certifications.map(
                        (cert, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm text-center"
                          >
                            {cert}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Entrepreneurship Content */}
              {activeTab === "entrepreneurship" && (
                <>
                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Target className="mr-2 h-5 w-5 text-blue-400" />
                      Current Projects
                    </h3>
                    <div className="space-y-4">
                      {currentPassion.content.projects.map((project, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-blue-400 pl-4"
                        >
                          <h4 className="font-semibold text-white">
                            {project.name}
                          </h4>
                          <p className="text-gray-400 text-sm mb-2">
                            {project.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-green-400 text-xs">
                              {project.status}
                            </span>
                            <div className="flex gap-1">
                              {project.tech.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Business Skills
                    </h3>
                    <ul className="space-y-2">
                      {currentPassion.content.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-300"
                        >
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              <Button
                onClick={() => handleLearnMore(currentPassion.title)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Learn More About {currentPassion.title}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OtherPassions;
