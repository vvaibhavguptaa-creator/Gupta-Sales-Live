import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const products = [
    {
        id: 1,
        title: 'ARCHITECTURAL TILING',
        description: 'Large-format Italian slabs that redefine spatial luxury.',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'INTELLIGENT SANITARYWARE',
        description: 'Japanese engineering meets absolute comfort.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'BESPOKE KITCHENS',
        description: 'German precision hardware with seamless matte finishes.',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'ARTISAN FIXTURES',
        description: 'PVD Gold & Rose Gold faucets that act as jewelry for your home.',
        image: 'https://images.unsplash.com/photo-1584622781867-1c58c3eeb966?q=80&w=2000&auto=format&fit=crop'
    }
];

const ProductSection = ({ product, setSection, index }: { product: typeof products[0], setSection: (i: number) => void, index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setSection(index);
        }
    }, [isInView, setSection, index]);

    return (
        <div ref={ref} className="h-screen flex flex-col justify-center items-start px-6 md:px-20">
            <motion.div
                initial={{ opacity: 0.2 }}
                animate={{ opacity: isInView ? 1 : 0.2, x: isInView ? 0 : -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl"
            >
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 uppercase tracking-wider">
                    {product.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                    {product.description}
                </p>
            </motion.div>
        </div>
    );
};

const ProductShowcase = () => {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <section className="bg-black text-white relative">
            <div className="flex flex-col md:flex-row">
                {/* Left: Scrollable Text Sections */}
                <div className="w-full md:w-1/2 relative z-10">
                    {products.map((product, index) => (
                        <ProductSection
                            key={product.id}
                            product={product}
                            setSection={setActiveSection}
                            index={index}
                        />
                    ))}
                </div>

                {/* Right: Sticky Image Container */}
                <div className="hidden md:block w-1/2 h-screen sticky top-0 overflow-hidden">
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={products[activeSection].image}
                            src={products[activeSection].image}
                            alt={products[activeSection].title}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Overlay gradient for text readability if needed (though text is on left) */}
                        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                    </AnimatePresence>
                </div>

                {/* Mobile Image Fallback - Visible only on small screens, interleaved or active */}
                {/* For this specific design, sticky usually implies desktop. 
                    On mobile, we might want just the text or a specific background.
                    Let's adapt: Show the current image as a fixed background on mobile or just rely on text?
                    Standard pattern: Stack them. But prompt asked for Left Text scrolling. 
                    Let's keep the desktop robust. For mobile, the right column is hidden. 
                    We should probably show the image inline for mobile.
                */}
            </div>

            {/* Mobile View: Background Image updates behind text */}
            <div className="md:hidden fixed inset-0 z-0 pointer-events-none opacity-40">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={products[activeSection].image}
                        src={products[activeSection].image}
                        alt={products[activeSection].title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/70" />
            </div>
        </section>
    );
};

export default ProductShowcase;
