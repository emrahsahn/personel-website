"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const socialLinks = [
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: siteConfig.email },
    { icon: Github, href: siteConfig.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: siteConfig.instagram, label: "Instagram" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 group-hover:from-accent-purple/30 group-hover:to-accent-pink/30 transition-all">
                <Icon size={20} className="text-accent-purple" />
              </div>
              <span className="text-white/70 group-hover:text-white transition-colors text-sm">
                {label}
              </span>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 space-y-4"
        >
          {submitted ? (
            <div className="flex items-center justify-center h-full min-h-[200px]">
              <p className="text-accent-purple text-lg font-medium text-center">
                {t("form.success")}
              </p>
            </div>
          ) : (
            <>
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  {t("form.message")}
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-purple to-accent-pink text-white font-medium hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 hover:scale-[1.02]"
              >
                <Send size={18} />
                {t("form.submit")}
              </button>
            </>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
