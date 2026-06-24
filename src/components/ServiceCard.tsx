import type { ServiceType } from "@/types";

export const ServiceCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className="group flex items-start justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-border/0 relative overflow-hidden">
      {/* Mobile: permanent left accent bar — hidden on lg+ */}
      <span className="absolute top-6 bottom-6 left-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent lg:hidden" />

      {/* Mobile: permanent soft tint — hidden on lg+ */}
      <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent lg:hidden rounded-2xl" />

      {/* Desktop hover: top accent line */}
      <span className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block" />

      {/* Desktop hover: soft background glow */}
      <span className="absolute inset-0 bg-gradient-to-b from-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl hidden lg:block" />

      <div className="relative">
        <h3 className="text-lg font-medium text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-muted-foreground">{service.desc}</p>
      </div>

      <div className="shrink-0 relative text-muted-foreground group-hover:text-primary transition-colors duration-300">
        {service.icon}
      </div>
    </div>
  );
};
