import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle: React.FC = () => {
    const { currentLanguage, switchLanguage } = useLanguage();

    const toggleLanguage = () => {
        const newLanguage = currentLanguage.code === 'en' ? 'pt-BR' : 'en';
        switchLanguage(newLanguage);
    };

    const isEnglish = currentLanguage.code === 'en';

    return (
        <div className="language-toggle">
            <span className={`language-toggle__flag ${!isEnglish ? 'active' : ''}`}>
                🇧🇷
            </span>
            <button
                className="language-toggle__button"
                onClick={toggleLanguage}
                aria-label="Toggle language"
            >
                <div className={`language-toggle__slider ${isEnglish ? 'english' : 'portuguese'}`} />
            </button>
            <span className={`language-toggle__flag ${isEnglish ? 'active' : ''}`}>
                🇺🇸
            </span>
        </div>
    );
};

export default LanguageToggle;
