import React from 'react';

export const PALETTE = {
    black: "#1D1D1D",
    white: "#FFFFFF",
    lime: "#DFFF5E",
    blue: "#2F62FF",
    orange: "#FF5C28",
};

export const SECTION_METADATA = [
    {
        id: 1,
        theme: "black-orange",
        bg: PALETTE.black,
        text: PALETTE.white,
        accent: PALETTE.orange,
        subtitle: "FIRST, I'M RIGHT",
        Icon: () => (
            <svg viewBox= "0 0 100 100" className="geo-icon" >
            <defs>
            <pattern id="grid" width = "10" height="10" patternUnits="userSpaceOnUse" >
            <path d="M 10 0 L 0 0 0 10" fill = "none" stroke={ PALETTE.orange } strokeWidth="0.5" />
            </pattern>
            </defs>
            < rect width="100" height="100" fill="url(#grid)" opacity="0.5" />
            <line x1="0" y1 = "100" x2="100" y2="0" stroke={ PALETTE.orange } strokeWidth="2" />
            <circle cx="50" cy = "50" r="20" stroke={ PALETTE.orange } strokeWidth="2" fill="none" />
            </svg>
    ),
  },
{
    id: 2,
        theme: "lime-black",
            bg: PALETTE.lime,
                text: PALETTE.black,
                    accent: PALETTE.black,
                        subtitle: "YOU MAKE SENSE TOO",
                            Icon: () => (
                                <svg viewBox= "0 0 100 100" className = "geo-icon" >
                                    <circle cx="50" cy = "50" r = "40" stroke = { PALETTE.black } strokeWidth = "1.5" fill = "none" />
                                        <ellipse cx="50" cy = "50" rx = "40" ry = "10" stroke = { PALETTE.black } strokeWidth = "1.5" fill = "none" transform = "rotate(45 50 50)" />
                                            <ellipse cx="50" cy = "50" rx = "40" ry = "10" stroke = { PALETTE.black } strokeWidth = "1.5" fill = "none" transform = "rotate(-45 50 50)" />
                                                </svg>
    ),
},
{
    id: 3,
        theme: "blue-white",
            bg: PALETTE.blue,
                text: PALETTE.white,
                    accent: PALETTE.white,
                        subtitle: "WAITING FOR REPLY",
                            Icon: () => (
                                <svg viewBox= "0 0 100 100" className = "geo-icon" >
                                    <path d="M10 50 L90 50" stroke = { PALETTE.white } strokeWidth = "1.5" />
                                        <path d="M60 20 L90 50 L60 80" stroke = { PALETTE.white } strokeWidth = "1.5" fill = "none" />
                                            <circle cx="20" cy = "50" r = "5" fill = { PALETTE.white } />
                                                </svg>
    ),
},
{
    id: 4,
        theme: "white-black",
            bg: PALETTE.white,
                text: PALETTE.black,
                    accent: PALETTE.black,
                        subtitle: "THINKING ABOUT IT",
                            Icon: () => (
                                <svg viewBox= "0 0 100 100" className = "geo-icon" >
                                    <line x1="50" y1 = "0" x2 = "50" y2 = "100" stroke = { PALETTE.black } strokeWidth = "1" />
                                        <line x1="0" y1 = "50" x2 = "100" y2 = "50" stroke = { PALETTE.black } strokeWidth = "1" />
                                            <line x1="15" y1 = "15" x2 = "85" y2 = "85" stroke = { PALETTE.black } strokeWidth = "1" />
                                                <line x1="85" y1 = "15" x2 = "15" y2 = "85" stroke = { PALETTE.black } strokeWidth = "1" />
                                                    </svg>
    ),
},
{
    id: 5,
        theme: "black-lime",
            bg: PALETTE.black,
                text: PALETTE.lime,
                    accent: PALETTE.lime,
                        subtitle: "UNDERSTOOD A BIT",
                            Icon: () => (
                                <svg viewBox= "0 0 100 100" className = "geo-icon" >
                                    <rect x="10" y = "45" width = "80" height = "10" stroke = { PALETTE.lime } strokeWidth = "1" fill = "none" />
                                        <line x1="10" y1 = "40" x2 = "10" y2 = "60" stroke = { PALETTE.lime } strokeWidth = "1" />
                                            <line x1="90" y1 = "40" x2 = "90" y2 = "60" stroke = { PALETTE.lime } strokeWidth = "1" />
                                                <line x1="50" y1 = "30" x2 = "50" y2 = "70" stroke = { PALETTE.lime } strokeWidth = "2" />
                                                    </svg>
    ),
},
{
    id: 6,
        theme: "orange-black",
            bg: PALETTE.orange,
                text: PALETTE.black,
                    accent: PALETTE.black,
                        subtitle: "GOTTA TAKE A PIC",
                            Icon: () => (
                                <svg viewBox= "0 0 100 100" className = "geo-icon" >
                                    <rect x="20" y = "20" width = "60" height = "60" stroke = { PALETTE.black } strokeWidth = "2" fill = "none" />
                                        <line x1="15" y1 = "20" x2 = "25" y2 = "20" stroke = { PALETTE.black } strokeWidth = "2" />
                                            <line x1="15" y1 = "80" x2 = "25" y2 = "80" stroke = { PALETTE.black } strokeWidth = "2" />
                                                <line x1="75" y1 = "20" x2 = "85" y2 = "20" stroke = { PALETTE.black } strokeWidth = "2" />
                                                    <line x1="75" y1 = "80" x2 = "85" y2 = "80" stroke = { PALETTE.black } strokeWidth = "2" />
                                                        <circle cx="50" cy = "50" r = "10" fill = { PALETTE.black } />
                                                            </svg>
    ),
},
];
