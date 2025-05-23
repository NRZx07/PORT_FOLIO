import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        
I’m <span>NIRAJ JHA</span>, a full-stack developer in the making with a strong passion for building dynamic and user-focused web applications. I work with technologies like HTML, CSS, JavaScript, React, and Node.js, and enjoy creating both the front-end and back-end of real-world projects. As a B.Tech student at KIIT, I constantly push myself to learn, build, and grow in the ever-evolving world of tech.

I also run a YouTube channel, <span>Niraj Cinematic Universe</span>, where I explore creativity through storytelling and content creation. Outside of coding, I’m always learning something new and love sharing knowledge to help others grow along their journey in tech.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
