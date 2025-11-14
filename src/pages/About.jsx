import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';
import { useLang } from "../context/LanguageContext.jsx";

export default function About() {
  const { lang } = useLang();

  const t = {
    sr: {
      title: "Codex Obscura – O meni",
      meta: "Codex Obscura je digitalni istraživač misterija koji stvara projekte sa edukacijom, mračnom estetikom i interaktivnim pričama.",
      heading: "O meni",
      p1: `Zdravo! Ja sam Codex Obscura, digitalni istraživač misterija i alhemičar modernog doba. Posvećen sam stvaranju sadržaja i projekata koji kombinuju edukaciju, mračnu estetiku i interaktivnu priču.`,
      p2: `Strastveno istražujem teme poput okultnog, istorije umetnosti i misterija, i uvek težim da prenesem znanje na kreativan način. Pored toga, radim na projektima koji spajaju digitalni svet sa simbolikom i narativom.`,
      philosophy: "Moja filozofija",
      philosophyText: `Verujem da svaki sajt ima dušu. Dizajn nije samo lep izgled — već način da se priča prenese, da emocija prođe kroz ekran. U mom radu, tehnologija i simbolika se stapaju u narativ koji ostavlja trag.`,
      packagesHeading: "Ponude izrade sajtova",
      packagesIntro: "Svaki projekat je unikat, ali kako bi imao okvirnu predstavu, izdvajam tri glavna nivoa:",
      packages: [
        { name: "Portfolio i lične prezentacije", price: "250€ – 350€" },
        { name: "Poslovni sajtovi", price: "400€ – 600€" },
        { name: "Online prodavnice", price: "700€ – 1000€" },
        { name: "Umetnički i tematski projekti", price: "600€ – 900€" },
      ],
      typesHeading: "Vrste sajtova koje izrađujem",
      types: [
        "🛍️ Online prodavnice",
        "🍷 Restorani i ugostitelji",
        "🎭 Portfolio za umetnike",
        "⚔️ Tematski i narativni projekti",
        "💼 Poslovne prezentacije",
        "📖 Edukativni sajtovi",
      ],
      techHeading: "Tehnologije koje koristim",
      tech: ["⚛️ React", "🟨 JavaScript", "🎨 CSS3", "🧱 HTML5", "🚀 Vite", "📡 API integracije"],
      principlesHeading: "Tri principa mog rada",
      principles: ["Autentičnost", "Preciznost", "Misterija"],
      quote: "Digitalni svet nije bezdušan — ako znaš kako da u njega udahneš duh.",
      diploma: "Diploma",
      diplomaLink: "Pogledaj PDF",
    },
    en: {
      title: "Codex Obscura – About",
      meta: "Codex Obscura is a digital explorer of mysteries creating projects blending education, dark aesthetics, and interactive storytelling.",
      heading: "About Me",
      p1: `Hello! I'm Codex Obscura, a digital explorer of mysteries and modern-day alchemist. I create projects that combine education, dark aesthetics, and interactive storytelling.`,
      p2: `I passionately explore topics such as the occult, art history, and mysteries, always aiming to deliver knowledge in a creative way. I also work on projects that merge the digital world with symbolism and narrative.`,
      philosophy: "My Philosophy",
      philosophyText: `I believe every website has a soul. Design is not just visuals — it's a way to tell a story, to send emotion through the screen. In my work, technology and symbolism merge into a narrative that leaves a mark.`,
      packagesHeading: "Website Packages",
      packagesIntro: "Each project is unique, but here’s an overview of the main levels:",
      packages: [
        { name: "Portfolio & Personal Sites", price: "250€ – 350€" },
        { name: "Business Websites", price: "400€ – 600€" },
        { name: "Online Stores", price: "700€ – 1000€" },
        { name: "Artistic & Thematic Projects", price: "600€ – 900€" },
      ],
      typesHeading: "Types of Websites I Create",
      types: [
        "🛍️ Online Stores",
        "🍷 Restaurants & Hospitality",
        "🎭 Artist Portfolios",
        "⚔️ Thematic & Narrative Projects",
        "💼 Business Presentations",
        "📖 Educational Websites",
      ],
      techHeading: "Technologies I Use",
      tech: ["⚛️ React", "🟨 JavaScript", "🎨 CSS3", "🧱 HTML5", "🚀 Vite", "📡 API integrations"],
      principlesHeading: "Three Principles of My Work",
      principles: ["Authenticity", "Precision", "Mystery"],
      quote: "The digital world is not soulless — if you know how to breathe spirit into it.",
      diploma: "Diploma",
      diplomaLink: "View PDF",
    },
  }[lang];

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.meta} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Codex Obscura",
            "url": "https://tvoj-domen.rs",
            "sameAs": ["https://www.tiktok.com/@codexarcanum"],
            "jobTitle": lang === "sr" ? "Digitalni istraživač misterija" : "Digital Explorer of Mysteries",
            "description": t.meta
          })}
        </script>
      </Helmet>

      <section className="page about about-section">
        <div className="about-container">
          <h2 className="about-title">{t.heading}</h2>
          <p className="about-text">{t.p1}</p>
          <p className="about-text">{t.p2}</p>

          <div className="about-philosophy">
            <h3>{t.philosophy}</h3>
            <p>{t.philosophyText}</p>
          </div>

          <div className="about-pricing">
            <h3>{t.packagesHeading}</h3>
            <p className="about-text">{t.packagesIntro}</p>
            <ul className="pricing-list">
              {t.packages.map((pkg, idx) => (
                <li key={idx}>
                  <strong>{pkg.name}</strong> <span className="price">{pkg.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-types">
            <h3>{t.typesHeading}</h3>
            <ul>
              {t.types.map((type, idx) => (
                <li key={idx}>{type}</li>
              ))}
            </ul>
          </div>

          <div className="about-tech">
            <h3>{t.techHeading}</h3>
            <div className="tech-icons">
              {t.tech.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="about-principles">
            <h3>{t.principlesHeading}</h3>
            <ul>
              {t.principles.map((p, idx) => (
                <li key={idx}><strong>{p}</strong></li>
              ))}
            </ul>
          </div>

          <blockquote className="about-quote">{t.quote}</blockquote>

          <div className="about-diploma">
            <strong>{t.diploma}:</strong>{" "}
            <a href="/diploma.pdf" target="_blank" rel="noopener noreferrer" className="btn">
              {t.diplomaLink}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
