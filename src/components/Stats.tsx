// import { motion } from "motion/react";
// import { staggerContainer, fadeUp } from "@/lib/animations";
// import { statsData } from "@/constants";
// import { SectionHeader } from "./SectionHeader";

// export const Stats = () => {
//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.8 }}
//       variants={staggerContainer(0)}
//       className="mt-20 scroll-mt-10"
//       id="stats"
//     >
//       <SectionHeader subtitle="Achievements" title="By the numbers" />

//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.8 }}
//         variants={staggerContainer(0.2)}
//         className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
//       >
//         {statsData.map((stat, i) => (
//           <motion.div
//             key={i}
//             variants={fadeUp}
//             className="flex flex-col items-center justify-center text-center p-6 rounded-lg bg-card border border-border/50 hover:border-primary transition-colors duration-300"
//           >
//             <p className="text-4xl md:text-5xl font-bold text-primary mb-3">
//               {stat.number}
//             </p>
//             <p className="text-lg text-muted-foreground">{stat.label}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// };
