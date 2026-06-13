"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <SectionWrapper id="skills">
      <SectionTitle title={t("title")} />

      <div className="grid sm:grid-cols-2 gap-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold gradient-text mb-4">
              {t(`categories.${category.key}`)}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: catIndex * 0.1 + skillIndex * 0.05,
                  }}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-accent-purple/10 to-accent-orange/10 border border-white/10 text-white/80 text-sm hover:border-accent-purple/30 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
