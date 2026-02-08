
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const items = [
    {
        id: 1,
        title: 'Porcelain & Vitrified',
        category: 'SURFACES',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'Luxury Faucets',
        category: 'BATH FITTINGS',
        image: 'https://images.unsplash.com/photo-1584622781867-1c58c3eeb966?q=80&w=2000&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Smart Sanitaryware',
        category: 'WELLNESS',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'Designer Showers',
        category: 'EXPERIENCE',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop',
    }
];

const ProductCard = ({ item }: { item: typeof items[0] }) => {
    return (
        <motion.div
            className="group relative h-[60vh] min-w-[40vw] md:min-w-[30vw] overflow-hidden bg-neutral-900"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5 }}
        >
            <motion.img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            />

            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] mb-2 uppercase translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {item.category}
                </span>
                <h3 className="text-4xl font-serif text-white translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    {item.title}
                </h3>
            </div>

            <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-500 z-30 pointer-events-none" />
        </motion.div>
    );
};

const ProductShowcase = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);
    const smoothX = useSpring(x, { stiffness: 100, damping: 20 });

    return (
        <section ref={targetRef} className="relative h-[250vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* Section Title */}
                <div className="absolute top-12 left-6 md:left-12 z-20">
                    <div className="h-[1px] w-20 bg-white/20 mb-4" />
                    <h2 className="text-white text-3xl font-serif">Curated<br />Collections</h2>
                </div>

                <motion.div
                    style={{ x: smoothX }}
                    className="flex gap-12 pl-[10vw] pr-[10vw]"
                >
                    {items.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                    {/* Duplicate for length/visual balance if needed, or just let it scroll */}
                </motion.div>

                {/* Progress Bar */}
                <div className="absolute bottom-12 left-6 right-6 h-[1px] bg-white/10 z-20">
                    <motion.div
                        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                        className="h-full bg-yellow-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
