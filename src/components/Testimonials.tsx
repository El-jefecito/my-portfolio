import { motion } from "motion/react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { testimonials } from "@/constants";
import { SectionHeader } from "./SectionHeader";
import { Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={staggerContainer(0)}
      className="mt-20 scroll-mt-10"
      id="testimonials"
    >
      <SectionHeader subtitle="Testimonials" title="What clients are saying" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={staggerContainer(0.2)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
      >
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex flex-col p-6 rounded-lg bg-card border border-border/50 hover:border-primary transition-all duration-300 hover:shadow-lg"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-muted-foreground mb-6 grow">
              "{testimonial.text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                loading="lazy"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
