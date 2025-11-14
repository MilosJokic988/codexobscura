import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import './Projects.css';
import { useLang } from '../context/LanguageContext.jsx';

const mockProjects = [
  { id: 1, title: { sr: 'Pravoslavlje', en: 'Orthodoxy' }, desc: { sr: 'Informativni portal o pravoslavnoj veri i duhovnosti.', en: 'Informative portal about Orthodox faith and spirituality.' }, link: 'https://pravoslavlje.vercel.app' },
  { id: 2, title: { sr: 'Dostoyevsky', en: 'Dostoyevsky' }, desc: { sr: 'Platforma posvećena delima Dostojevskog, eseji i citati.', en: 'Platform dedicated to Dostoyevsky\'s works, essays and quotes.' }, link: 'https://dostoyevsky.vercel.app' },
  { id: 3, title: { sr: 'Nova Ženska Priča', en: 'Nova Women Story' }, desc: { sr: 'Frizersko-kozmetički salon sa uslugama šišanja, tretmana i prodajom kozmetike.', en: 'Hair and beauty salon with styling, treatments and cosmetic sales.' }, link: 'https://www.novazenskaprica.rs' },
  { id: 4, title: { sr: 'Gothic OS', en: 'Gothic OS' }, desc: { sr: 'Mračni interfejs i konceptualni projekat sa gotičkom atmosferom.', en: 'Dark interface and conceptual project with a gothic atmosphere.' }, link: 'https://gothic-mu.vercel.app' },
  { id: 5, title: { sr: 'Arhitekta', en: 'Architect' }, desc: { sr: 'Portfolio arhitektonskih projekata i radova sa vizualizacijama.', en: 'Portfolio of architectural projects and works with visualizations.' }, link: 'https://arhitekta.vercel.app' },
  { id: 6, title: { sr: 'Dark Tales', en: 'Dark Tales' }, desc: { sr: 'Pripovetke i mračne priče s ilustracijama i simbolikom.', en: 'Stories and dark tales with illustrations and symbolism.' }, link: 'https://darktales.vercel.app' },
  { id: 7, title: { sr: 'FeelFit', en: 'FeelFit' }, desc: { sr: 'Fitnes studio i platforma za treninge, zdravlje i kondiciju u Beogradu.', en: 'Fitness studio and platform for training, health and fitness in Belgrade.' }, link: 'https://feelfit.rs/' },
  { id: 8, title: { sr: 'Koniterm', en: 'Koniterm' }, desc: { sr: 'Tehnička / IT usluga: održavanje, web rešenja i podrška.', en: 'Technical / IT service: maintenance, web solutions and support.' }, link: 'https://koniterm.vercel.app' },
  { id: 9, title: { sr: 'Witcher Iota', en: 'Witcher Iota' }, desc: { sr: 'Fan projekat sa lore, galerijom i koncept art radovima iz Witcher univerzuma.', en: 'Fan project with lore, gallery and concept art from the Witcher universe.' }, link: 'https://witcher-iota.vercel.app' },
  { id: 10, title: { sr: 'Portfolio Alpha', en: 'Portfolio Alpha' }, desc: { sr: 'Lični portfolio: web, ilustracija, dizajn i interaktivni radovi.', en: 'Personal portfolio: web, illustration, design and interactive works.' }, link: 'https://portfolio-alpha-hazel-67.vercel.app' },
];

export default function Projects() {
  const { lang } = useLang();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = e => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Helmet>
        <title>Codex Obscura – {lang === 'sr' ? 'Portfolio radovi' : 'Portfolio Works'}</title>
        <meta
          name="description"
          content={lang === 'sr' 
            ? "Pregled radova Codex Obscura: digitalni projekti, web sajtovi, portfolio i kreativni interaktivni sadržaji."
            : "Overview of Codex Obscura works: digital projects, websites, portfolio and creative interactive content."
          }
        />
      </Helmet>

      <section className="page projects">
        <h2 className="projects-title">
          {Array.from(lang === 'sr' ? 'RADOVI' : 'WORKS').map((letter, idx) => (
            <span key={idx} className="glow-letter">{letter}</span>
          ))}
        </h2>

        <div className="grid">
          {mockProjects.map(p => (
            <article key={p.id} className="card">
              <h3>{p.title[lang]}</h3>
              <p>{p.desc[lang]}</p>
              <a href={p.link} className="btn small" target="_blank" rel="noopener noreferrer">
                {lang === 'sr' ? 'Pogledaj rad' : 'View Work'}
              </a>
            </article>
          ))}
        </div>

        <div className="corner-arrows">
          {Array.from(lang === 'sr' ? 'PROJEKTI' : 'PROJECTS').map((letter, idx) => (
            <div
              key={idx}
              className="arrow-letter"
              style={{
                transform: `translate(
                  ${(mousePos.x / window.innerWidth - 0.5) * (idx + 1) * 10}px,
                  ${(mousePos.y / window.innerHeight - 0.5) * (idx + 1) * 10}px
                )`
              }}
            >
              <span className="arrow">↑</span>
              <span className="letter">{letter}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
