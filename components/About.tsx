"use client";

import { useTranslations } from "next-intl";
import { GraduationCap, Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

export default function About() {
  const t = useTranslations("about");

  return (
    <SectionWrapper id="about">
      <SectionTitle title={t("title")} />

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="glass rounded-2xl p-6 md:p-8 glow-purple">
          <p className="text-white/70 leading-relaxed text-base md:text-lg">
            {t("summary")}
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8 glow-orange">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-accent-purple" size={28} />
            <h3 className="text-xl font-semibold text-white">
              {t("education.title")}
            </h3>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-white font-medium text-lg">
                {t("education.degree")}
              </p>
              <p className="text-white/60">{t("education.university")}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-accent-purple/20 text-accent-purple text-sm">
                {t("education.period")}
              </span>
              <span className="px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue text-sm">
                {t("education.gpa")}
              </span>
              <span className="px-3 py-1 rounded-full bg-accent-orange/20 text-accent-orange text-sm">
                {t("education.scholarship")}
              </span>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <Award className="text-accent-pink" size={18} />
              <span className="text-white/70 text-sm">
                {t("education.thesis")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
