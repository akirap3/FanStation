import React from 'react';
import type { CosmicBackgroundProps } from '../types';

interface PlanetConfig {
  id: string;
  size: number;
  top: string;
  left?: string;
  right?: string;
  hasRings: boolean;
  ringAngle: number;
  hasSatellite?: boolean;
  gradientType: 'earth' | 'saturn' | 'uranus';
  floatAnim: 'saturn' | 'mars';
  spinSpeed: number;
}

const planets: PlanetConfig[] = [
  {
    id: 'uranus-hero-1',
    size: 420,
    top: '4%',
    right: '-8%',
    hasRings: false,
    ringAngle: -15,
    hasSatellite: true,
    gradientType: 'uranus',
    floatAnim: 'saturn',
    spinSpeed: 180
  },
  {
    id: 'saturn-hero-2',
    size: 360,
    top: '18%',
    left: '-7%',
    hasRings: true,
    ringAngle: 25,
    gradientType: 'saturn',
    floatAnim: 'mars',
    spinSpeed: 150
  },
  {
    id: 'earth-skills-1',
    size: 440,
    top: '29%',
    right: '-10%',
    hasRings: false,
    ringAngle: -10,
    hasSatellite: true,
    gradientType: 'earth',
    floatAnim: 'saturn',
    spinSpeed: 200
  },
  {
    id: 'uranus-skills-2',
    size: 480,
    top: '42%',
    left: '-12%',
    hasRings: false,
    ringAngle: 15,
    gradientType: 'uranus',
    floatAnim: 'mars',
    spinSpeed: 220
  },
  {
    id: 'uranus-projects-1',
    size: 350,
    top: '55%',
    right: '-7%',
    hasRings: false,
    ringAngle: -20,
    gradientType: 'uranus',
    floatAnim: 'saturn',
    spinSpeed: 170
  },
  {
    id: 'saturn-projects-2',
    size: 460,
    top: '67%',
    left: '-9%',
    hasRings: true,
    ringAngle: 30,
    hasSatellite: true,
    gradientType: 'saturn',
    floatAnim: 'mars',
    spinSpeed: 140
  },
  {
    id: 'earth-projects-3',
    size: 380,
    top: '76%',
    right: '-8%',
    hasRings: false,
    ringAngle: -25,
    gradientType: 'earth',
    floatAnim: 'saturn',
    spinSpeed: 210
  },
  {
    id: 'earth-footer-1',
    size: 450,
    top: '85%',
    left: '-8%',
    hasRings: false,
    ringAngle: -15,
    hasSatellite: true,
    gradientType: 'earth',
    floatAnim: 'mars',
    spinSpeed: 240
  },
  {
    id: 'saturn-footer-2',
    size: 400,
    top: '93%',
    right: '-8%',
    hasRings: true,
    ringAngle: -18,
    hasSatellite: true,
    gradientType: 'saturn',
    floatAnim: 'saturn',
    spinSpeed: 160
  }
];

