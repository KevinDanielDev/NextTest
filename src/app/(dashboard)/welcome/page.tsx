import { Metadata } from "next";
import Image from "next/image";

// Seo friendly metadata
export const metadata: Metadata = {
    title: 'QuickBet - Dashboard',
    description: 'Dashboard',
    keywords: ['QuickBet', 'Dashboard', 'Welcome', 'Home', 'Page', 'Movies'],
};

export default function DashboardPage() {
    return (
        <div className="min-h-screen">
            <div className="relative w-full bg-black overflow-hidden h-[50vh] md:h-[60vh] lg:h-96">
                <div className="relative h-full">
                    <Image
                        src="/movie-dashboard.jpeg"
                        alt="Movie"
                        layout="fill"
                        
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8 text-white">
                    <div className="mb-4">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">Kung Fu Panda 4</h1>
                        <p className="text-sm font-bold md:text-lg lg:text-xl mb-4">
                            Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🐼✨
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg font-semibold bg-green-600 text-white rounded-lg hover:bg-green-500">
                            Watch Now
                        </button>
                        <div
                            className="radial-progress text-green-500"
                            style={{ "--value": "95" } as React.CSSProperties}
                            role="progressbar"
                        >
                            <span className="text-xs md:text-lg lg:text-xl font-bold">97%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
