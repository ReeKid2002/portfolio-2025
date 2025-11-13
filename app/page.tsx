"use client";
import Image from "next/image";
import { useTheme } from "./providers/theme_provider";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div>
      <div className="flex items-center">
        <Image
          src="/me.png"
          alt="Rahul"
          width={100}
          height={100}
          className="rounded-full w-16 h-16 object-cover"
        />
        <div className="ml-4">
          <h1 className="text-xl font-semibold">
            Hey, I&apos;m{" "}
            <span
              className="font-bold cursor-pointer underline-draw transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/rahulbehera2002/",
                  "_blank"
                )
              }
            >
              Rahul
            </span>
            !
          </h1>
          <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Fullstack Developer{" "}
            <span
              className={`font-bold cursor-pointer transition-all duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-400'}`}
              onClick={() => window.open("https://www.alaan.com", "_blank")}
            >
              @Alaan (YC W23)
            </span>
          </p>
        </div>
      </div>
      <div className="mt-6" />
      <p className={`py-2 pop-out ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
        A{" "}
        <span className={`font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>
          Full-Stack Software Engineer
        </span>{" "}
        based in{" "}
        <span
          className={`font-bold cursor-pointer transition-all duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-gray-400' : 'text-black hover:text-gray-400'}`}
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/Bengaluru,+Karnataka",
              "_blank"
            )
          }
        >
          Bengaluru
        </span>
        , passionate about crafting seamless digital experiences that blend
        design, performance, and scalability.
      </p>
      <p className={`py-2 pop-out ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
        I focus on creating pixel-perfect interfaces, smooth user interactions,
        and robust backend systems that bring ideas to life. Passionate about
        crafting seamless digital experiences, I build scalable, high-performing
        applications and constantly explore new tools to refine performance,
        design, and usability.
      </p>
      <div className="mt-6 pop-out">
        <p className={`py-2 pop-out ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
          Beyond the Code — A Bit About Me:
        </p>
        <p className={`flex items-start gap-2 py-2 pop-out ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
          - <span>When I&apos;m not glued to my screen, I like spending time outdoors.</span>
        </p>
        <p className={`flex items-start gap-2 py-2 pop-out ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
          - <span>You&apos;ll often find me on the badminton court trying to perfect my
          smashes.</span>
        </p>
        <p className={`flex items-start gap-2 py-2 pop-out ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
          - <span>I enjoy going for a run or a jog — it&apos;s my go-to way to reset.</span>
        </p>
        <p className={`flex items-start gap-2 py-2 pop-out ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
          - <span>And on most days, I&apos;m at the gym, still trying to convince myself
          that lifting weights is &quot;fun.&quot;</span>
        </p>
        <p className={`flex items-start gap-2 py-2 pop-out ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
          - <span>I&apos;ve hopped across a few borders —{" "}
          <span
            className={`font-bold cursor-pointer hover:scale-110 transition-all duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-gray-400' : 'text-black hover:text-gray-400'}`}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Sri+Lanka",
                "_blank"
              )
            }
          >
            🇱🇰
          </span>{" "}
          <span
            className={`font-bold cursor-pointer hover:scale-110 transition-all duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-gray-400' : 'text-black hover:text-gray-400'}`}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/United+Arab+Emirates",
                "_blank"
              )
            }
          >
            🇦🇪
          </span>{" "}
          <span
            className={`font-bold cursor-pointer hover:scale-110 transition-all duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-gray-400' : 'text-black hover:text-gray-400'}`}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Saudi+Arabia",
                "_blank"
              )
            }
          >
            🇸🇦
          </span>{" "}
          <span
            className={`font-bold cursor-pointer hover:scale-110 transition-all duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-gray-400' : 'text-black hover:text-gray-400'}`}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Thailand",
                "_blank"
              )
            }
          >
            🇹🇭
          </span>{" "}
          <span
            className={`font-bold cursor-pointer hover:scale-110 transition-all duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-gray-400' : 'text-black hover:text-gray-400'}`}
            onClick={() =>
              window.open("https://www.google.com/maps/place/Vietnam", "_blank")
            }
          >
            🇻🇳
          </span>{" "}
          — but I&apos;m just warming up. The dream? Backpack my way around the world
          someday.</span>
        </p>
        <p className={`flex items-start gap-2 py-2 pop-out ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
          - {" "}
          <span>
            I have a soft spot for photography — sometimes I chase sunsets,
            sometimes I just pretend I&apos;m shooting for National Geographic.
          </span>
        </p>
      </div>
    </div>
  );
}
