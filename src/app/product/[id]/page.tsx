"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ProductDetails = () => {
    const params = useParams();
    const id = params?.id;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="bg-stone-50 min-h-screen text-stone-900">
            <div className="pt-32 pb-20 container mx-auto px-6 flex items-center justify-center min-h-[60vh]">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4 text-[#1c1917]">Product Details</h1>
                    <p className="text-[#44403c]">Viewing details for product ID: <span className="text-amber-600 font-bold">{id}</span></p>
                    <p className="mt-4 text-sm text-stone-500">(This is a placeholder page implementation)</p>
                    <Link href="/showroom" className="inline-block mt-8 px-6 py-2 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors">
                        Back to Showroom
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default function Page() {
    return <ProductDetails />;
}
