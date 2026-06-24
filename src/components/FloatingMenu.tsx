import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const FloatingMenu = () => {
  const [active, setActive] = useState("#hero");

  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 hidden z-50 lg:block">
      <div className="flex flex-col items-center gap-1 py-3 px-2 rounded-2xl border border-white/20 dark:border-white/10 dark:bg-zinc-900/60 backdrop-blur-xl backdrop-saturate-150 shadow-xl shadow-black/10 dark:shadow-black/40">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = active === link.link;

          return (
            <a
              href={link.link}
              key={link.label}
              onClick={() => setActive(link.link)}
              title={link.label}
              className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground/70 hover:bg-black/5 dark:hover:bg-white/10 hover:text-foreground",
              )}
            >
              <Icon className="size-[18px]" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
