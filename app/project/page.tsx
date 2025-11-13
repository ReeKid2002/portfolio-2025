"use client";

import { useTheme } from "../providers/theme_provider";

export default function ProjectPage() {
    const { theme } = useTheme();
    return (
        <div>
            <h1 className="text-2xl">Projects</h1>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>the things I build out of curiosity or need</p>
            <div className="mt-6 pop-out flex items-start gap-4">
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="font-bold color-white cursor-pointer" onClick={() => window.open("https://github.com/ReeKid2002/trackfy", "_blank")}>Trackfy</h2>
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>(Work in progress)</span>
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>Your personal productivity and finance companion — track your habits, goals, expenses, and spending trends effortlessly.</p>
                </div>
            </div>
            <div className="mt-6 pop-out flex items-start gap-4">
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="font-bold color-white cursor-pointer" onClick={() => window.open("https://one-health-demo.vercel.app/marketing", "_blank")}>One Health</h2>
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>(Work in progress)</span>
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>Empowering you to manage health easily — one dashboard, one interface, one step ahead.</p>
                </div>
            </div>
            <div className="mt-6 pop-out flex items-start gap-4">
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="font-bold color-white cursor-pointer" onClick={() => window.open("https://www.instagram.com/lumenostalgia.store/", "_blank")}>Lume Nostalgia</h2>
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>2025</span>
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>Bringing you premium-quality, aesthetic products at unbeatable prices. Elevate your space effortlessly.</p>
                </div>
            </div>
            <div className="mt-6 pop-out flex items-start gap-4">
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>More coming soon...</div>
            </div>
        </div>
    );
}