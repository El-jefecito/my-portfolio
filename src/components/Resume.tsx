import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./ui/button";
import { education, experience, tools } from "@/constants";
import { ServiceCard } from "./ServiceCard";
import { ExpCard } from "./ExpCard";
import { ToolsCard } from "./ToolsCard";

export const Resume = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-20 scroll-mt-10"
      id="resume"
    >
      <SectionHeader subtitle="Technologies" title="My favourite tools" />

      <div className="my-16">
        {/* <motion.h2
          className="text-3xl font-semibold mb-8 capitalize"
          variants={fadeUp}
        >
          My favourite tools
        </motion.h2> */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.5)}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5"
        >
          {tools.map((tool, i) => (
            <ToolsCard key={i} tool={tool} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

//  return (
//    <motion.section
//      initial="hidden"
//      whileInView="visible"
//      viewport={{ once: true, amount: 0.3 }}
//      variants={staggerContainer(0)}
//      className="mt-30 scroll-mt-10"
//      id="resume"
//    >
//      <SectionHeader
//        subtitle="Resume"
//        title="Education and practical experience"
//      />

//      <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
//        With a background in Computer Science and hands-on experience in design
//        and front-end development, I've worked on diverse projects ranging from
//        landing pages to Saas dashboards. Each project has strengthened my focus
//        on building clean, functional, and user-friendly digital experiences
//      </motion.p>

//      <div className="grid gap-x-10 my-16 md:grid-cols-2">
//        <motion.div variants={fadeUp} className="mb-16 md:mb-0">
//          <h2 className="text-3xl font-semibold mb-8">Education</h2>
//          <div className="space-y-8 border-l border-border pl-6">
//            {education.map((item, i) => (
//              <ExpCard key={i} item={item} />
//            ))}
//          </div>
//        </motion.div>

//        <motion.div variants={fadeUp}>
//          <h2 className="text-3xl font-semibold mb-8">Work Experience</h2>
//          <div className="space-y-8 border-l border-border pl-6">
//            {experience.map((item, i) => (
//              <ExpCard key={i} item={item} />
//            ))}
//          </div>
//        </motion.div>
//      </div>

//      <div className="my-16">
//        <motion.h2
//          className="text-3xl font-semibold mb-8 capitalize"
//          variants={fadeUp}
//        >
//          My favourite tools
//        </motion.h2>

//        <motion.div
//          initial="hidden"
//          whileInView="visible"
//          viewport={{ once: true, amount: 0.3 }}
//          variants={staggerContainer(0.5)}
//          className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5"
//        >
//          {tools.map((tool, i) => (
//            <ToolsCard key={i} tool={tool} />
//          ))}
//        </motion.div>
//      </div>
//    </motion.section>
//  );
