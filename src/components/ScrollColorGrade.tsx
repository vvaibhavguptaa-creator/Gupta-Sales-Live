
import { useScroll, useTransform, motion } from 'framer-motion';

const ScrollColorGrade = () => {
    const { scrollYProgress } = useScroll();

    // Subtle color grading overlay that changes opacity/tint based on scroll
    // 0 -> 0.2 (Hero): Dark & Clear
    // 0.2 -> 0.5 (Manifesto/Products): Slightly warmer/richer
    // 0.5 -> 0.8 (Services): Cooler/Technical
    // 0.8 -> 1.0 (Footer): Deep Black

    const warmOverlayOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 0.1, 0]);
    const coolOverlayOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 0.05, 0]);

    return (
        <>
            <motion.div
                style={{ opacity: warmOverlayOpacity }}
                className="fixed inset-0 pointer-events-none z-[100] bg-orange-500 mix-blend-overlay"
            />
            <motion.div
                style={{ opacity: coolOverlayOpacity }}
                className="fixed inset-0 pointer-events-none z-[100] bg-blue-500 mix-blend-overlay"
            />
        </>
    );
};

export default ScrollColorGrade;
