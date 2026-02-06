import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frameCount = 160;

const HeroSequence = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    // Preload images with blocking logic
    useEffect(() => {
        // Lock scroll immediately
        document.body.style.overflow = 'hidden';

        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const frameIndex = i.toString().padStart(3, '0');
            img.src = `/assets/sequence/seq_${frameIndex}.jpg`;

            img.onload = () => {
                loadedCount++;
                const progress = Math.round((loadedCount / frameCount) * 100);
                setLoadingProgress(progress);

                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                    // Slight delay to ensure the last frame renders in the counter before unlocking
                    setTimeout(() => {
                        setIsLoaded(true);
                        document.body.style.overflow = ''; // Unlock scroll
                    }, 500);
                }
            };

            img.onerror = () => {
                console.warn(`Failed to load frame ${i}`);
                loadedCount++;
                const progress = Math.round((loadedCount / frameCount) * 100);
                setLoadingProgress(progress);

                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                    setTimeout(() => {
                        setIsLoaded(true);
                        document.body.style.overflow = '';
                    }, 500);
                }
            }
            loadedImages.push(img);
        }

        return () => {
            // Cleanup: ensure scroll is unlocked if component unmounts
            document.body.style.overflow = '';
        };
    }, []);

    // ... (Resize logic remains here) ...

    // ... (Render logic remains here) ...
    // Note: We need to ensure we don't try to render before images are ready in the array, 
    // although "images[index]" check handles that safely.

    // ... (GSAP logic remains here) ...


    useEffect(() => {
        if (!isLoaded || !canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        // Set canvas dimensions for High DPI
        const updateDimensions = () => {
            if (canvasRef.current) {
                const dpr = window.devicePixelRatio || 1;
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;

                // Explicit CSS size
                canvasRef.current.style.width = `${window.innerWidth}px`;
                canvasRef.current.style.height = `${window.innerHeight}px`;

                // Scale context
                context.scale(dpr, dpr);

                // Redraw immediately after resize to prevent flickering
                // We'll need the current frame index, but for simplicity we rely on GSAP's ticker or just wait for scroll update.
                // Or we can track current frame in a ref if needed. 
                // For now, let scroll trigger handle next update or render frame 0 if not started.
            }
        };
        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        // Initial draw
        const render = (index: number) => {
            if (images[index]) {
                // Logical dimensions (screen size), not physical buffer size
                const width = window.innerWidth;
                const height = window.innerHeight;

                // "Object-cover" logic
                const scale = Math.max(width / images[index].width, height / images[index].height);
                const x = (width / 2) - (images[index].width / 2) * scale;
                const y = (height / 2) - (images[index].height / 2) * scale;

                // Clear using logical dimensions
                context.clearRect(0, 0, width, height);
                context.drawImage(images[index], x, y, images[index].width * scale, images[index].height * scale);
            }
        };

        const sequence = { frame: 0 };

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: canvas, // Modify: we might want to pin the canvas explicitly or the container
                // Actually, usually we pin the container content and let the scroll scrub the sequence
            }
        });

        // We need to pinning correctly. 
        // The container is 500vh. The canvas should be sticky inside it.
        // Ideally: Container is Relative. Canvas is Sticky top-0.
        // GSAP just scrubs the value.

        tl.to(sequence, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            onUpdate: () => render(Math.round(sequence.frame))
        });

        render(0);

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [isLoaded, images]);

    // Text Animations
    // We can use separate ScrollTriggers for elements entering/exiting based on scroll position of the container
    // Frame 10 ~= 6% scroll, Frame 50 ~= 31%, Frame 90 ~= 56% 
    // (Assuming linear mapping 0-160 over 0-100% progress)

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-black w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Blocking Preloader Overlay */}
            <div
                className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <div className="text-center">
                    <div className="text-8xl font-bold font-serif text-white tracking-tighter">
                        {loadingProgress}%
                    </div>
                </div>
            </div>

            {/* Overlay: Frame 10 */}
            <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-10 opacity-0 overlay-text" data-frame="10">
                <div className="text-center">
                    <h2 className="text-6xl md:text-9xl font-serif font-light text-white mb-4 tracking-tight">
                        The Foundation
                    </h2>
                    <p className="text-sm md:text-xl text-gray-400 uppercase tracking-[0.3em] font-sans">
                        Italian Statuario Marble
                    </p>
                </div>
            </div>

            {/* Overlay: Frame 50 */}
            <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-10 opacity-0 overlay-text" data-frame="50">
                <div className="text-center">
                    <h2 className="text-6xl md:text-9xl font-serif font-light text-white mb-4 tracking-tight">
                        The Flow
                    </h2>
                    <p className="text-sm md:text-xl text-gray-400 uppercase tracking-[0.3em] font-sans">
                        Rose Gold Collection
                    </p>
                </div>
            </div>

            {/* Overlay: Frame 90 */}
            <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-10 opacity-0 overlay-text" data-frame="90">
                <div className="text-center">
                    <h2 className="text-6xl md:text-9xl font-serif font-light text-white mb-4 tracking-tight">
                        The Heart
                    </h2>
                    <p className="text-sm md:text-xl text-gray-400 uppercase tracking-[0.3em] font-sans">
                        Walnut & Matte Black
                    </p>
                </div>
            </div>

            <OverlayLogic containerRef={containerRef} />
        </div>
    );
};

// Separate component to handle the specific text triggers to avoid re-rendering heavy canvas logic? 
// Or just useEffect inside.
// Let's do useEffect inside for simplicity but clean separation.

const OverlayLogic = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) => {
    useEffect(() => {
        if (!containerRef.current) return;

        const texts = containerRef.current.querySelectorAll('.overlay-text');

        texts.forEach((text) => {
            const frameAttr = text.getAttribute('data-frame');
            if (!frameAttr) return;
            const targetFrame = parseInt(frameAttr);
            const progressStart = targetFrame / frameCount;

            // Initial state
            gsap.set(text, { y: 50, opacity: 0 });

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: `${progressStart * 100}% top`,
                end: `${(progressStart * 100) + 20}% top`,
                onEnter: () => {
                    gsap.fromTo(text,
                        { y: 50, opacity: 0 },
                        { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', overwrite: 'auto' }
                    );
                },
                onLeave: () => {
                    gsap.fromTo(text,
                        { y: 0, opacity: 1 },
                        { y: -50, opacity: 0, duration: 1.5, ease: 'power3.out', overwrite: 'auto' }
                    );
                },
                onEnterBack: () => {
                    gsap.fromTo(text,
                        { y: -50, opacity: 0 },
                        { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', overwrite: 'auto' }
                    );
                },
                onLeaveBack: () => {
                    gsap.fromTo(text,
                        { y: 0, opacity: 1 },
                        { y: 50, opacity: 0, duration: 1.5, ease: 'power3.out', overwrite: 'auto' }
                    );
                }
            });
        });

        return () => {
            // Clean up custom ScrollTriggers might be redundant if we kill all, but good practice if mixed
            // ScrollTrigger.getAll().forEach(t => t.kill()); // Handled in parent
        };

    }, [containerRef]);
    return null;
}

export default HeroSequence;
