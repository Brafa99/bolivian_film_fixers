import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function useLanguage() {
  return useContext(LanguageContext);
}