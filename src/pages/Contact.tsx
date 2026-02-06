import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="bg-primary min-h-screen text-white">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h1 className="text-5xl font-serif mb-8 text-accent">Get in Touch</h1>
                        <p className="text-gray-400 mb-10 text-lg">
                            We would love to hear from you. Visit our showroom or send us a message to schedule a consultation.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-serif mb-2">Showroom Address</h3>
                                <p className="text-gray-400">123 Luxury Avenue, Design District<br />New York, NY 10012</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-serif mb-2">Contact Info</h3>
                                <p className="text-gray-400">Phone: +1 (555) 123-4567<br />Email: hello@guptasales.com</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-serif mb-2">Opening Hours</h3>
                                <p className="text-gray-400">Mon - Fri: 10am - 8pm<br />Sat - Sun: 11am - 6pm</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-900 p-8 rounded-lg border border-white/5">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                                <input type="text" className="w-full bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                                <input type="email" className="w-full bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-accent transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-accent transition-colors" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full bg-accent text-primary py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
