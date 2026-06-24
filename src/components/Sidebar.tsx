import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { navLinks, socialLinks } from "@/constants";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const [active, setActive] = useState("#hero");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="m-4 fixed top-16 right-4 z-50 border-2 hover:border-primary bg-card py-5 px-5 rounded-full hover:text-primary cursor-pointer lg:hidden hidden"
          >
            <MenuIcon size={30} />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-84 bg-neutral-900 text-foreground py-6 pl-10 right-3.5"
        >
          <SheetTitle className="text-lg">Menu</SheetTitle>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  href={link.link}
                  key={link.label}
                  onClick={() => {
                    setActive(link.link);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors duration-200 text-base",
                    active === link.link && "text-primary",
                  )}
                >
                  <Icon className="size-4" /> {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-30">
            <p className="pb-2">Socials</p>

            <div className="flex gap-3 text-muted-foreground">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.link}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-primary border-2 border-border p-2 rounded-full hover:border-primary transition duration-200"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
