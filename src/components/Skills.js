import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages/Tools",
    skills: [
      { name: "Python", image: require("../assets/images/skills/python.png") },
      { name: "Java", image: require("../assets/images/skills/java.png") },
      { name: "JavaScript", image: require("../assets/images/skills/js.png") },
      { name: "C# (.NET)", image: require("../assets/images/skills/c-sharp.png") },
      { name: "Dart", image: require("../assets/images/skills/dart.png") },
      { name: "TypeScript", image: require("../assets/images/skills/typescript.png") },
      { name: "HTML", image: require("../assets/images/skills/html.png") },
      { name: "CSS", image: require("../assets/images/skills/css-3.png") },
      { name: "MATLAB", image: require("../assets/images/skills/matlab.png") },
      { name: "Git", image: require("../assets/images/skills/git.png") },
    ],
  },
  {
    category: "Frameworks/Libraries",
    skills: [
      { name: "Node.js", image: require("../assets/images/skills/nodejs.png") },
      { name: "Next.js", image: require("../assets/images/skills/nextjs.png") },
      { name: "Flutter", image: require("../assets/images/skills/flutter.png") },
      { name: "Pandas", image: require("../assets/images/skills/pandas.png") },
      { name: "NumPy", image: require("../assets/images/skills/NumPy.png") },
      { name: "React.js", image: require("../assets/images/skills/react.png") },
      { name: "Tailwind.css", image: require("../assets/images/skills/tailwind.png") },
    ],
  },
  {
    category: "Technologies",
    skills: [
      { name: "AWS", image: require("../assets/images/skills/aws.png") },
      { name: "MySQL", image: require("../assets/images/skills/mysql.png") },
      { name: "PostgreSQL", image: require("../assets/images/skills/postgres.png") },
      { name: "MongoDB", image: require("../assets/images/skills/mongo.png") },
      { name: "Postman", image: require("../assets/images/skills/postman.png") },
      { name: "Heroku", image: require("../assets/images/skills/heroku.png") },
      { name: "Twilio", image: require("../assets/images/skills/twilio.png") },
    ],
  },
];

const Skills = () => {
  return (
    <div className="text-white min-h-screen flex flex-col items-center py-10">
     
      <motion.h1
        className="text-5xl font-semibold mt-4 mb-16 text-[#c665db]"
       
      >
        Skills
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 mb-16 max-w-2xl text-center"
        
      >
        Some of the languages, frameworks, and technologies I have experience with!
      </motion.p>

      <div className="w-full max-w-6xl space-y-10">
        {skillsData.map((category, index) => (
          <div key={index} className="space-y-4">
            
            <motion.h2
              className="text-3xl font-semibold text-[#c665db] text-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              {category.category}
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-8">
              {category.skills.map((skill, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1.5 }}
                    whileHover={{ scale: 1.3 }}
                    className="flex flex-col items-center justify-center"
                  >
                    
                    <motion.div
                      className="w-20 h-20 rounded-full overflow-hidden bg-gray-700 mt-4 shadow-lg flex justify-center items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <img src={skill.image} alt={skill.name} className="object-contain w-12 h-12" />
                    </motion.div>

                    
                    <motion.p
                      className="mt-2 mb-6 text-white text-sm text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      {skill.name}
                    </motion.p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
