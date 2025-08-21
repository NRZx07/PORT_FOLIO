import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Aspiring Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        NIRAJ <br className="sm:hidden md:block" />
        JHA
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A Passionate Web Developer and Engineer <br /> with a year of experience.
      </motion.p>

      <motion.a
        href="/RESUME_NIRAJ.pdf"
        download
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        whileHover={{ scale: 1.05 }}
        className="inline-block mt-6 px-6 py-3 text-white font-semibold bg-orange rounded-xl shadow-lg transition duration-300 ease-in-out hover:bg-orange/90"
      >
        Download CV
      </motion.a>
    </div>
  );
};

export default HeroText;
