import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Language {
    code: string;
    name: string;
    flag: string;
}

interface LanguageContextType {
    currentLanguage: Language;
    availableLanguages: Language[];
    switchLanguage: (languageCode: string) => void;
}

const languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState<Language>(
        languages.find(lang => lang.code === i18n.language) || languages[0]
    );

    useEffect(() => {
        const handleLanguageChange = (lng: string) => {
            const language = languages.find(lang => lang.code === lng) || languages[0];
            setCurrentLanguage(language);
        };

        // Add safety check
        if (i18n && typeof i18n.on === 'function') {
            i18n.on('languageChanged', handleLanguageChange);
        }

        return () => {
            if (i18n && typeof i18n.off === 'function') {
                i18n.off('languageChanged', handleLanguageChange);
            }
        };
    }, [i18n]);

    const switchLanguage = (languageCode: string) => {
        i18n.changeLanguage(languageCode);
    };

    return (
        <LanguageContext.Provider
            value={{
                currentLanguage,
                availableLanguages: languages,
                switchLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
