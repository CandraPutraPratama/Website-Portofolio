export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://website-portofolio-lac-pi.vercel.app/sitemap.xml",
  };
}
