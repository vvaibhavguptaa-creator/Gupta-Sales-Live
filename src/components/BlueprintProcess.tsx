import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Pencil, Box, Layers, Key } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "The Vision",
        description: "We begin with a deep dive into your lifestyle. We map out your needs, aesthetic preferences, and functional requirements to establish a clear conceptual direction.",
        icon: Pencil,
        align: "left"
    },
    {
        id: 2,
        title: "The Design",
        description: "Our architects transform concepts into layout. We provide 3D modeling and VR walkthroughs so you can experience your space before a single brick is laid.",
        icon: Box,
        align: "right"
    },
    {
        id: 3,
        title: "The Selection",
        description: "Material curation is an art. We guide you through our global library of stones, fixtures, and finishes to find the perfect tactile match for your design.",
        icon: Layers,
        align: "left"
    },
    {
        id: 4,
        title: "The Reality",
        description: "Precision execution. We coordinate with contractors and oversee the installation to ensure the final result matches the vision down to the millimeter.",
        icon: Key,
        align: "right"
    }
];

const StepCard = ({ step, index }: { step: typeof steps[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`flex items-center w-full mb-32 ${step.align === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
        >
            {/* CARD */}
            <div className={`w-1/2 p-8 ${step.align === 'left' ? 'text-right pr-16' : 'text-left pl-16'}`}>
                <div className="inline-block mb-4">
                    <span className="font-mono text-amber-600 text-sm tracking-widest uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        Step 0{step.id}
                    </span>
                </div>
                <h3 className="text-4xl font-serif font-bold text-[#1D1D1F] mb-4">{step.title}</h3>
                <p className="text-[#1D1D1F]/70 text-lg leading-relaxed font-light">{step.description}</p>
            </div>

            {/* CENTER NODE */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0, boxShadow: "0 0 0 0px rgba(245, 158, 11, 0)" }}
                    whileInView={{ scale: 1, boxShadow: "0 0 0 8px rgba(245, 158, 11, 0.2)" }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-12 h-12 bg-white border-2 border-amber-500 rounded-full flex items-center justify-center z-20 shadow-lg"
                >
                    <step.icon className="w-5 h-5 text-amber-600" strokeWidth={1.5} />
                </motion.div>
            </div>

            {/* EMPTY SIDE FOR BALANCING */}
            <div className="w-1/2" />
        </motion.div>
    );
};

const BlueprintProcess = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={containerRef} className="relative py-40 overflow-hidden bg-white">

            {/* GRAPH PAPER BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* HEADER */}
                <div className="text-center mb-32">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="font-mono text-sm tracking-[0.3em] uppercase text-[#1D1D1F]/50 block mb-4"
                    >
                        Engineering Luxury
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-serif text-[#1D1D1F]"
                    >
                        The Blueprint.
                    </motion.h2>
                </div>

                {/* TIMELINE CONTAINER */}
                <div className="relative">

                    {/* CENTRAL LINE (BACKGROUND) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-1/2" />

                    {/* CENTRAL LINE (ANIMATED DRAWING) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 overflow-hidden origin-top">
                        <motion.div
                            style={{ scaleY }}
                            className="w-full h-full bg-amber-500 origin-top"
                        />
                    </div>

                    {/* STEPS LOOP */}
                    <div className="relative z-10">
                        {steps.map((step, index) => (
                            <StepCard key={step.id} step={step} index={index} />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BlueprintProcess;
