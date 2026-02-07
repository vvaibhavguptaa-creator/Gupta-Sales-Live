
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-[pulse_3s_ease-in-out_infinite]"
            aria-label="Chat with us on WhatsApp"
        >
            <FaWhatsapp className="text-white text-3xl" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
                Chat with us
            </span>
        </a>
    );
};

export default WhatsAppButton;
