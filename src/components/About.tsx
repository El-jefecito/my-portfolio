import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./ui/button";

export const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className=" scroll-mt-10 -mb-5"
      id="about"
    >
      <SectionHeader
        subtitle="About Me"
        title="Transforming complexity into effortless design"
      />

      <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
        I’m a frontend developer with strong experience in React, JavaScript
        (ES6+), NextJs and Tailwind CSS. I build responsive,
        performance-optimized web applications that prioritize usability and
        clean architecture. I focus on writing reusable components, managing
        state efficiently, and integrating APIs to create dynamic user
        experiences. My goal is to contribute to impactful products while
        continuously growing as a developer.
      </motion.p>

      <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
        <Button className="mt-5">Contact Me</Button>
      </motion.div>
    </motion.section>
  );
};
