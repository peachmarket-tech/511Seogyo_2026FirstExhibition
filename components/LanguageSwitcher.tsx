import React from 'react';
import { Language } from '../types';

export const LanguageSwitcher = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
    return (
        <div className="lang-switcher">
            <button
                className={`lang-btn ${lang === 'ko' ? 'active' : ''}`}
                onClick={() => setLang('ko')}
            >
                KO
            </button>
            <span className="divider">/</span>
            <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
            >
                EN
            </button>
        </div>
    );
};
