import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Resume } from "./components/Resume";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Lenis from "lenis";
import { Navbar } from "./components/Navbar";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis(); // no options needed — uses window by default

    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      window.dispatchEvent(
        new CustomEvent("lenis-scroll", { detail: { scroll } }),
      );
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <ErrorBoundary>
      <Navbar />
      <main className="flex flex-col container mx-auto p-10 px-4 py-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl">
        <Hero />
        <About />
        <Services />
        <Projects />
        {/* <Stats /> */}
        <Resume />
        <Testimonials />
        <Contact />
      </main>
    </ErrorBoundary>
  );
};

export default App;
