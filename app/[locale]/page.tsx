import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

type Props = {
  params: { locale: string };
};

export default function HomePage({ params }: Props) {
  setRequestLocale(params.locale);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
