import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="h-screen w-full bg-stone-950 flex flex-col items-center justify-center text-stone-200">
            <h2 className="text-4xl md:text-6xl font-serif mb-4">404</h2>
            <p className="text-lg md:text-xl font-light opacity-60 mb-8">This page is lost in the void.</p>
            <Link
                href="/"
                className="px-8 py-3 bg-stone-100 text-stone-900 rounded-full font-medium tracking-wide hover:bg-white hover:scale-105 transition-all"
            >
                Return Home
            </Link>
        </div>
    );
}
