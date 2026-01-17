import React, { useState } from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';

export const DocentGuide = ({ data, color, lang }: { data: { title: string, content: string }, color: string, lang: Language }) => {
    const [isOpen, setIsOpen] = useState(false);
    const label = CONTENT[lang].ui.guideLabel;

    if (!data) return null;

    return (
        <div className="docent-container" style={{ borderColor: color }}>
            <button
                className="docent-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                style={{ color: color, borderColor: color }}
            >
                <span className="docent-icon" style={{
                    display: 'inline-flex',
                    width: '14px',
                    height: '14px',
                    border: '1.5px solid currentColor',
                    marginRight: '8px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px'
                }}>
                    {/* Simple geometric icon */}
                </span>
                <span className="docent-label">{label} {isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
                <div className="docent-content" style={{ borderColor: color }}>
                    <h4 className="docent-title">{data.title}</h4>
                    <div className="docent-body">
                        {data.content.split('\n').map((line, i) => (
                            <p key={i} className="docent-p">
                                {line.split('**').map((chunk, j) =>
                                    j % 2 === 1 ? <strong key={j}>{chunk}</strong> : chunk
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
