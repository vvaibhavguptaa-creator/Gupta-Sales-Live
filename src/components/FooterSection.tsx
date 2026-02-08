
import { motion } from 'framer-motion';
import { FaArrowUp, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterSection = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black text-white relative pt-40 pb-12 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">

                {/* 1. Massive Call to Action */}
                <div className="mb-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-[12vw] leading-[0.8] font-serif font-medium tracking-tighter uppercase"
                    >
                        Let's <br />
                        <span className="text-white/30">Build</span> <br />
                        <span className="ml-[10vw]">Dream.</span>
                    </motion.h1>
                </div>

                {/* 2. Architectural Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-16">

                    {/* Brand / Address */}
                    <div className="md:col-span-4 space-y-8">
                        <div>
                            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Visit Us</h4>
                            <p className="text-xl font-light leading-relaxed">
                                Rani Bazar, <br />
                                Bikaner, Rajasthan <br />
                                334001, India
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Contact</h4>
                            <p className="text-xl font-light hover:text-yellow-500 transition-colors cursor-pointer">
                                hello@guptasales.com
                            </p>
                            <p className="text-xl font-light mt-2">
                                +91 987 654 3210
                            </p>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="md:col-span-3">
                        <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-8">Collections</h4>
                        <ul className="space-y-4">
                            {['Surfaces', 'Bath Fittings', 'Wellness', 'Kitchens'].map((item) => (
                                <li key={item} className="overflow-hidden group cursor-pointer">
                                    <span className="block text-2xl font-light translate-y-0 group-hover:-translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1]">
                                        {item}
                                    </span>
                                    <span className="block text-2xl font-light text-yellow-500 -translate-y-full group-hover:-translate-y-[200%] transition-transform duration-500 ease-[0.16,1,0.3,1] absolute top-auto">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="md:col-span-3">
                        <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-8">Company</h4>
                        <ul className="space-y-4">
                            {['Our Story', 'Projects', 'Partners', 'Careers'].map((item) => (
                                <li key={item} className="text-2xl font-light text-white/60 hover:text-white transition-colors cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Back to Top */}
                    <div className="md:col-span-2 flex flex-col justify-between items-end">
                        <button
                            onClick={scrollToTop}
                            className="group flex flex-col items-center gap-4 focus:outline-none"
                        >
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                <FaArrowUp className="text-xl" />
                            </div>
                            <span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Top</span>
                        </button>
                    </div>
                </div>

                {/* 3. Bottom Bar */}
                <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-sm uppercase tracking-wider">© 2026 Gupta Sales. All Rights Reserved.</p>

                    <div className="flex gap-8">
                        <FaInstagram className="text-white/40 hover:text-white text-xl cursor-pointer transition-colors" />
                        <FaTwitter className="text-white/40 hover:text-white text-xl cursor-pointer transition-colors" />
                        <FaLinkedin className="text-white/40 hover:text-white text-xl cursor-pointer transition-colors" />
                    </div>

                    <p className="text-white/20 text-sm uppercase tracking-wider">Designed by A.I.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
