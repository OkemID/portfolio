import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  CheckCircle,
} from "lucide-react";

const Experience = () => {
  const techExperience = [
    {
      title: "Frontend Designer/Developer",
      company: "CarDex",
      location: "Birmingham",
      period: "May 2025 - June 2025",
      achievements: [
        "Designed each screen across all pages and UI level components.",
        "Developed responsive and adaptive websites using ReactJS.",
      ],
    },
    {
      title: "UX/UI Designer",
      company: "PayRight Mobile Service",
      location: "Delta State",
      period: "Nov 2024 - Jan 2025",
      achievements: [
        "Redesigned screens for website and mobile apps, leading to increased user feedback.",
        "Developed responsive websites using HTML5 and CSS3.",
      ],
    },
    {
      title: "Web Developer",
      company: "ShapeGrind | Health and Fitness",
      location: "Remote",
      period: "Oct 2017 - Mar 2023",
      achievements: [
        "Developed a responsive, user-friendly wellness website using React.js.",
        "Collaborated with designers to implement optimal UX strategies.",
      ],
    },
    {
      title: "Project Manager & UI/UX Design Developer",
      company: "eHub",
      location: "Remote",
      period: "Feb 2020 - Dec 2020",
      achievements: [
        "Led development of a cross-platform academic app.",
        "Created UI designs and front-end prototypes with HTML, CSS, and JavaScript.",
      ],
    },
  ];

  const marineExperience = [
    {
      title: "Marine Engineer & Team Leader",
      company: "Centre for Maritime and Offshore Safety",
      location: "Effurun, Delta State",
      period: "Feb 2021 - Oct 2021",
      achievements: [
        "Led a final-year project to enhance offshore fishery productivity.",
        "Spearheaded the design and implementation of an offshore monitoring system.",
        "Conducted hands-on fabrication, assembly, and welding.",
      ],
    },
    {
      title: "Marine Maintenance Intern",
      company: "Heritage Energy Operational Services Ltd (HEOSL)",
      location: "Remote",
      period: "Jul 2019 - Dec 2019",
      achievements: [
        "Maintained propulsion engines (CAT G-3516 drivers, Ariel compressors).",
        "Monitored 30 oil wells across six propulsion stations.",
        "Conducted daily HSE inspections and routine system diagnostics.",
      ],
    },
  ];

  const leadershipExperience = [
    {
      title: "Project Manager",
      company: "Nigerian Society of Engineers (NSE)",
      location: "Remote",
      period: "Nov 2019 - Aug 2020",
      achievements: [
        "Led construction of a student exhibition center.",
        "Managed project logistics and ensured safety protocol adherence.",
      ],
    },
    {
      title: "Deputy Executive Officer",
      company: "Signum Vita Resources",
      location: "Delta State",
      period: "Jan 2022 – Dec 2022",
      achievements: [
        "Expanded membership from 5 to 627.",
        "Led partner support and community wellness outreach.",
      ],
    },
    {
      title: "Customer Service Partner",
      company: "Dvris Palmarian Resources",
      location: "Delta State",
      period: "Jan 2021 – Dec 2021",
      achievements: [
        "Served 100+ clients daily; mentored 12 into leadership roles.",
      ],
    },
  ];

  const education = [
    {
      degree: "MSc, Computer Science",
      school: "Aston University, UK",
      period: "2025 – 2026",
    },
    {
      degree: "B.Eng, Marine Engineering",
      school: "FUPRE, Nigeria",
      period: "2015 – 2021",
    },
  ];

  const volunteering = [
    {
      role: "NYSC Teaching Assistant",
      org: "Govt Secondary School, Bayelsa",
      year: "2023",
    },
    {
      role: "Polio Immunization Volunteer",
      org: "Primary Healthcare, Asaba",
      year: "2016",
    },
    {
      role: "National Sports Director",
      org: "Nigerian Universities Engineering Students’ Association",
      year: "2020–2021",
    },
    {
      role: "Course Rep & Academic Mediator",
      org: "Federal University of Petroleum Resources",
      year: "2015–2021",
    },
  ];

  const ExperienceCard = ({ item, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-effect rounded-2xl p-6"
    >
      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
      <p className="font-semibold text-blue-400 mb-2">{item.company}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-400 text-sm mb-4">
        <div className="flex items-center gap-1.5">
          <MapPin size={14} />
          {item.location}
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar size={14} />
          {item.period}
        </div>
      </div>
      <ul className="space-y-2">
        {item.achievements.map((ach, i) => (
          <li key={i} className="flex items-start text-gray-300">
            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
            <span>{ach}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

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
            Professional Journey
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A timeline of my diverse experience across technology, engineering,
            and leadership.
          </p>
        </motion.div>

        <Section title="Technology & Design Experience" icon={<Briefcase />}>
          <div className="grid md:grid-cols-2 gap-8">
            {techExperience.map((exp, i) => (
              <ExperienceCard key={i} item={exp} index={i} />
            ))}
          </div>
        </Section>

        <Section title="Marine Engineering Experience" icon={<Briefcase />}>
          <div className="grid md:grid-cols-2 gap-8">
            {marineExperience.map((exp, i) => (
              <ExperienceCard key={i} item={exp} index={i} />
            ))}
          </div>
        </Section>

        <Section title="Leadership & Management" icon={<Briefcase />}>
          <div className="grid md:grid-cols-2 gap-8">
            {leadershipExperience.map((exp, i) => (
              <ExperienceCard key={i} item={exp} index={i} />
            ))}
          </div>
        </Section>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          <Section title="Education" icon={<GraduationCap />}>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="glass-effect rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-blue-400">{edu.school}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </Section>
          <Section title="Volunteering & Leadership Roles" icon={<Heart />}>
            <div className="space-y-4">
              {volunteering.map((vol, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="glass-effect rounded-xl p-4"
                >
                  <h4 className="font-semibold text-white">{vol.role}</h4>
                  <p className="text-gray-300 text-sm">
                    {vol.org} ({vol.year})
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, icon, children }) => (
  <div className="mb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4 mb-8"
    >
      <div className="text-blue-400 bg-gray-800 p-3 rounded-full">{icon}</div>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </motion.div>
    {children}
  </div>
);

export default Experience;
