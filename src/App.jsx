/* eslint-disable no-unused-vars */
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skill } from "./components/Skill";
import { Work } from "./components/Work";
import { Review } from "./components/Review";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const App = () => {
  useLayoutEffect(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "-200 bottom", // Animation starts when element is 75% in view
            end: "80%",   // Animation ends when element is 25% in view
            scrub: true,
            // markers: true
          },
        }
      );
    });
  }, []);

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
};
