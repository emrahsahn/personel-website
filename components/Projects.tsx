"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale() as "tr" | "en";
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <SectionWrapper id="projects">
      <SectionTitle title={t("title")} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.title.en}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group flex flex-col"
          >
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:gradient-text transition-all">
              {project.title[locale]}
            </h3>

            {project.period && (
              <span className="text-xs text-accent-orange mb-3">
                {project.period}
              </span>
            )}

            <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
              {project.description[locale]}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full bg-white/5 text-white/50 text-xs border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent-purple hover:text-accent-pink transition-colors mt-auto"
              >
                <Github size={16} />
                {t("viewGithub")}
                <ExternalLink size={14} />
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="px-4 py-2 rounded-full bg-accent-purple text-white hover:bg-accent-pink transition-colors"
          >
            {showAll ? t("showLess") : t("showMore")}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
