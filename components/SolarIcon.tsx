'use client';

import { useMemo } from 'react';

export default function SolarIcon({ size = 36 }: { size?: number }) {
  const delays = useMemo(
    () => [-(Math.random() * 8), -(Math.random() * 14)],
    [],
  );

  const scale = size / 36;

  return (
    <>
      <div
        style={{
          position: 'relative',
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'skewX(-15deg)',
          flexShrink: 0,
        }}
      >
        {/* Sun */}
        <div
          style={{
            position: 'absolute',
            width: 14 * scale,
            height: 14 * scale,
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(103,232,249,0.8) 50%, rgba(34,211,238,0.3) 100%)',
            boxShadow: `0 0 ${8 * scale}px rgba(103,232,249,0.8), 0 0 ${16 * scale}px rgba(103,232,249,0.4)`,
            zIndex: 2,
          }}
        />

        {/* Orbit 1 */}
        <div
          style={{
            position: 'absolute',
            width: 26 * scale,
            height: 26 * scale,
            borderRadius: '50%',
            border: '0.8px solid transparent',
            borderColor:
              'rgba(103,232,249,0.5) rgba(103,232,249,0.1) rgba(103,232,249,0.1) rgba(103,232,249,0.5)',
            animation: `nav-orbit-spin ${8}s linear infinite`,
            animationDelay: `${delays[0]}s`,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 4 * scale,
              height: 4 * scale,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #fff, #67E8F9)',
              boxShadow: '0 0 4px rgba(103,232,249,0.9)',
              marginTop: -2 * scale,
              marginLeft: -2 * scale,
              position: 'absolute',
              top: 0,
              left: '50%',
            }}
          />
        </div>

        {/* Orbit 2 */}
        <div
          style={{
            position: 'absolute',
            width: 36 * scale,
            height: 36 * scale,
            borderRadius: '50%',
            border: '0.8px solid transparent',
            borderColor:
              'rgba(148,163,184,0.35) rgba(148,163,184,0.06) rgba(148,163,184,0.06) rgba(148,163,184,0.35)',
            animation: `nav-orbit-spin ${14}s linear infinite`,
            animationDelay: `${delays[1]}s`,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 3.5 * scale,
              height: 3.5 * scale,
              borderRadius: '50%',
              background:
                'radial-gradient(circle at 35% 35%, #e2e8f0, #94A3B8)',
              boxShadow: '0 0 3px rgba(148,163,184,0.7)',
              position: 'absolute',
              top: 0,
              left: '50%',
              marginLeft: -1.75 * scale,
              marginTop: -1.75 * scale,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes nav-orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
