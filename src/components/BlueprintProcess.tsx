"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "The Vision",
        description: "We begin with a deep dive into your lifestyle. We map out your needs, aesthetic preferences, and functional requirements to establish a clear conceptual direction.",
        align: "left"
    },
    {
        id: "02",
        title: "The Design",
        description: "Our architects transform concepts into layout. We provide 3D modeling and VR walkthroughs so you can experience your space before a single brick is laid.",
        align: "right"
    },
    {
        id: "03",
        title: "The Selection",
        description: "Material curation is an art. We guide you through our global library of stones, fixtures, and finishes to find the perfect tactile match for your design.",
        align: "left"
    },
    {
        id: "04",
        title: "The Reality",
        description: "Precision execution. We coordinate with contractors and oversee the installation to ensure the final result matches the vision down to the millimeter.",
        align: "right"
    }
];

const BlueprintProcess = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden bg-[#F9FAFB]">

            {/* --- BLUEPRINT GRID BACKGROUND --- */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            <div className="container mx-auto max-w-7xl relative z-10 px-6">

                {/* HEADER */}
                <div className="text-center mb-32 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-mono text-sm tracking-[0.2em] text-blue-600/60 uppercase mb-4 block"
                    >
                        Process
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-sans font-bold text-stone-900 tracking-tight"
                    >
                        The Blueprint.
                    </motion.h2>
                </div>

                {/* TIMELINE CONTAINER */}
                <div className="relative">

                    {/* CENTRAL LINE (DESKTOP) / LEFT LINE (MOBILE) */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-stone-200 md:-translate-x-1/2">
                        {/* SVG DRAWING LINE */}
                        <motion.div
                            style={{ height: useTransform(scaleY, [0, 1], ["0%", "100%"]) }}
                            className="w-full bg-stone-900 origin-top shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                        />
                    </div>

                    {/* STEPS LOOP */}
                    <div className="relative z-10 flex flex-col gap-24 md:gap-48">
                        {steps.map((step, index) => (
                            <StepRow key={step.id} step={step} index={index} />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

const StepRow = ({ step, index }: { step: typeof steps[0], index: number }) => {
    const isEvent = index % 2 === 0; // Left align on desktop
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col md:flex-row items-start md:items-center w-full relative ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}
        >

            {/* CONTENT CARD */}
            <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${step.align === 'left' ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'}`}>
                <div className={`p-8 bg-white/80 backdrop-blur-sm border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative group`}>

                    {/* Decorative Corner Marks */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-stone-300 -translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-stone-300 translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className={`flex flex-col ${step.align === 'left' ? 'md:items-end' : 'md:items-start'}`}>
                        <span className="font-mono text-4xl text-stone-200 font-bold mb-4 block select-none">
                            {step.id}
                        </span>
                        <h3 className="text-3xl font-bold text-stone-900 mb-4">{step.title}</h3>
                        <p className="text-stone-600 leading-relaxed font-light">{step.description}</p>
                    </div>
                </div>
            </div>

            {/* NODE (CIRCLE) ON THE LINE */}
            <div className="absolute left-[20px] md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                <motion.div
                    initial={{ scale: 0, backgroundColor: "#e7e5e4" }} // stone-200
                    whileInView={{ scale: 1, backgroundColor: "#1c1917" }} // stone-900
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.4 }}
                    className="w-4 h-4 md:w-5 md:h-5 rounded-full border-4 border-[#F9FAFB] shadow-lg flex items-center justify-center"
                >
                </motion.div>

                {/* Pulse Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 1 }}
                    whileInView={{ opacity: [0, 0.5, 0], scale: [1, 2, 2.5] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    className="absolute inset-0 bg-stone-900 rounded-full -z-10"
                />
            </div>

            {/* EMPTY SPACE FOR BALANCING GRID */}
            <div className="hidden md:block w-1/2" />

        </motion.div>
    );
}

export default BlueprintProcess;