export default function CosmicBackground({ theme }: CosmicBackgroundProps) {
  const themeColors = {
    dark: {
      bodyStart: '#1E1B4B',
      bodyEnd: '#0F172A',
      accentViolet: '#9D4EDD',
      accentCyan: '#00F5D4',
      strokeColor: '#9D4EDD',
      ringStroke: '#00F5D4',
      cloudsColor: 'rgba(0, 245, 212, 0.4)',
    },
    light: {
      bodyStart: '#DBEAFE',
      bodyEnd: '#C7D2FE',
      accentViolet: '#7C3AED',
      accentCyan: '#0D9488',
      strokeColor: '#7C3AED',
      ringStroke: '#0D9488',
      cloudsColor: 'rgba(13, 148, 136, 0.4)',
    }
  }[theme];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none animate-fade-in">
      {planets.map((planet) => {
        const ringGradId = `ring-grad-${planet.id}`;
        const bodyGradId = `body-grad-${planet.id}`;
        const bodySeaGradId = `body-sea-grad-${planet.id}`;
        
        const positionStyle: React.CSSProperties = {
          width: `${planet.size}px`,
          height: `${planet.size}px`,
          top: planet.top,
          ...(planet.left ? { left: planet.left } : {}),
          ...(planet.right ? { right: planet.right } : {}),
        };

        return (
          <div
            key={planet.id}
            className={`absolute pointer-events-none select-none opacity-[0.16] dark:opacity-[0.11] transition-opacity duration-700 ${
              planet.floatAnim === 'saturn' ? 'animate-float-saturn' : 'animate-float-mars'
            }`}
            style={positionStyle}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              style={{
                transform: `rotate(${planet.ringAngle}deg)`,
                animation: `spin-slow ${planet.spinSpeed}s linear infinite`
              }}
            >
              <defs>
                {/* Sea/Body Gradient for Earth & Gas Planets */}
                <linearGradient id={bodySeaGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={themeColors.bodyStart} />
                  <stop offset="100%" stopColor={themeColors.bodyEnd} />
                </linearGradient>

                {/* General Planet Body Gradient */}
                <linearGradient id={bodyGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={themeColors.bodyStart} />
                  <stop offset="100%" stopColor={themeColors.bodyEnd} />
                </linearGradient>
                
                {/* Rings Gradient */}
                <linearGradient id={ringGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={themeColors.ringStroke} stopOpacity="0.85" />
                  <stop offset="50%" stopColor={themeColors.bodyStart} stopOpacity="0.15" />
                  <stop offset="100%" stopColor={themeColors.ringStroke} stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* --- EARTH TEMPLATE --- */}
              {planet.gradientType === 'earth' && (
                <>
                  <circle cx="100" cy="100" r="48" fill={`url(#${bodySeaGradId})`} stroke={themeColors.strokeColor} strokeWidth="2.5" />
                  <path d="M 68,60 C 80,50 110,50 120,65 C 125,75 110,85 105,95 C 100,105 85,110 75,90 C 70,80 60,70 68,60 Z" fill={themeColors.accentViolet} stroke={themeColors.strokeColor} strokeWidth="1.5" />
                  <path d="M 85,110 C 95,100 115,105 125,120 C 130,130 115,140 100,138 C 90,135 80,120 85,110 Z" fill={themeColors.accentViolet} stroke={themeColors.strokeColor} strokeWidth="1.5" />
                  <path d="M 125,78 C 135,70 145,75 140,85 C 135,90 125,85 125,78 Z" fill={themeColors.accentViolet} stroke={themeColors.strokeColor} strokeWidth="1.5" />
                  <path d="M 52,90 C 60,85 62,98 56,105 C 50,110 48,95 52,90 Z" fill={themeColors.accentViolet} stroke={themeColors.strokeColor} strokeWidth="1.5" />
                  <path d="M 60,82 Q 100,75 140,82" fill="none" stroke={themeColors.cloudsColor} strokeWidth="3" strokeLinecap="round" />
                  <path d="M 54,115 Q 100,108 146,115" fill="none" stroke={themeColors.cloudsColor} strokeWidth="2.5" strokeLinecap="round" />
                </>
              )}

              {/* --- SATURN TEMPLATE --- */}
              {planet.gradientType === 'saturn' && (
                <>
                  <path d="M 10,100 A 90,22 0 0,1 190,100" fill="none" stroke={`url(#${ringGradId})`} strokeWidth="9" strokeLinecap="round" opacity="0.35" />
                  <circle cx="100" cy="100" r="48" fill={`url(#${bodyGradId})`} stroke={themeColors.strokeColor} strokeWidth="2.5" />
                  <path d="M 58,85 Q 100,91 142,85" fill="none" stroke={themeColors.accentViolet} strokeWidth="3" strokeLinecap="round" />
                  <path d="M 53,100 Q 100,106 147,100" fill="none" stroke={themeColors.accentViolet} strokeWidth="4" strokeLinecap="round" />
                  <path d="M 58,115 Q 100,121 142,115" fill="none" stroke={themeColors.accentViolet} strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 190,100 A 90,22 0 0,1 10,100" fill="none" stroke={`url(#${ringGradId})`} strokeWidth="9" strokeLinecap="round" />
                </>
              )}

              {/* --- URANUS TEMPLATE --- */}
              {planet.gradientType === 'uranus' && (
                <>
                  <circle cx="100" cy="100" r="48" fill={`url(#${bodyGradId})`} stroke={themeColors.strokeColor} strokeWidth="2.5" />
                  <path d="M 54,75 Q 100,82 146,75" fill="none" stroke={themeColors.accentViolet} strokeWidth="3" strokeLinecap="round" />
                  <path d="M 52,100 Q 100,107 148,100" fill="none" stroke={themeColors.accentViolet} strokeWidth="4" strokeLinecap="round" />
                  <path d="M 54,125 Q 100,132 146,125" fill="none" stroke={themeColors.accentViolet} strokeWidth="2.5" strokeLinecap="round" />
                </>
              )}

              {/* Unified Orbit & Satellite Overlay */}
              {planet.hasSatellite && (
                <>
                  <circle cx="100" cy="100" r="76" fill="none" stroke={themeColors.accentCyan} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
                  <circle cx="24" cy="100" r="4.5" fill={themeColors.accentCyan} />
                  <line x1="24" y1="100" x2="52" y2="100" stroke={themeColors.accentCyan} strokeWidth="0.8" opacity="0.5" />
                </>
              )}
            </svg>
          </div>
        );
      })}
    </div>
  );
}
