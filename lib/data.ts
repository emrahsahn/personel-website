export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: { tr: string[]; en: string[] };
}

export const experiences: ExperienceItem[] = [
  {
    company: "The Leapers",
    role: "Intern",
    period: "Feb 2026 – May 2026",
    location: "London, England (Remote)",
    highlights: {
      tr: [
        "Hybrid Agent Platform projesinin başlangıç aşamasında yer aldım.",
        "Müşteri taleplerini otonom biçimde analiz edip doğru çözüm yoluna yönlendiren çok katmanlı karar verme pipeline'ları tasarladım.",
      ],
      en: [
        "Contributed to the early stage of the Hybrid Agent Platform project.",
        "Designed multi-layer decision pipelines that autonomously analyze customer requests and route them to the right solution path.",
      ],
    },
  },
  {
    company: "Havelsan",
    role: "Intern",
    period: "Jul 2025 – Aug 2025",
    location: "Ankara, Turkey",
    highlights: {
      tr: [
        "Toksisite, doğruluk, çoklu dil desteği ve BLEU/ROUGE metrikleri kapsamında 5+ modern AI modelini değerlendiren LLM test altyapısı geliştirdim.",
        "Proje yöneticisi olarak ekipler arası koordinasyonu üstlendim; otomatize test fonksiyonları ile manuel kalite kontrol süresini %40 kısalttım.",
      ],
      en: [
        "Built an LLM evaluation framework assessing 5+ modern AI models across toxicity, fairness, multilingual support, and BLEU/ROUGE metrics.",
        "Led cross-team coordination as project manager and reduced manual QA time by ~40% through automated test functions.",
      ],
    },
  },
  {
    company: "Solvent Yazılım",
    role: "Volunteer Intern",
    period: "May 2025 – Jun 2025",
    location: "Gebze / Kocaeli, Turkey",
    highlights: {
      tr: [
        "Text-to-Speech ve Speech-to-Text sistemlerine yönelik NLP model geliştirme projesinde yer aldım.",
        "500+ ham ses transkripsiyonundan yapılandırılmış veri çıkararak eğitim veri setlerinin giriş kalitesini artırdım.",
      ],
      en: [
        "Worked on NLP model development for Text-to-Speech and Speech-to-Text systems.",
        "Improved training data quality by extracting structured data from 500+ raw audio transcriptions.",
      ],
    },
  },
  {
    company: "Hamle Teknoloji",
    role: "Intern",
    period: "Jul 2024 – Aug 2024",
    location: "Gebze / Kocaeli, Turkey",
    highlights: {
      tr: [
        "10.000+ görüntülük veri seti üzerinde derin öğrenme tabanlı görüntü sınıflandırma modeli geliştirdim; doğruluk %92'ye ulaştı.",
        "Python ve Pandas ile EDA ve ön işleme pipeline'ları kurarak veri gürültüsünü yaklaşık %30 azalttım.",
      ],
      en: [
        "Developed a deep learning image classification model on a 10,000+ image dataset, reaching 92% validation accuracy.",
        "Built EDA and preprocessing pipelines with Python and Pandas, reducing data noise by approximately 30%.",
      ],
    },
  },
];

export interface ProjectItem {
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  technologies: string[];
  github?: string;
  link?: string;
  period?: string;
}

