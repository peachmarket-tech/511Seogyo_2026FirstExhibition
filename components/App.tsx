import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { SECTION_METADATA } from '../data/metadata';
import { LandingPage } from './LandingPage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { DocentGuide } from './DocentGuide';
import { Section1Content } from './Section1Content';
import { CameraOverlay } from './CameraOverlay';

export const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showLanding, setShowLanding] = useState(true);
    const [showCamera, setShowCamera] = useState(false);
    const [lang, setLang] = useState<Language>('ko');

    // QR Logic: Parse URL param on mount
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const secParam = params.get("sec");
        if (secParam) {
            const secIndex = parseInt(secParam, 10) - 1;
            if (secIndex >= 0 && secIndex < SECTION_METADATA.length) {
                setCurrentIndex(secIndex);
                setShowLanding(false);
            }
        }
    }, []);

    const handleStart = () => {
        setShowLanding(false);
    };

    const handleNext = () => {
        if (currentIndex < SECTION_METADATA.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    // Get current content based on language
    const currentContent = CONTENT[lang].sections[currentIndex];
    // Merge metadata with localized content
    const currentSectionMeta = SECTION_METADATA[currentIndex];
    const combinedSection = { ...currentSectionMeta, ...currentContent };

    const ui = CONTENT[lang].ui;
    const progress = `${String(currentIndex + 1).padStart(2, "0")} / 06`;

    return (
        <div className="app-container">
            {/* Camera Overlay */}
            {showCamera && <CameraOverlay onClose={() => setShowCamera(false)} />}

            {/* Landing Page Layer */}
            <div className={`landing-container ${!showLanding ? 'hidden' : ''}`}>
                <LandingPage onStart={handleStart} lang={lang} setLang={setLang} />
            </div>

            {/* Persistent Language Switcher for Main App (only when landing is hidden) */}
            {!showLanding && (
                <div style={{ position: 'absolute', top: 24, right: 24, zIndex: 1001, color: combinedSection.text }}>
                    <LanguageSwitcher lang={lang} setLang={setLang} />
                </div>
            )}

            {/* Main App Slider */}
            <div
                className="slider-wrapper"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {SECTION_METADATA.map((meta, index) => {
                    // Dynamic data merge for loop
                    const sectionData = CONTENT[lang].sections[index];
                    const section = { ...meta, ...sectionData };

                    return (
                        <div
                            key={section.id}
                            className="slide"
                            style={{
                                backgroundColor: section.bg,
                                color: section.text,
                            }}
                        >
                            {/* Top Indicator */}
                            <div className="top-bar" style={{ color: section.text }}>
                                {progress}
                            </div>

                            {/* Content */}
                            <div className="content-area">
                                <div className="visual-container">
                                    <section.Icon />
                                </div>

                                <h1 className="title">
                                    {section.title.split(" ").map((word: string, i: number) => (
                                        <span key={i} style={{ display: "block" }}>{word}</span>
                                    ))}
                                </h1>

                                <div className="subtitle" style={{ color: section.accent, borderColor: section.accent }}>
                                    {section.subtitle}
                                </div>

                                <p className="description">{section.desc}</p>

                                {/* Docent Guide (New) */}
                                {section.docent && (
                                    <DocentGuide data={section.docent} color={section.text} lang={lang} />
                                )}

                                {/* Section 1 Specific Story Logic */}
                                {section.id === 1 && <Section1Content section={section} lang={lang} />}

                                {/* Section 2 Specific Logic */}
                                {section.id === 2 && (
                                    <div className="story-list-container">
                                        <div className="scroll-hint" style={{ color: section.accent, borderColor: section.accent }}>{ui.scrollHint}</div>

                                        {/* Step 1: Card Exchange */}
                                        <div className="guide-card" style={{ borderColor: section.text }}>
                                            <div className="guide-title" style={{ borderColor: section.text }}>{section.guide.step1Title}</div>
                                            <p className="guide-desc">
                                                {section.guide.step1Desc.split('\n').map((line: string, i: number) => (
                                                    <React.Fragment key={i}>
                                                        {line.split('**').map((chunk: string, j: number) =>
                                                            j % 2 === 1 ? <strong key={j}>{chunk}</strong> : chunk
                                                        )}<br />
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                            <div className="guide-visual-placeholder" style={{ borderColor: section.text }}>
                                                <div className="card-icon" style={{ borderColor: section.text, backgroundColor: section.text }}></div>
                                                <div className="arrow-icon">⇄</div>
                                                <div className="card-icon" style={{ borderColor: section.text }}></div>
                                            </div>
                                        </div>

                                        {/* Step 2: Art Viewing */}
                                        <div className="guide-card" style={{ borderColor: section.text }}>
                                            <div className="guide-title" style={{ borderColor: section.text }}>{section.guide.step2Title}</div>
                                            <p className="guide-desc">
                                                {section.guide.step2Desc.split('\n').map((line: string, i: number) => (
                                                    <React.Fragment key={i}>{line}<br /></React.Fragment>
                                                ))}
                                            </p>

                                            <ul className="viewing-points">
                                                {section.guide.points.map((pt: string, i: number) => (
                                                    <li key={i} className="point-item">
                                                        <span className="point-num" style={{ background: section.text, color: section.bg }}>0{i + 1}</span>
                                                        <span className="point-text">
                                                            {pt.split('**').map((chunk, j) =>
                                                                j % 2 === 1 ? <strong key={j}>{chunk}</strong> : chunk
                                                            )}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Next Action Trigger */}
                                        <div className="next-step-guide" style={{ borderColor: section.text }}>
                                            <p>
                                                {ui.section2GuideNext.split('\n').map((line: string, i: number) => (
                                                    <React.Fragment key={i}>{line}<br /></React.Fragment>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Section 4 Specific Logic (Garden of Thought) */}
                                {section.id === 4 && (
                                    <div className="garden-container">
                                        <div className="scroll-hint" style={{ color: section.text, borderColor: section.text, marginBottom: 30 }}>{ui.section4Walk}</div>

                                        {/* Intro */}
                                        <p style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '40px', wordBreak: 'keep-all' }}>
                                            {ui.section4Intro}
                                        </p>

                                        {section.perspectives.map((p: any, i: number) => (
                                            <div key={i} className="balance-card">
                                                <div className="balance-header">
                                                    <span className="balance-title">{p.title}</span>
                                                    <div className="balance-icon" style={{
                                                        borderRadius: i === 1 ? '50%' : '0',
                                                        transform: i === 2 ? 'rotate(45deg)' : 'none'
                                                    }}></div>
                                                </div>
                                                <div className="balance-context" style={{ fontWeight: 500 }}>
                                                    {p.desc}
                                                </div>
                                            </div>
                                        ))}

                                        {/* Reflection */}
                                        <div className="reflection-prompt">
                                            <div className="reflection-q">
                                                {ui.section4Q}
                                            </div>
                                            <div className="reflection-sub">
                                                {ui.section4Sub.split('\n').map((line: string, i: number) => (
                                                    <React.Fragment key={i}>{line}<br /></React.Fragment>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>

                            {/* Action Button (Hidden for Section 1, 2, 4) */}
                            {section.action && (
                                <div className="action-area">
                                    <button
                                        className="action-btn"
                                        onClick={() => {
                                            if (section.id === 6) {
                                                setShowCamera(true);
                                            } else {
                                                // Handle other actions if needed
                                                if (section.action.includes('메일')) {
                                                    // Open Ripples World site
                                                    window.open('https://ripples.world/', '_blank');
                                                }
                                            }
                                        }}
                                        style={{
                                            color: section.text,
                                            borderColor: section.text
                                        }}
                                    >
                                        {section.action}
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Navigation */}
            <div className="nav-controls">
                <button
                    className="nav-btn"
                    onClick={handlePrev}
                    disabled={currentIndex === 0 || showLanding}
                    style={{ color: combinedSection.text }}
                >
                    {ui.prev}
                </button>

                <button
                    className="nav-btn"
                    onClick={handleNext}
                    disabled={currentIndex === SECTION_METADATA.length - 1 || showLanding}
                    style={{ color: combinedSection.text }}
                >
                    {ui.next}
                </button>
            </div>
        </div>
    );
};
