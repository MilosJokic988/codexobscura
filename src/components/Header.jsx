import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import t from "../translations";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="brand">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <span className="brand-icon">✦</span> Codex <span>Obscura</span>
        </Link>
      </div>

      <div className="lang-switch" onClick={toggleLang}>
        {lang === "sr" ? "SRB" : "ENG"}
      </div>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar top"></span>
        <span className="bar middle"></span>
        <span className="bar bottom"></span>
      </button>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>{t[lang].nav_home}</NavLink>
        <NavLink to="/about" onClick={closeMenu}>{t[lang].nav_about}</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>{t[lang].nav_projects}</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>{t[lang].nav_contact}</NavLink>
      </nav>
    </header>
  );
}
