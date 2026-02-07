import Hero from '../components/Hero';
import Manifesto from '../components/Manifesto';
import BrandGalaxy from '../components/BrandGalaxy';
import ProductShowcase from '../components/ProductShowcase';
import ServicesBento from '../components/ServicesBento';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
    {
        id: 1,
        name: 'The Modernist Sofa',
        price: '$3,200',
        category: 'Living Room',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Marble Coffee Table',
        price: '$1,450',
        category: 'Tables',
        image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Velvet Armchair',
        price: '$1,800',
        category: 'Seating',
        image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 4,
        name: 'Minimalist Lamp',
        price: '$550',
        category: 'Lighting',
        image: 'https://images.unsplash.com/photo-1513506003011-3b03c8b8245b?q=80&w=800&auto=format&fit=crop'
    }
];

const Home = () => {
    return (
        <div className="bg-primary min-h-screen">
            <Hero />
            <Manifesto />
            <ProductShowcase />
            <BrandGalaxy />
            <ServicesBento />

            <section className="py-24 px-6 container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Featured Collections</h2>
                        <p className="text-gray-400 max-w-md">Curated pieces that define modern luxury. Each item is a masterpiece of design and craftsmanship.</p>
                    </div>
                    <a href="/showroom" className="text-accent hover:text-white transition-colors mt-6 md:mt-0 uppercase tracking-widest text-sm font-semibold border-b border-accent pb-1">
                        View All Products
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            <section className="py-24 bg-zinc-900 border-y border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Concept & Design</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="h-[500px] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop" alt="Interior Design" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left space-y-6">
                            <h3 className="text-2xl text-accent font-serif">A Symphony of Form and Function</h3>
                            <p className="text-gray-400 leading-relaxed">
                                At Gupta Sales, we believe that furniture is not just about utility, but about emotion. Our designs are inspired by the fluid lines of nature and the structured elegance of modern architecture.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Every piece is crafted with sustainable materials and obsessive attention to detail, ensuring that your home reflects your values and your taste.
                            </p>
                            <a href="/about" className="inline-block px-8 py-3 border border-white/20 text-white hover:bg-white hover:text-primary transition-all duration-300 uppercase text-xs tracking-widest mt-4">
                                Read Our Story
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
