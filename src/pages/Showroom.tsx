import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const products = [
    { id: 1, name: 'The Modernist Sofa', price: '$3,200', category: 'Living Room', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop' },
    { id: 2, name: 'Marble Coffee Table', price: '$1,450', category: 'Tables', image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=800&auto=format&fit=crop' },
    { id: 3, name: 'Velvet Armchair', price: '$1,800', category: 'Seating', image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800&auto=format&fit=crop' },
    { id: 4, name: 'Minimalist Lamp', price: '$550', category: 'Lighting', image: 'https://images.unsplash.com/photo-1513506003011-3b03c8b8245b?q=80&w=800&auto=format&fit=crop' },
    { id: 5, name: 'Geometric Rug', price: '$890', category: 'Accessories', image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800&auto=format&fit=crop' },
    { id: 6, name: 'Oak Dining Chair', price: '$420', category: 'Dining', image: 'https://images.unsplash.com/photo-1503602642458-2321114458ed?q=80&w=800&auto=format&fit=crop' },
    { id: 7, name: 'Bookshelf Unit', price: '$2,100', category: 'Storage', image: 'https://images.unsplash.com/photo-1594620302200-9a72930e4afb?q=80&w=800&auto=format&fit=crop' },
    { id: 8, name: 'Artisan Vase', price: '$150', category: 'Decor', image: 'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?q=80&w=800&auto=format&fit=crop' },
];

const Showroom = () => {
    return (
        <div className="bg-primary min-h-screen text-white">
            <Navbar />

            <div className="pt-32 pb-12 px-6 container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Showroom</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">Explore our complete collection of design-forward furniture and accessories.</p>
            </div>

            <div className="px-6 data-container mx-auto pb-24">
                {/* Filter Placeholder - Could be implemented later */}
                <div className="flex justify-center space-x-6 mb-16 text-sm uppercase tracking-widest text-gray-500">
                    <span className="text-accent cursor-pointer border-b border-accent pb-1">All</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Living</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Dining</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Bedroom</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Decor</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Showroom;
