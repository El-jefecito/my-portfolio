import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { SparkleIcon } from "lucide-react";

export const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="pt-10"
      id="hero"
    >
      <div className="hidden">
        <motion.p
          variants={fadeUp}
          className="flex items-center justify-center py-1 gap-2 border border-border rounded-sm w-32"
        >
          <SparkleIcon size={15} /> <span>Introduction</span>
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16"
        >
          I'm{" "}
          <span className="text-primary">
            Adelaja Tobiloba <br />
          </span>
          <span className="font-serif">Frontend Developer</span>
        </motion.h1>

        <motion.div variants={fadeUp} className="mt-5 flex gap-2">
          <Button asChild>
            <a href="#projects">My Projects</a>
          </Button>

          <Button variant="outline">
            <a
              href="/Adelaja_Tobiloba0(1).pdf"
              download="Adelaja_Tobiloba0(1).pdf"
            >
              Download CV
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
