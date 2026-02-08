
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const categories = [
    {
        id: 1,
        title: "The Stone Edit",
        subtitle: "Italian Marble & Granite",
        bg: "bg-stone-50",
        height: "h-[60vh]",
        img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Smart Wellness",
        subtitle: "Intelligent Toilets & Bidets",
        bg: "bg-blue-50",
        height: "h-[50vh]",
        img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Brassware",
        subtitle: "Gold & Rose Gold Faucets",
        bg: "bg-rose-50",
        height: "h-[50vh]",
        img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Surfaces",
        subtitle: "Large Format Tiles",
        bg: "bg-purple-50",
        height: "h-[60vh]",
        img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800"
    }
];

const Card = ({ item, index }: { item: typeof categories[0], index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const width = rect.width;
            const height = rect.height;
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const xPct = (mouseX / width) - 0.5;
            const yPct = (mouseY / height) - 0.5;
            x.set(xPct);
            y.set(yPct);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`relative w-full ${item.height} ${item.bg} rounded-[32px] overflow-hidden group cursor-pointer perspective-[1000px] hover:shadow-2xl hover:shadow-black/5 transition-shadow duration-500`}
        >
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-20 pointer-events-none transform-style-3d">
                <div>
                    <h3 className="text-[#1D1D1F] text-3xl md:text-4xl font-semibold tracking-tight mb-2 translate-z-20">
                        {item.title}
                    </h3>
                    <p className="text-[#1D1D1F]/60 font-medium tracking-wide translate-z-10">
                        {item.subtitle}
                    </p>
                </div>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 text-[#1D1D1F]">
                    <span className="font-medium">View Collection</span>
                    <HiArrowRight />
                </div>
            </div>

            {/* Floating Image */}
            <motion.div
                className="absolute right-0 bottom-0 w-[80%] h-[80%] z-10"
                style={{ translateX: "10%", translateY: "10%", translateZ: "50px" }}
            >
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
            </motion.div>
        </motion.div>
    );
};

const ProductCategories = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yColumn1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
    const yColumn2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

    return (
        <section ref={containerRef} className="bg-white py-32 px-4 md:px-12 relative z-20 rounded-t-[40px] -mt-10 overflow-hidden">

            {/* Header */}
            <div className="container mx-auto mb-20 md:mb-32 flex flex-col md:flex-row items-end justify-between gap-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#1D1D1F] text-5xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
                >
                    Curated <br /> <span className="text-[#1D1D1F]/40">Collections.</span>
                </motion.h2>
                <p className="max-w-md text-[#1D1D1F]/60 text-lg leading-relaxed">
                    Explore our handpicked selection of world-class surfaces and bathware, designed for modern living.
                </p>
            </div>

            {/* Masonry Grid */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                {/* Column 1 - Parallax Up */}
                <motion.div style={{ y: yColumn1 }} className="flex flex-col gap-8 md:gap-12">
                    {categories.filter((_, i) => i % 2 === 0).map((item, index) => (
                        <Card key={item.id} item={item} index={index} />
                    ))}
                </motion.div>

                {/* Column 2 - Parallax Down */}
                <motion.div style={{ y: yColumn2 }} className="flex flex-col gap-8 md:gap-12 pt-0 md:pt-32">
                    {categories.filter((_, i) => i % 2 !== 0).map((item, index) => (
                        <Card key={item.id} item={item} index={index} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default ProductCategories;
