import React, { useState } from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';

export const Section1Content = ({ section, lang }: { section: any, lang: Language }) => {
    const [showExtras, setShowExtras] = useState(false);
    const stories = CONTENT[lang].stories;
    const ui = CONTENT[lang].ui;
    const mainStory = stories[0];
    const extraStories = stories.slice(1);

    return (
        <div className="story-list-container">
            <div className="scroll-hint" style={{ color: section.accent, borderColor: section.accent }}>{ui.scrollHint}</div>

            {/* Main Story Header */}
            <div className="section-label" style={{ color: section.accent }}>{ui.mainEpisode}</div>

            <div className="story-card">
                <div className="story-header">
                    <span className="story-num">01</span>
                    <span className="story-title">{mainStory.title}</span>
                </div>
                <div className="story-dialogue">
                    {mainStory.dialogue.map((line: any, i: number) => (
                        <div key={i} className="dialogue-line">
                            <span className="speaker-icon">{line.speaker}</span>
                            <span className="dialogue-text">{line.text}</span>
                        </div>
                    ))}
                </div>
                <div className="story-options">
                    {mainStory.options.map((opt: string, i: number) => (
                        <div key={i} className="option-text-row">
                            <span className="opt-label">{String.fromCharCode(65 + i)}.</span>
                            <span className="opt-text">{opt}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Extra Stories Toggle */}
            <div className="extra-stories-toggle">
                <button
                    className="toggle-btn"
                    onClick={() => setShowExtras(!showExtras)}
                    style={{ color: section.text, borderColor: section.accent }}
                >
                    {showExtras ? ui.toggleExtrasOpen : ui.toggleExtrasClose}
                </button>
            </div>

            {/* Extra Stories List */}
            {showExtras && (
                <div className="extra-stories-list">
                    {extraStories.map((story, idx) => (
                        <div key={story.id} className="story-card extra">
                            <div className="story-header">
                                <span className="story-num">0{idx + 2}</span>
                                <span className="story-title">{story.title}</span>
                            </div>
                            <div className="story-dialogue">
                                {story.dialogue.map((line: any, i: number) => (
                                    <div key={i} className="dialogue-line">
                                        <span className="speaker-icon">{line.speaker}</span>
                                        <span className="dialogue-text">{line.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="story-options">
                                {story.options.map((opt: string, i: number) => (
                                    <div key={i} className="option-text-row">
                                        <span className="opt-label">{String.fromCharCode(65 + i)}.</span>
                                        <span className="opt-text">{opt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Bottom Instruction Block */}
            <div className="physical-action-guide">
                <div className="guide-icon">↓</div>
                <p>
                    {ui.section1Guide.split('\n').map((line: string, i: number) => (
                        <React.Fragment key={i}>{line}<br /></React.Fragment>
                    ))}
                </p>
            </div>
        </div>
    );
};
