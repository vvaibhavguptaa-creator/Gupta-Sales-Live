import { motion } from 'framer-motion';

interface ProductCardProps {
    id: string | number;
    name: string;
    price: string;
    image: string;
    category: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group cursor-pointer"
        >
            <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-gray-800">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 px-6 py-3 bg-white text-primary text-xs uppercase tracking-widest font-bold">
                    View Details
                </button>
            </div>

            <div className="text-center">
                <p className="text-xs text-accent uppercase tracking-widest mb-1">{category}</p>
                <h3 className="text-lg font-serif text-white mb-1 group-hover:text-accent transition-colors">{name}</h3>
                <p className="text-gray-400 font-light">{price}</p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
