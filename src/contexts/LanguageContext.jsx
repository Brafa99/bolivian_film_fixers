import { createContext, useEffect, useState } from "react";
import en from "../locales/en";
import es from "../locales/es";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("language");

    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const translations = language === "es" ? es : en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t: translations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}