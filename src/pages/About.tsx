import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="bg-primary min-h-screen text-white">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6">
                <h1 className="text-5xl font-serif mb-10 text-center text-accent">Our Story</h1>
                <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed space-y-6 text-lg">
                    <p>
                        Founded in 1995, Gupta Sales began with a singular mission: to bring world-class design to discerning homes. What started as a small boutique has grown into a premier destination for luxury furniture and interior design.
                    </p>
                    <p>
                        We believe that your home is your sanctuary. It should reflect your personality, your dreams, and your lifestyle. That's why we curate only the finest pieces from around the globe, ensuring that every item in our showroom meets our rigorous standards for quality, craftsmanship, and aesthetics.
                    </p>
                    <p>
                        Our team of expert consultants is dedicated to helping you find the perfect pieces to complete your vision. Whether you are furnishing a new home or looking for that one statement piece, we are here to guide you every step of the way.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
