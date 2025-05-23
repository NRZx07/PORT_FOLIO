import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import React from "react";

const experiences = [
  {
    job: "Back-End Developer",
    company: "CodeAlpha",
    date: "2025 ",
    responsibilities: [
"Developing reusable backend modules and APIs.",
"Participating in large scale backend system design.",
"Working on server-side performance optimization.",



    ],
  },
  {
    job: "WEB DEVELOPER",
    company: "KITPD2s",
    date: "2024 - Present",
    responsibilities: [
"Developing and maintaining the society website.",
"Participating in design and content updates.",
"Working on responsive and user-friendly UI.",
"Generating new ideas for better community engagement.",

    ],
  },
  {
    job: "JAVA DEVELOPER",
    company: "PINNACLE",
    date: "2024 - Present",
    responsibilities: [
   "Developing backend applications using Java.",
"Participating in object-oriented system design.",
"Working on performance tuning and debugging.",
"Generating new ideas for modular code structure.",

    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
             ""
            )}
         </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperiences;
