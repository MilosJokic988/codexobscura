import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";
import t from "../translations";
import "./Home.css";

export default function Home() {
  const { lang } = useLang();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = e => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const px = (mouse.x / window.innerWidth - 0.5) * 8;
  const py = (mouse.y / window.innerHeight - 0.5) * 6;
  const portfolio = Array.from("PORTFOLIO");

  return (
    <>
      <Helmet>
        <title>Codex Obscura – Digitalna umetnost i misterije</title>
        <meta
          name="description"
          content="Codex Obscura stvara digitalne projekte koji kombinuju umetnost, misterije i interaktivni portfolio. Pogledajte radove i istražite digitalni svet simbolike."
        />
      </Helmet>

      <section className="hero-hero">
        <div className="hero-content">
          <div className="brand-large">
            <span className="brand-icon">✦</span>
            <h1>Codex <span>Obscura</span></h1>
          </div>

          <p className="hero-sub">{t[lang].home_sub}</p>

          <div className="hero-cta">
            <Link to="/projects" className="btn">{t[lang].home_cta_projects}</Link>
            <Link to="/about" className="btn ghost">{t[lang].home_cta_about}</Link>
          </div>

          <div className="tech-icons">
            <FaHtml5 title="HTML5" className="tech-icon html" />
            <FaCss3Alt title="CSS3" className="tech-icon css" />
            <FaJsSquare title="JS" className="tech-icon js" />
            <FaReact title="React" className="tech-icon react" />
          </div>
        </div>

        <div className="hero-vignette" />

        <div className="arrow-trail">
          {portfolio.map((letter, index) => (
            <div key={index} className="arrow-item">
              <span className="letter">{letter}</span>
              <span className="arrow">↑</span>
            </div>
          ))}
        </div>

        <Background px={px} py={py} />
      </section>
    </>
  );
}

function Background({ px, py }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `url('/lilith.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        filter: 'brightness(0.45) contrast(1.05) saturate(1.1) blur(1.5px)',
        transform: `translate3d(${px}px, ${py}px, 0) scale(1.02)`,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
