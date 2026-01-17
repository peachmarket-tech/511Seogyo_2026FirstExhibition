import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { PALETTE } from '../data/metadata';
import { LanguageSwitcher } from './LanguageSwitcher';

export const LandingPage = ({ onStart, lang, setLang }: { onStart: () => void, lang: Language, setLang: (l: Language) => void }) => {
    const t = CONTENT[lang].landing;
    return (
        <div className="landing-container">
            {/* Header Meta Data - Reference #2 Style */}
            <div className="corner-text top-left">
                MOBILE DOCENT<br />
                GUIDE APP
            </div>
            <div className="corner-text top-right">
                2026<br />
                FIRST EXHIBITION
            </div>

            <div style={{ position: 'absolute', top: 24, right: 24, zIndex: 1000, color: PALETTE.black }}>
                <LanguageSwitcher lang={lang} setLang={setLang} />
            </div>

            {/* Main Visual Area */}
            <div className="landing-main">
                {/* Rotating Starburst - Reference #4 Style (Thinner, sharper) */}
                <div className="graphic-layer">
                    <svg className="starburst" viewBox="0 0 200 200">
                        <defs>
                            <style>{`
                  .star-line { stroke: ${PALETTE.black}; stroke-width: 0.8; vector-effect: non-scaling-stroke; }
                `}</style>
                        </defs>
                        <g>
                            {/* Multiple thin lines for spark effect */}
                            <line x1="100" y1="0" x2="100" y2="200" className="star-line" />
                            <line x1="0" y1="100" x2="200" y2="100" className="star-line" />
                            <line x1="29" y1="29" x2="171" y2="171" className="star-line" />
                            <line x1="171" y1="29" x2="29" y2="171" className="star-line" />
                            <line x1="50" y1="13" x2="150" y2="187" className="star-line" opacity="0.5" />
                            <line x1="187" y1="50" x2="13" y2="150" className="star-line" opacity="0.5" />
                        </g>
                    </svg>
                </div>

                {/* Massive Typography - Left Aligned */}
                <div className="typography-layer">
                    {t.title.map((line, i) => (
                        <div key={i} className={`huge-text ${lang}`}>{line}</div>
                    ))}
                </div>

                {/* Accent Element (Sticker style) */}
                <div className="accent-sticker">
                    {t.project.map((line, i) => (
                        <span key={i}>{line}</span>
                    ))}
                </div>
            </div>

            {/* Footer Action - Reference #5 Style (Solid block) */}
            <div className="landing-footer">
                <button onClick={onStart} className="enter-btn">
                    <span>{t.enter}</span>
                    <span className="arrow">→</span>
                </button>
            </div>
        </div>
    );
};
