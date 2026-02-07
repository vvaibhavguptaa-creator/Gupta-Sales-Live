
import { motion } from 'framer-motion';

const Manifesto = () => {
    return (
        <section className="min-h-screen bg-[#050505] flex items-center overflow-hidden py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2 space-y-8"
                    >
                        <div>
                            <p className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
                                From Bikaner to Your Sanctuary
                            </p>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
                                Thirty Years of <br className="hidden md:block" />
                                <span className="italic text-gray-400">Excellence.</span>
                            </h2>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                            We don&apos;t just sell tiles; we curate lifestyles. For over three decades,
                            Gupta Sales has been the premier destination for those who refuse to compromise on quality.
                            A one-stop showroom for the visionary homeowner.
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8 mt-8">
                            <div>
                                <h4 className="text-3xl font-serif text-white">30+</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Years</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif text-white">500+</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Projects</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif text-white">100%</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Quality</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Visual/Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-full md:w-1/2 relative h-[500px] md:h-[700px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-2xl md:rounded-l-[100px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
                                alt="Luxury Interior"
                                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-white/10 rounded-full hidden md:block animate-spin-slow" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Manifesto;
