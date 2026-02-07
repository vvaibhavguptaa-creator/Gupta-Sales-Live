
import { FaMapMarkerAlt, FaPhone, FaArrowRight } from 'react-icons/fa';

const FooterSection = () => {
    return (
        <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif tracking-wide">GUPTA SALES</h3>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Redefining spaces since 1995. The premier destination for luxury bath and surface solutions in Bikaner.
                        </p>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-yellow-500">Services</h4>
                        <ul className="space-y-4">
                            {['3D Bathroom Design', 'Architectural Consultation', 'Bulk Supply', 'After-Sales Support'].map((service) => (
                                <li key={service} className="flex items-center text-gray-400 hover:text-white transition-colors group cursor-pointer">
                                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3 group-hover:bg-white transition-colors" />
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-yellow-500">The Showroom</h4>
                        <div className="space-y-6">
                            <div className="flex items-start text-gray-400">
                                <FaMapMarkerAlt className="mt-1 mr-3 text-white flex-shrink-0" />
                                <p>Rani Bazar, Bikaner, Rajasthan</p>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <FaPhone className="mr-3 text-white" />
                                <p>Contact details coming soon</p>
                            </div>
                            <button className="mt-4 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 group text-sm uppercase tracking-wider font-semibold">
                                Get Directions <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
                    <p>&copy; 2026 Gupta Sales. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
