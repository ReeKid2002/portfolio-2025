"use client";
import Image from "next/image";
import { useTheme } from "../providers/theme_provider";

export default function ExperiencePage() {
  const { theme } = useTheme();
  return (
    <div>
      <h1 className="text-2xl">Experience</h1>
      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>a summary of my journey as a developer</p>
      <div className="mt-6 pop-out flex items-start gap-4">
        <Image
          src={"/company/alaanpay_logo.jpeg"}
          alt="AlaanPay Logo"
          width={20}
          height={20}
          onClick={() => window.open("https://www.alaan.com", "_blank")}
          className="rounded-2xl w-16 h-16 object-cover cursor-pointer"
        />
        <div>
          <h2
            className="font-bold color-white cursor-pointer"
            onClick={() => window.open("https://www.alaan.com", "_blank")}
          >
            Alaan الآن (YC W23)
          </h2>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>Software Engineer 2</p>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>July 2023 - Present</p>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}mt-2`} >
            At Alaan, I’ve been part of the engineering team behind the Middle
            East’s largest corporate cards and spend management platform, built
            to simplify and modernize how businesses handle corporate expenses.
          </p>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'} mt-2 flex items-start gap-2`} >
            <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>-</span>{" "}
            <div>
              Designed, developed, and maintained the company’s mobile
              application used by over{" "}
              <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>30,000 daily active</span>{" "}
              users and <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>3,000+</span>
              corporates across the region.
            </div>
          </div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'} mt-2 flex items-start gap-2`} >
            <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>-</span>{" "}
            <div>
              The app empowers spenders to easily view and manage their
              allocated cards, track real-time transactions, and handle cash
              reimbursements, while giving administrators a powerful mobile
              experience that mirrors the functionality of the web dashboard.
            </div>
          </div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'} mt-2 flex items-start gap-2`} >
            <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>-</span>{" "}
            <div>
              Led a full revamp of the mobile application to improve usability,
              enhance performance, and deliver a more intuitive, user-centered
              experience.
            </div>
          </div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}  mt-2 flex items-start gap-2`}>
            <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>-</span>{" "}
            <div>
              Implemented core admin dashboards enabling seamless employee
              onboarding, real-time expense tracking, card issuance and control,
              and comprehensive review of flagged transactions.
            </div>
          </div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}  mt-2 flex items-start gap-2`}>
            <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>-</span>{" "}
            <div>
              Contributed to developing policy management modules that allow
              finance teams to set, enforce, and automate transaction approval
              workflows—drastically reducing manual intervention.
            </div>
          </div>
          <div className={`mt-6 flex items-start flex-wrap gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              Flutter
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              React
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              Next.js
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              Node.js
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              Express
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              NestJS
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              Tailwind CSS
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              PostgreSQL
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 pop-out flex items-start gap-4">
        <Image
          src={"/company/mckinsey_logo.jpeg"}
          alt="McKinsey Logo"
          width={20}
          height={20}
          onClick={() => window.open("https://www.mckinsey.com", "_blank")}
          className="rounded-2xl w-16 h-16 object-cover cursor-pointer"
        />
        <div>
          <h2
            className="font-bold color-white cursor-pointer"
            onClick={() => window.open("https://www.mckinsey.com", "_blank")}
          >
            McKinsey & Company
          </h2>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>Software Engineer Intern</p>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>January 2023 - June 2023</p>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`} mt-2>
            Worked with McKinsey & Company on a large-scale engagement with a
            leading mining client in South-East Asia, where I helped design and
            deliver an end-to-end analytics platform to visualize and optimize
            demurrage and penalty costs across the full production-to-shipment
            value chain — covering more than{" "}
            <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              20 product lines and brands
            </span> 
            .
          </p>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}  mt-2 flex items-start gap-2`}>
            <span>-</span>{" "}
            <div>
              Built comprehensive interactive dashboards covering the entire
              operational cycle — from production to shipment — enabling
              leadership teams to monitor and minimize revenue leakage due to
              delays and inefficiencies.
            </div>    
          </div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}  mt-2 flex items-start gap-2`}>
            <span>-</span>{" "}
            <div>
              Developed reusable dashboard components, allowing new dashboards
              to be delivered within one week, drastically improving engineering
              efficiency and consistency across the platform.
            </div>
          </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}  mt-2 flex items-start gap-2`}>
            <span>-</span>{" "}
            <div>
              Collaborated cross-functionally with teams across five countries,
              ensuring smooth integration of business logic, data visualization,
              and real-time performance tracking.
            </div>
          </div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}  mt-2 flex items-start gap-2`}>
            <span>-</span>{" "}
            <div>
              Contributed to backend and frontend development, focusing on
              modular design, scalability, and performance optimization.
            </div>
          </div>
          <div className={`mt-6 flex items-start flex-wrap gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              React
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              NodeJS
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              MongoDB
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              Tailwind CSS
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              Figma
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 pop-out flex items-start gap-4">
        <Image
          src={"/company/highradius_logo.jpeg"}
          alt="HighRadius Logo"
          width={20}
          height={20}
          onClick={() => window.open("https://www.highradius.com/", "_blank")}
          className="rounded-2xl w-16 h-16 object-cover cursor-pointer"
        />
        <div>
          <h2
            className="font-bold color-white cursor-pointer"
            onClick={() => window.open("https://www.highradius.com/", "_blank")}
          >
            HighRadius Corporation
          </h2>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>Software Engineer Intern</p>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>July 2022 - December 2022</p>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`} mt-2>
            At HighRadius, I collaborated closely with the Accounts Receivable
            (AR) team to design and develop a next-generation automation tool
            that transformed how finance teams manage daily operations. The
            project focused on delivering a seamless, data-driven, and intuitive
            experience that empowered users to make faster, more informed
            decisions.
          </p>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}  mt-2 flex items-start gap-2`}>
            <span>-</span>{" "}
            <div>
              Led the end-to-end design and development of a modern,
              user-friendly dashboard solution for the AR department —
              streamlining complex workflows into a single cohesive interface.
            </div>
          </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}  mt-2 flex items-start gap-2`}>
            <span>-</span>{" "}
            <div>
              Architected modular, scalable components that allowed rapid
              iteration and deployment of new features, significantly reducing
              development turnaround time.
            </div>
          </div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}  mt-2 flex items-start gap-2`}>
            <span>-</span>{" "}
            <div>
              Integrated real-time invoice data across multiple buyers and
              systems, enabling finance teams to instantly access, search, and
              analyze critical billing and payment information.
            </div>
          </div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}  mt-2 flex items-start gap-2`}>
            <span>-</span>{" "}
            <div>
              Collaborated with finance stakeholders to map operational pain
              points and translate them into actionable, automated solutions,
              reducing manual effort and human error.
            </div>
          </div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}  mt-2 flex items-start gap-2`}>
            <span>-</span>{" "}
            <div>
              Focused on user experience (UX) optimization, ensuring the
              interface remained intuitive even while handling large datasets
              and multiple data sources.
            </div>
          </div>
          <div className={`mt-6 flex items-start flex-wrap gap-2`}>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              React
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'} px-2 py-1 rounded-lg`}>
              Spring Boot (Java)
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'}  px-2 py-1 rounded-lg`}>
                MySQL
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'}  px-2 py-1 rounded-lg`}>
              Material UI
            </div>
            <div className={`text-xs ${theme === 'dark' ? 'bg-neutral-700' : 'bg-gray-200'}  px-2 py-1 rounded-lg`}>
              Figma
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
