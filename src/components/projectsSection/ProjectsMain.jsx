import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Weather App",
    year: "Mar2025",
    align: "right",
    image: "../../public/images/Weatherapp.png",
    link: "https://nrzx07.github.io/WeatherApp/",
  },
  {
    name: "My website",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "https://nrzx07.github.io/My-website/",
  },
  {
    name: "Heart Generator",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/Heart.png",
    link: "https://nrzx07.github.io/Heart-Generator/",
  },
  {
    name: "Modern Webpage",
    year: "May2025",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
