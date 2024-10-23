import { create } from 'zustand';
import { translations } from '../i18n';
import type { Translations } from '../types';

interface LanguageState {
  currentLanguage: string;
  translations: Translations;
  setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  currentLanguage: 'es-419',
  translations: translations['es-419'],
  setLanguage: (lang: string) => set({ 
    currentLanguage: lang,
    translations: translations[lang as keyof typeof translations]
  }),
}));