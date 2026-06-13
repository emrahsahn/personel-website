"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: siteConfig.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: siteConfig.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/50 hover:text-accent-purple transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <p className="text-white/40 text-sm text-center">
            &copy; {year} Emrah Şahin. {t("rights")}
          </p>

          <p className="text-white/40 text-sm">{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
