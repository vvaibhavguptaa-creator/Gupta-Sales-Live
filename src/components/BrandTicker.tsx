
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";

// Utility function to replace @motionone/utils wrap
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    }); const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * that we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div className="parallax">
            <motion.div className="scroller flex flex-nowrap whitespace-nowrap" style={{ x }}>
                {/* Solid, Professional Typography - No Outline */}
                {[...Array(4)].map((_, i) => (
                    <span key={i} className="block mr-16 md:mr-32 text-6xl md:text-8xl font-serif font-medium uppercase tracking-tighter text-white/80 select-none hover:text-white transition-colors duration-500 cursor-default">
                        {children}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

const BrandTicker = () => {
    return (
        <section className="bg-black py-24 overflow-hidden relative z-10 border-y border-white/5">
            <ParallaxText baseVelocity={-2}>Kohler Jaquar Grohe Kajaria</ParallaxText>
            <div className="h-12" /> {/* Gap */}
            <ParallaxText baseVelocity={2}>Somany Hindware Cera AsianPaints</ParallaxText>

            {/* Vignette for depth */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />
        </section>
    );
};

export default BrandTicker;
