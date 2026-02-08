import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-secondary pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-serif font-bold text-accent mb-6">GUPTA SALES</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Curating luxury furniture and interior elegance for the sophisticated home. Redefining style since 1995.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Explore</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="/showroom" className="hover:text-accent transition-colors">Showroom</a></li>
                            <li><a href="/collections" className="hover:text-accent transition-colors">Collections</a></li>
                            <li><a href="/designers" className="hover:text-accent transition-colors">Our Designers</a></li>
                            <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Location</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-accent shrink-0" />
                                <span>Bikaner, Rajasthan<br />India</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Stay Conntected</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Gupta Sales. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
