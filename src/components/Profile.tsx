import { socialLinks } from "@/constants";
// import { Button } from "./ui/button";
// import { fadeUp, staggerContainer } from "@/lib/animations";
// import { motion } from "motion/react";
// import { SparkleIcon } from "lucide-react";

export const Profile = () => {
  return (
    <aside
      id="hero"
      className="relative overflow-hidden max-w-3xl border border-border/50 m-6 -mb-5 bg-card text-foreground p-6 rounded-lg lg:sticky lg:left-0 lg:top-20 lg:w-96"
    >
      <div className="flex flex-col gap-4">
        {/* Name + title: stacked on mobile, spaced on larger screens */}
        <div className="flex flex-col gap-1 mt-3.5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-light bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400 px-3 py-1 rounded-full whitespace-nowrap">
              ● Available
            </span>
          </div>
          <p className="text-base font-semibold text-gray-400">
            Software Developer
          </p>
          <h1 className="text-3xl font-bold">Adelaja Tobiloba</h1>
        </div>

        {/* Avatar */}
        <div className="rounded-2xl overflow-hidden border-2 border-border relative">
          <img
            src="/avatar.jpg"
            alt="Adelaja Tobiloba"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        {/* Social links */}
        <div className="flex gap-3 pt-2 text-muted-foreground justify-between">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                href={social.link}
                key={i}
                className="flex-1 flex items-center justify-center hover:text-primary border-2 border-border p-2 rounded-full hover:border-primary transition duration-200"
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>

        <a
          href="/Adelaja_Tobiloba_CV.pdf"
          download="Adelaja_Tobiloba_CV.pdf"
          className="w-full text-center bg-primary text-primary-foreground font-medium py-2.5 px-4 rounded-lg text-sm hover:bg-neutral-200 transition"
        >
          Download CV
        </a>

        <a
          href="#contact"
          className="w-full text-center border border-border text-foreground font-medium py-2.5 px-4 rounded-lg text-sm hover:bg-card transition"
        >
          Let's Connect!
        </a>
      </div>
    </aside>
  );
};
