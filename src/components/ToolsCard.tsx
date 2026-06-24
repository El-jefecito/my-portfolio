import { fadeUp } from "@/lib/animations";
import type { ToolsType } from "@/types";
import { motion } from "motion/react";

export const ToolsCard = ({ tool }: { tool: ToolsType }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="border border-border rounded-md flex justify-center items-center flex-col py-4 -mb-6"
    >
      <img
        src={tool.imgSrc}
        alt={tool.label}
        className="w-10 h-10 object-contain"
      />
      <p className="font-bold mt-2">{tool.label}</p>
    </motion.div>
  );
};
