import { useEffect, useState, useMemo } from "react";
import { Button } from "./ui/button";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import { navLinks, socialLinks } from "@/constants";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [active, setActive] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme") ?? "dark";
    setIsDark(saved === "dark");
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  // prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  const renderedLinks = useMemo(
    () =>
      navLinks.map((link, index) => {
        // ← add index
        const Icon = link.icon;
        return (
          <a
            href={link.link}
            key={link.label}
            onClick={() => {
              setActive(link.link);
              setOpen(false);
            }}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
            className={cn(
              "bounce-in text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors duration-200 text-base",
              active === link.link && "text-primary",
            )}
          >
            <Icon className="size-4" /> {link.label}
          </a>
        );
      }),
    [active, open], // ← add open to deps
  );

  return (
    <>
      <nav
        className={`fixed  top-0 left-0 w-full h-14 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/60 dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 backdrop-blur-md shadow-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-full flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="border border-border bg-card hover:border-primary hover:text-primary text-foreground rounded-full py-5 px-5 cursor-pointer"
          >
            {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            className="border hover:border-primary bg-card py-5 px-5 rounded-full hover:text-primary text-foreground cursor-pointer"
          >
            <MenuIcon size={30} />
          </Button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 bg-background py-4 px-6 flex flex-col gap-6 shadow-xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Menu</p>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="rounded-full"
          >
            <XIcon size={18} />
          </Button>
        </div>

        <nav className="flex flex-col gap-4">{open && renderedLinks}</nav>

        <div className="mt-auto">
          <p className="pb-2">Socials</p>
          <div className="flex gap-3 text-muted-foreground">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.link}
                  className="hover:text-primary border-2 border-border p-2 rounded-full hover:border-primary transition duration-200"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
