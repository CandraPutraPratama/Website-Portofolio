const BASE = "https://website-portofolio-lac-pi.vercel.app";

export default function sitemap() {
  return [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/work`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
