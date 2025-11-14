import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useLang } from '../context/LanguageContext.jsx';

export default function Contact() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(
      'service_d5gdqop',       // emailjs service ID
      'template_02uc89z',      // template ID
      e.target,
      'JK_G0YSZNBz1dZnM2'     // public API key
    ).then(() => {
      setSent(true);
    }, (error) => {
      console.log(error);
      alert(lang === 'sr' 
        ? 'Došlo je do greške, pokušaj kasnije.' 
        : 'An error occurred, please try again later.'
      );
    });
  }

  return (
    <>
      <Helmet>
        <title>
          Codex Obscura – {lang === 'sr' ? 'Kontakt' : 'Contact'}
        </title>
        <meta
          name="description"
          content={lang === 'sr'
            ? 'Kontaktirajte Miloša Jokića (Codex Obscura) za pitanja, saradnju ili informacije o digitalnim projektima i interaktivnim radovima.'
            : 'Contact Miloš Jokić (Codex Obscura) for inquiries, collaboration, or information about digital projects and interactive works.'
          }
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Miloš Jokić",
            "url": "https://tvoj-domen.rs/contact",
            "email": "codexobscura97@gmail.com",
            "telephone": "+381612738686",
            "jobTitle": lang === 'sr' ? "Digitalni istraživač misterija" : "Digital Explorer of Mysteries",
            "sameAs": ["https://www.tiktok.com/@codexarcanum"]
          })}
        </script>
      </Helmet>

      <section className="page contact contact-section">
        <h2>{lang === 'sr' ? 'Kontakt' : 'Contact'}</h2>

        <div className="contact-info">
          <p>
            {lang === 'sr' ? 'Email' : 'Email'}: 
            <a href="mailto:codexobscura97@gmail.com">codexobscura97@gmail.com</a>
          </p>
          <p>
            {lang === 'sr' ? 'Telefon' : 'Phone'}: 
            <a href="tel:+381612738686">061 273 8686</a>
          </p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <input 
              name="name" 
              id="name"
              autoComplete="name"
              placeholder={lang === 'sr' ? 'Ime' : 'Name'} 
              required 
            />

            <input 
              name="email" 
              id="email"
              type="email" 
              autoComplete="email"
              placeholder={lang === 'sr' ? 'Email' : 'Email'} 
              required 
            />

            <textarea 
              name="message" 
              id="message"
              autoComplete="off" // poruke se obično ne autofill
              placeholder={lang === 'sr' ? 'Poruka' : 'Message'} 
              required 
            />

            <button className="btn" type="submit">
              {lang === 'sr' ? 'Pošalji' : 'Send'}
            </button>
          </form>
        ) : (
          <div className="sent-note">
            {lang === 'sr' 
              ? 'Hvala! Poruka je poslata.' 
              : 'Thank you! Your message has been sent.'
            }
          </div>
        )}
      </section>
    </>
  );
}
