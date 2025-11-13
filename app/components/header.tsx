"use client";
import Link from "next/link";
import ThemeSwitcher from "./theme_switcher";
import { useContext } from "react";
import TabsContext from "../providers/tab_provider";
import { useTheme } from "../providers/theme_provider";

export default function Header() {
    const { activeTab, setActiveTab } = useContext(TabsContext);
    const { theme } = useTheme();
    return (
        <header className="mt-8 mb-6">
              <nav className="flex items-center justify-between">
                <div className="flex items-center">
                  <Link
                    href="/"
                    className={`nav-item-wave mr-5 text-sm hover:scale-110 transition-all duration-300 ${activeTab === 'me' ? (theme === 'dark' ? 'text-white' : 'text-black') : (theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-400')} inline-block`}
                    onClick={() => {
                        setActiveTab('me');
                    }}
                  >
                    me
                  </Link>
                  <Link
                    href="/experience"
                    className={`nav-item-wave mr-5 text-sm hover:scale-110 transition-all duration-300 ${activeTab === 'experience' ? (theme === 'dark' ? 'text-white' : 'text-black') : (theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-400')} inline-block`}
                    onClick={() => {
                        setActiveTab('experience');
                    }}
                  >
                    experience
                  </Link>
                  <Link
                    href="/project"
                    className={`nav-item-wave mr-5 text-sm hover:scale-110 transition-all duration-300 ${activeTab === 'project' ? (theme === 'dark' ? 'text-white' : 'text-black') : (theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-400')} inline-block`}
                    onClick={() => {
                        setActiveTab('project');
                    }}
                  >
                    project
                  </Link>
                  <Link
                    href="/stack"
                    className={`nav-item-wave mr-5 text-sm hover:scale-110 transition-all duration-300 ${activeTab === 'stack' ? (theme === 'dark' ? 'text-white' : 'text-black') : (theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-400')} inline-block`}
                    onClick={() => {
                        setActiveTab('stack');
                    }}
                  >
                    stack
                  </Link>
                </div>
                <ThemeSwitcher />
              </nav>
            </header>
    );
}