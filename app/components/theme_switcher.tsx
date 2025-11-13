"use client";
import Image from "next/image";
import { useTheme } from "../providers/theme_provider";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative w-6 h-6">
      <button
        onClick={toggleTheme}
        className={`absolute right-0 cursor-pointer hover:scale-110 transition-all duration-300 transform ease-in-out ${
          theme === "dark" ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
        aria-label="Switch to light theme"
      >
        <Image
          src="/theme/sun_dark.gif"
          alt="Sun"
          width={24}
          height={24}
          unoptimized
          className="rounded"
        />
      </button>
      <button
        onClick={toggleTheme}
        className={`absolute right-0 cursor-pointer hover:scale-110 transition-all duration-300 transform ease-in-out ${
          theme === "light" ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
        aria-label="Switch to dark theme"
      >
        <Image
          src="/theme/moon_light.gif"
          alt="Moon"
          width={24}
          height={24}
          unoptimized
          className="rounded"
        />
      </button>
    </div>
  );
}
