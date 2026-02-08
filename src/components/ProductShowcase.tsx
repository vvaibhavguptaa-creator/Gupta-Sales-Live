
import { motion } from 'framer-motion';

const items = [
    {
        id: 1,
        title: 'Porcelain & Vitrified',
        category: 'SURFACES',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
        colSpan: 'md:col-span-2'
    },
    {
        id: 2,
        title: 'Luxury Faucets',
        category: 'BATH FITTINGS',
        image: 'https://images.unsplash.com/photo-1584622781867-1c58c3eeb966?q=80&w=2000&auto=format&fit=crop',
        colSpan: 'md:col-span-1'
    },
    {
        id: 3,
        title: 'Smart Sanitaryware',
        category: 'WELLNESS',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop',
        colSpan: 'md:col-span-1'
    },
    {
        id: 4,
        title: 'Designer Showers',
        category: 'EXPERIENCE',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop',
        colSpan: 'md:col-span-2'
    }
];

const ProductShowcase = () => {
    return (
        <section className="bg-black py-16 px-6 mt-0">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative h-[400px] overflow-hidden rounded-xl bg-zinc-900 border border-white/10 ${item.colSpan}`}
                        >
                            {/* Background Image with Zoom Effect */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <p className="text-yellow-500 text-xs font-bold tracking-[0.2em] mb-2 uppercase">
                                    {item.category}
                                </p>
                                <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-yellow-500 transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