export const projects: ProjectItem[] = [
  {
    title: {
      tr: "TÜBİTAK 2209 - Veri Analitiği & Karar Destek Sistemi",
      en: "TÜBİTAK 2209 - Data Analytics & Decision Support",
    },
    description: {
      tr: "Ham verilerin toplanması, temizlenmesi ve karar destek sistemi prototipi. TÜBİTAK onaylı proje.",
      en: "Data collection, cleaning, and decision support system prototype. TÜBİTAK approved project.",
    },
    technologies: ["Python", "Pandas", "Scikit-learn", "SQL", "BeautifulSoup"],
    period: "2024 – 2025",
  },
  {
    title: {
      tr: "Kişisel Harcama Takip & Bütçe Analitiği",
      en: "Personal Expense Tracking & Budget Analytics",
    },
    description: {
      tr: "Spring Boot REST API ve Next.js dashboard ile bütçe yönetimi ve harcama analitiği sistemi.",
      en: "Budget management and expense analytics system with Spring Boot REST API and Next.js dashboard.",
    },
    technologies: [
      "Java",
      "Spring Boot",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    period: "Feb 2026 – Apr 2026",
    github: "https://github.com/emrahsahn/Harcama-Takip",
  },
  {
    title: {
      tr: "LLM Değerlendirme & Benchmarking Sistemi",
      en: "LLM Evaluation & Benchmarking System",
    },
    description: {
      tr: "Havelsan stajında geliştirilen; toksisite, fairness ve çoklu dil desteği ölçen kapsamlı LLM test altyapısı.",
      en: "Comprehensive LLM testing infrastructure measuring toxicity, fairness, and multilingual support, developed at Havelsan.",
    },
    technologies: ["Python", "LLMs", "BLEU", "ROUGE", "NLP"],
    period: "Jul 2025 – Aug 2025",
  },
  {
    title: {
      tr: "Lord of Polymorphism",
      en: "Lord of Polymorphism",
    },
    description: {
      tr: "Nesne yönelimli programlama ve polimorfizm konseptlerini temel alan oyun projesi.",
      en: "A game project based on object-oriented programming and polymorphism concepts.",
    },
    technologies: ["OOP", "Game Development", "Polymorphism"],
    github: "https://github.com/emrahsahn/lord-of-polymorphism",
    link: "https://lords-of-the-polywarphism-game.vercel.app",
  },
  {
    title: {
      tr: "Kurban Yönetim Sistemi",
      en: "Livestock Management System",
    },
    description: {
      tr: "Kurbanlık hayvan kayıt, takip ve yönetim süreçlerini dijitalleştiren TypeScript tabanlı web uygulaması.",
      en: "TypeScript-based web application that digitizes sacrifice livestock registration, tracking, and management workflows.",
    },
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    period: "2026",
    github: "https://github.com/emrahsahn/Sacrifice-Livestock-Tracker",
  },
  {
    title: {
      tr: "Meme Kanseri Sınıflandırma Sistemi",
      en: "Breast Cancer Classification System",
    },
    description: {
      tr: "Python ve C++ ile geliştirilen derin öğrenme tabanlı tıbbi görüntü sınıflandırma modeli.",
      en: "Deep learning-based medical image classification model developed in Python and C++.",
    },
    technologies: ["Python", "C++", "Scikit-learn", "Deep Learning"],
    github: "https://github.com/emrahsahn/Breast-Cancer-Classification",
  },
  {
    title: {
      tr: "Akıllı Çöp Ayrıştırma Sistemi",
      en: "Smart Waste Sorting System",
    },
    description: {
      tr: "Atık türlerini sınıflandırarak geri dönüşümü artırmaya yönelik yapay zeka tabanlı sistem.",
      en: "AI-powered system that classifies waste types to increase recycling efficiency.",
    },
    technologies: ["Python", "Deep Learning", "Computer Vision", "PyTorch"],
    github: "https://github.com/emrahsahn/akilli-cop-ayristirma-sistemi",
  },
  {
    title: {
      tr: "AI Destekli Görüntü Sınıflandırma",
      en: "AI-Powered Image Classification",
    },
    description: {
      tr: "Veri analizi ve derin öğrenme teknikleriyle geliştirilen görüntü sınıflandırma modeli.",
      en: "Image classification model developed using data analytics and deep learning techniques.",
    },
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    github:
      "https://github.com/emrahsahn/Yapay-Zeka-Destekli-Goruntu-Siniflandirma-Projesi",
  },
  {
    title: {
      tr: "Proje Yönetimi için Agent Sistemi",
      en: "Agent System for Projects",
    },
    description: {
      tr: "Yazılım projelerinde görev planlama ve otomasyon için tasarlanmış AI agent tabanlı yönetim sistemi.",
      en: "AI agent-based management system designed for task planning and automation in software projects.",
    },
    technologies: ["HTML", "JavaScript", "AI Agents", "LangChain"],
    period: "2026",
    github: "https://github.com/emrahsahn/Agent-System-for-Projects",
  },
  {
    title: {
      tr: "Ensemble Learning Deneyleri",
      en: "Ensemble Learning Experiments",
    },
    description: {
      tr: "Kendi oluşturulan veri setlerinde çeşitli ensemble learning algoritmalarının uygulanması ve karşılaştırılması.",
      en: "Application and comparison of various ensemble learning algorithms on custom-built datasets.",
    },
    technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    period: "2026",
    github: "https://github.com/emrahsahn/Ensemble-Learning",
  },
  {
    title: {
      tr: "E-Ticaret Web Sitesi",
      en: "E-Commerce Website",
    },
    description: {
      tr: "Ürün listeleme, sepet yönetimi ve kullanıcı arayüzü içeren tam kapsamlı e-ticaret web uygulaması.",
      en: "Full-featured e-commerce web application with product listing, cart management, and user interface.",
    },
    technologies: ["JavaScript", "HTML", "CSS", "Web Development"],
    github: "https://github.com/emrahsahn/E-Commerce-Website",
  },
  {
    title: {
      tr: "SQL Veri Ambarı Projesi",
      en: "SQL Data Warehouse Project",
    },
    description: {
      tr: "Veri ambalama, ETL süreçleri ve analitik sorgular için tasarlanmış SQL tabanlı veri ambarı projesi.",
      en: "SQL-based data warehouse project designed for data modeling, ETL processes, and analytical queries.",
    },
    technologies: ["SQL", "Data Modeling", "ETL", "Database Design"],
    period: "2026",
    github: "https://github.com/emrahsahn/sql_data_warehouse_project",
  },
];

export const skillCategories = [
  {
    key: "programming",
    skills: ["Python", "C++", "Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    key: "ai",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "scikit-learn",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
    ],
  },
  {
    key: "web",
    skills: ["Next.js", "React", "FastAPI", "Spring Boot", "Tailwind CSS"],
  },
  {
    key: "tools",
    skills: ["Git", "Docker", "Jupyter", "VS Code"],
  },
];
