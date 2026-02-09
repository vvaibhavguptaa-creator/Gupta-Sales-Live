import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../index.css";
import dynamic from 'next/dynamic';
import Navbar from "../components/Navbar";
// import SmoothScroll from "../components/SmoothScroll";
// import SmoothScroll from "../components/SmoothScroll";
import GrandRevealFooter from "../components/GrandRevealFooter";
import WhatsAppButton from "../components/WhatsAppButton";
import AmbientLight from "../components/AmbientLight";
// import FilmGrain from "../components/FilmGrain"; 
// import ScrollColorGrade from "../components/ScrollColorGrade";
import ScrollToTop from "../components/ScrollToTop";

// const SmoothScroll = dynamic(() => import('../components/SmoothScroll'), { ssr: false });
// const FilmGrain = dynamic(() => import('../components/FilmGrain'), { ssr: false });
// const ScrollColorGrade = dynamic(() => import('../components/ScrollColorGrade'), { ssr: false });
// const ScrollToTop = dynamic(() => import('../components/ScrollToTop'), { ssr: false });

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "Gupta Sales - Luxury Bathware & Surfaces",
    description: "Curated collection of world-class surfaces and bathware designed for modern living.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} bg-stone-50 text-stone-900`}>
                <ScrollToTop />
                {/* <SmoothScroll /> */}
                <AmbientLight />
                {/* <FilmGrain /> */}
                {/* <ScrollColorGrade /> */}
                <Navbar />
                <main className="min-h-screen relative z-10 flex flex-col gap-0 bg-transparent mb-[80vh] shadow-2xl">
                    {children}
                </main>
                <GrandRevealFooter />
                <WhatsAppButton />
            </body>
        </html>
    );
}
