import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const projects = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
        title: "Villa Serein",
        location: "Udaipur, Rajasthan",
        tag: "Italian Marble"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
        title: "The Onyx Bath",
        location: "South Delhi",
        tag: "Kohler"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
        title: "Skyline Penthouse",
        location: "Mumbai",
        tag: "Grohe"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
        title: "Zen Garden Spa",
        location: "Bangalore",
        tag: "Wellness"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800",
        title: "Minimalist Kitchen",
        location: "Hyderabad",
        tag: "Modular"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800",
        title: "Heritage Restoration",
        location: "Jaipur",
        tag: "Classic"
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
        title: "Azure Pool House",
        location: "Goa",
        tag: "Outdoor"
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1556911220-e6584462aa3c?auto=format&fit=crop&q=80&w=800",
        title: "Industrial Loft",
        location: "Pune",
        tag: "Raw Brass"
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
        title: "The Glass House",
        location: "Chandigarh",
        tag: "Modern"
    }
];

const GalleryCard = ({ item }: { item: typeof projects[0] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Internal Parallax for Image
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    // The image moves slightly counter to scroll to create "window" effect
    const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1.1, 1.1]); // Keep scale > 1 to avoid edges

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const width = rect.width;
            const height = rect.height;
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const xPct = mouseX / width - 0.5;
            const yPct = mouseY / height - 0.5;
            x.set(xPct * 20); // Tilt amount
            y.set(yPct * 20);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="group relative w-full mb-8 rounded-3xl overflow-hidden cursor-pointer aspect-[3/4] md:aspect-auto"
        >
            {/* Hover Scale & Bloom Wrapper */}
            <motion.div
                className="relative w-full h-full overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ scale: 0.98 }}
            >
                {/* PARALLAX IMAGE */}
                <motion.img
                    style={{ y: yImage, scale: 1.15 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />

                {/* Glassmorphism Caption Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg">
                        <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                        <p className="text-white/70 text-sm">{item.location}</p>
                    </div>
                </div>

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            </motion.div>

            {/* Floating 3D Badge */}
            <motion.div
                style={{ x, y, rotateX: y, rotateY: x }}
                className="absolute top-4 right-4 z-30"
            >
                <span className="bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-[#1D1D1F] shadow-sm">
                    {item.tag}
                </span>
            </motion.div>
        </motion.div>
    );
};


const LivingGallery = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax Columns
    // Column 1 & 3: Standard Speed
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // Column 2: Slower / Offset (The "Depth" Column)
    // Starts lower (translate-y-20) and moves slower to create lag
    const y2 = useTransform(scrollYProgress, [0, 1], [100, -50]);


    return (
        <section ref={containerRef} className="relative z-20 bg-white py-32 px-4 rounded-t-[50px] -mt-20 overflow-hidden">

            {/* Header */}
            <div className="container mx-auto mb-20 text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[#1D1D1F]/40 font-bold tracking-[0.2em] uppercase text-sm block mb-4"
                >
                    The Living Gallery
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-semibold text-[#1D1D1F] tracking-tight"
                >
                    Curated Spaces.
                </motion.h2>
            </div>

            <div className="container mx-auto">
                {/* 3-Column Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Column 1 */}
                    <motion.div style={{ y: y1 }} className="flex flex-col">
                        {projects.slice(0, 3).map(item => (
                            <GalleryCard key={item.id} item={item} />
                        ))}
                    </motion.div>

                    {/* Column 2 (Offset) */}
                    <motion.div style={{ y: y2 }} className="flex flex-col pt-0 md:pt-32">
                        {projects.slice(3, 6).map(item => (
                            <GalleryCard key={item.id} item={item} />
                        ))}
                    </motion.div>

                    {/* Column 3 */}
                    <motion.div style={{ y: y3 }} className="flex flex-col">
                        {projects.slice(6, 9).map(item => (
                            <GalleryCard key={item.id} item={item} />
                        ))}
                    </motion.div>

                </div>
            </div>

            {/* Bottom Fade to blend into next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

        </section>
    );
};

export default LivingGallery;
