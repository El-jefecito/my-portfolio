import { projectsData } from "@/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-20 scroll-mt-10 -mb-5"
      id="projects"
    >
      <SectionHeader subtitle="Projects" title="My featured projects" />

      <motion.div
        className="grid md:grid-cols-2 gap-10 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        {projectsData.map((project, i) => (
          <ProjectCard
            key={i}
            imgSrc={project.imgSrc}
            title={project.title}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};
