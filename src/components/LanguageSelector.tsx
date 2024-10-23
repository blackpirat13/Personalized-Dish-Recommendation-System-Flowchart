import React from 'react';
import { languages } from '../i18n';
import { useLanguageStore } from '../store/languageStore';
import { Globe } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguageStore();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative group">
        <button className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
          <Globe className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">
            {languages.find(lang => lang.code === currentLanguage)?.flag}
          </span>
        </button>
        
        <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2
                ${currentLanguage === lang.code ? 'bg-gray-50' : ''}`}
            >
              <span>{lang.flag}</span>
              <span className="text-gray-700">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};