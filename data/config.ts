export interface SiteConfig {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  location: string;
  timezone: string;
  city: string;
  country: string;
  email: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  availability: {
    status: string;
    startDate: string;
    workPreference: string;
    hours: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Candra Putra Pratama",
  shortName: "Candra Putra",
  role: "Fullstack Web Developer",
  tagline: "Mahasiswa D4 Teknik Informatika PENS • Next.js, REST API, dan basis data relasional.",
  location: "Surabaya / Sidoarjo, Indonesia",
  timezone: "Asia/Jakarta",
  city: "Surabaya",
  country: "ID",
  email: "candraputrap46@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/CandraPutraPratama",
    linkedin: "https://linkedin.com/in/candra-putra-pratama",
    email: "mailto:candraputrap46@gmail.com",
  },
  availability: {
    status: "Tersedia magang",
    startDate: "6 Jan 2027",
    workPreference: "WFO Surabaya / Sidoarjo",
    hours: "Magang penuh waktu Senin–Jumat",
  },
};
