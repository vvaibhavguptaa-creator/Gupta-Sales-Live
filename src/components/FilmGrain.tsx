
"use client";

const FilmGrain = () => {
    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.05] mix-blend-overlay">
            <svg className="h-full w-full">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.6"
                        stitchTiles="stitch"
                        numOctaves="3"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
};

export default FilmGrain;
