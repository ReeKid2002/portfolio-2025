"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../providers/theme_provider";

export default function Footer() {
    const { theme } = useTheme();
    return (
        <footer className="w-full border-t border-gray-800 py-4 fixed bottom-0 bg-background">
            <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16">
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
                Want to say hi or collaborate? Contact me below.
              </p>
              <div className="flex items-center gap-2 mb-2 w-fit justify-start flex-wrap">
                <Link
                  href="https://www.linkedin.com/in/rahulbehera2002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-400'} transition-colors text-sm`}
                >
                  {" "}
                  LinkedIn
                </Link>
                {"/"}
                <Link
                  href="https://github.com/reekid2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-400'} transition-colors text-sm`}
                >
                  {" "}
                  GitHub
                </Link>
                {"/"}
                <Link
                  href="https://x.com/thedevrahul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-400'} transition-colors text-sm`}
                >
                  {" "}
                  X
                </Link>
                {"/"}
                <Link
                  href="mailto:rahulbehera2002@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-400'} transition-colors text-sm`}
                >
                  {" "}
                  Email
                </Link>
                {"/"}
                <Link
                  href="https://www.instagram.com/theunfilteredrahul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-400'} transition-colors text-sm`}
                >
                  Instagram
                </Link>
                {"/"}
                <Link
                  href="https://drive.google.com/file/d/1PvnBOnY5cSnC5bMaKcMqOn_ZhzEViAzk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-400'} transition-colors text-sm`}
                >
                  {" "}
                  Resume
                </Link>
              </div>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
                Made with{" "}
                <span className={`inline-block align-middle ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
                  <Image
                    src={theme === 'dark' ? '/code_dark.svg' : '/code_light.svg'}
                    alt="Code"
                    width={28}
                    height={28}
                  />
                </span>{" "}
                and ☕ by Rahul Behera &copy; {new Date().getFullYear()}
              </p>
            </div>
          </footer>
    );
}