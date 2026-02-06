import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetails = () => {
    const { id } = useParams();

    return (
        <div className="bg-primary min-h-screen text-white">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6 flex items-center justify-center min-h-[60vh]">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Product Details</h1>
                    <p className="text-gray-400">Viewing details for product ID: <span className="text-accent">{id}</span></p>
                    <p className="mt-4 text-sm text-gray-500">(This is a placeholder page implementation)</p>
                    <a href="/showroom" className="inline-block mt-8 px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-colors">
                        Back to Showroom
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;
