/**
 * Film Grain Noise Overlay
 * Adds textural depth to the dark background using a high-performance SVG pattern
 */
export const NoiseOverlay = () => {
  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none opacity-[0.015]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.6" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};
