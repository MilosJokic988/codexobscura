import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "sr");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === "sr" ? "en" : "sr"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return context;
}
