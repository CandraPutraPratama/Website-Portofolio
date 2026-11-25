import SiteNav from "../../components/SiteNav";
import { PROJECTS } from "../../data/projects";

export const metadata = {
  title: "Arsip Proyek | Candra Putra Pratama",
  description:
    "Arsip proyek web dan basis data Candra Putra Pratama: proyek mandiri, tugas kuliah, dan proyek tim PBL PENS.",
};

export default function WorkPage() {
  return (
    <div className="r-root">
      <a className="r-skip" href="#main">
        Lewati ke konten
      </a>
      <SiteNav home />

      <main id="main" className="r-section r-archive">
        <div className="r-head">
          <h1 className="r-h2">Arsip proyek</h1>
          <p className="r-sub">
            Proyek mandiri, tugas kuliah, dan proyek tim PBL: aplikasi web dengan
            backend dan basis data relasional.
          </p>
        </div>

        <ul className="r-grid">
          {PROJECTS.map((p) => (
            <li key={p.title} className="r-card r-card--small">
              <p className="r-meta">
                {p.year}, {p.role}
              </p>
              <h2 className="r-h4">{p.title}</h2>
              <p className="r-p r-p--small">{p.desc}</p>
              <ul className="r-tags">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="r-links">
                {p.liveUrl ? (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                    Buka aplikasi
                  </a>
                ) : null}
                {p.githubUrl ? (
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
                    Lihat kode
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        <div className="r-links r-links--end">
          <a href="/">Kembali ke beranda</a>
        </div>
      </main>

      <footer className="r-footer">
        <p>2026, Candra Putra Pratama</p>
      </footer>
    </div>
  );
}
