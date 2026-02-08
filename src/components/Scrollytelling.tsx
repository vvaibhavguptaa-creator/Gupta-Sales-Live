import { motion } from 'framer-motion';

const panels = [
    {
        id: 1,
        title: "Precision.",
        description: "Every curve is calculated. Every angle is intentional. Designed for those who demand exactness in every drop.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
        bg: "bg-[#fafaf9]", // stone-50
        text: "text-stone-900"
    },
    {
        id: 2,
        title: "Flow.",
        description: "Water should not just move; it should glide. Our aerators create a stream that feels like silk against the skin.",
        image: "https://images.unsplash.com/photo-1556911220-e6584462aa3c?auto=format&fit=crop&q=80&w=800",
        bg: "bg-[#f5f5f4]", // stone-100
        text: "text-stone-900"
    },
    {
        id: 3,
        title: "Silence.",
        description: "True luxury is quiet. Advanced valve technology ensures that the only sound you hear is the water itself.",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
        bg: "bg-[#e7e5e4]", // stone-200
        text: "text-stone-900"
    },
    {
        id: 4,
        title: "Perfection.",
        description: "The result of 30 years of engineering. A bathroom fitting that stands the test of time and trends.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
        bg: "bg-[#d6d3d1]", // stone-300
        text: "text-stone-900"
    }
];

const Scrollytelling = () => {
    return (
        <section className="relative">
            {panels.map((panel, index) => (
                <div
                    key={panel.id}
                    className={`sticky top-0 h-screen flex items-center justify-center overflow-hidden ${panel.bg}`}
                    style={{ zIndex: index + 10 }}
                >
                    <div className="container mx-auto px-6 md:px-20 relative h-full flex flex-col md:flex-row items-center justify-center gap-12">

                        {/* TEXT HALF */}
                        <div className="flex-1 flex flex-col justify-center z-10 text-center md:text-left pt-20 md:pt-0">
                            <span className="text-[12vw] md:text-[8rem] font-bold text-black/5 leading-none absolute top-10 left-10 select-none">
                                0{panel.id}
                            </span>

                            <motion.h2
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.3 }}
                                className={`text-5xl md:text-8xl font-serif font-bold ${panel.text} mb-6`}
                            >
                                {panel.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.3 }}
                                className={`text-lg md:text-2xl font-light ${panel.text}/80 max-w-xl leading-relaxed`}
                            >
                                {panel.description}
                            </motion.p>
                        </div>

                        {/* IMAGE HALF */}
                        <div className="flex-1 w-full max-w-md md:max-w-xl aspect-[3/4] md:aspect-square relative">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
                                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={panel.image}
                                    alt={panel.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Gloss Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                            </motion.div>
                        </div>

                    </div>

                    {/* Bottom fade for smoother transition if needed, though sticky covers mostly */}
                </div>
            ))}

            {/* Spacer to allow the last card to be scrolled past if needed, 
                but since next section is normal flow, it should just scroll up naturally over the last sticky card 
                IF the next section has higher z-index. 
                Wait, if next section is normal flow, it will scroll UP over this. 
                We need to ensure z-indices play nice. 
                The last card is z-14. Next section in Home.tsx needs z-20. 
            */}
        </section>
    );
};

export default Scrollytelling;
