
import { useState } from 'react';

const brands = [
    { id: 1, name: 'JAGUAR' },
    { id: 2, name: 'HINDWARE' },
    { id: 3, name: 'KAJARIA' },
    { id: 4, name: 'GESSI' },
    { id: 5, name: 'KOHLER' },
    { id: 6, name: 'GROHE' }
];

const BrandGalaxy = () => {
    const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);

    return (
        <section className="relative bg-zinc-900 overflow-hidden">
            {/* Smooth transition from previous black section */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-zinc-900 z-10 pointer-events-none" />

            <div className="container mx-auto px-6 py-20 relative z-20">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className={`
                                cursor-pointer transition-all duration-300 ease-in-out
                                font-sans font-medium text-sm md:text-base uppercase tracking-widest
                                ${hoveredBrand === null
                                    ? 'text-gray-500 opacity-70'
                                    : hoveredBrand === brand.id
                                        ? 'text-white opacity-100 scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]'
                                        : 'text-gray-600 opacity-20 blur-[1px]'
                                }
                            `}
                            onMouseEnter={() => setHoveredBrand(brand.id)}
                            onMouseLeave={() => setHoveredBrand(null)}
                        >
                            {brand.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom fade for smoothness connecting to next section (optional but looks good) */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none opacity-50" />
        </section>
    );
};

export default BrandGalaxy;
