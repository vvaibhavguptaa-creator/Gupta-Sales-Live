
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const items = [
    {
        id: 1,
        title: 'Porcelain & Vitrified',
        category: 'SURFACES',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
        video: 'https://videos.pexels.com/video-files/3773487/3773487-uhd_2560_1440_25fps.mp4', // Marble texture
        colSpan: 'md:col-span-2'
    },
    {
        id: 2,
        title: 'Luxury Faucets',
        category: 'BATH FITTINGS',
        image: 'https://images.unsplash.com/photo-1584622781867-1c58c3eeb966?q=80&w=2000&auto=format&fit=crop',
        video: 'https://videos.pexels.com/video-files/7578544/7578544-uhd_2560_1440_30fps.mp4', // Water flowing
        colSpan: 'md:col-span-1'
    },
    {
        id: 3,
        title: 'Smart Sanitaryware',
        category: 'WELLNESS',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop',
        video: 'https://videos.pexels.com/video-files/6774643/6774643-uhd_2560_1440_25fps.mp4', // Modern bathroom
        colSpan: 'md:col-span-1'
    },
    {
        id: 4,
        title: 'Designer Showers',
        category: 'EXPERIENCE',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop',
        video: 'https://videos.pexels.com/video-files/6636253/6636253-uhd_2560_1440_25fps.mp4', // Shower water
        colSpan: 'md:col-span-2'
    }
];

const ProductCard = ({ item, index }: { item: typeof items[0], index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative h-[450px] overflow-hidden rounded-sm bg-zinc-900 border border-white/10 ${item.colSpan}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Background Image (Default) */}
            <motion.img
                src={item.image}
                alt={item.title}
                animate={{
                    opacity: isHovered ? 0 : 0.7,
                    scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
            />

            {/* Background Video (Hover) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.6 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
            >
                <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={item.video} type="video/mp4" />
                </video>
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 w-full z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-yellow-500 text-[10px] font-bold tracking-[0.25em] mb-3 uppercase">
                    {item.category}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif text-white group-hover:text-yellow-500 transition-colors duration-300">
                    {item.title}
                </h3>

                {/* Explore Link (Appears on Hover) */}
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 mt-4">
                    <span className="text-white/70 text-xs tracking-widest uppercase border-b border-white/30 pb-0.5">Explore Collection</span>
                </div>
            </div>

            {/* Border Glow on Hover */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none rounded-sm" />
        </motion.div>
    );
};

const ProductShowcase = () => {
    return (
        <section className="bg-black py-12 px-6 mt-0">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {items.map((item, index) => (
                        <ProductCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
