export default function AmbientLight() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10000ms]" />
            <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] bg-yellow-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[7000ms]" />
        </div>
    );
};
