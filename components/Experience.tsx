"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  const t = useTranslations("experience");
  const locale = useLocale() as "tr" | "en";

  return (
    <SectionWrapper id="experience">
      <SectionTitle title={t("title")} />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple via-accent-pink to-accent-orange md:-translate-x-1/2" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-purple border-2 border-background md:-translate-x-1/2 z-10 mt-6" />

              <div className="hidden md:block md:w-1/2" />

              <div className="ml-10 md:ml-0 md:w-1/2">
                <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase
                      className="text-accent-purple shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all">
                        {exp.company}
                      </h3>
                      <p className="text-accent-orange text-sm font-medium">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-white/50">
                    <span>{exp.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights[locale].map((highlight, i) => (
                      <li
                        key={i}
                        className="text-white/60 text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-accent-purple mt-1.5 shrink-0">
                          ▸
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
