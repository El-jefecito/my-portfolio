import { fadeUp } from "@/lib/animations";
import type { ProjectType } from "@/types";
import { motion } from "motion/react";

// export const ProjectCard = ({
//   imgSrc,
//   projectLink,
//   tags,
//   title,
// }: ProjectType) => {
//   return (
//     <motion.div variants={fadeUp} className="relative">
//       <figure className="overflow-hidden rounded-md">
//         <img
//           src={imgSrc}
//           alt={title}
//           className="rounded-md transition duration-500 hover:scale-115 w-full"
//         />
//       </figure>

//       <div className="absolute bottom-0 p-2 flex gap-2">
//         {tags.map((tag, i) => (
//           <span
//             key={i}
//             className="bg-background hover-bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

type ProjectCardProps = {
  imgSrc: string;
  title: string;
  github: string;
  demo: string;
};

export const ProjectCard = ({
  imgSrc,
  title,
  github,
  demo,
}: ProjectCardProps) => {
  return (
    <div className="group space-y-3">
      {/* Image clickable → Demo */}
      <a href={demo} target="_blank" rel="noopener noreferrer">
        <img
          src={imgSrc}
          alt={title}
          className="rounded-xl transition group-hover:scale-105"
        />
      </a>

      {/* <h3 className="text-lg font-semibold">{title}</h3> */}

      <div className="flex gap-3 pt-2">
        {/* GitHub */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-200 transition"
        >
          GitHub
        </a>

        {/* Demo */}
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-200 transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};
