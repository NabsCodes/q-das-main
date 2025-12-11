"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-out",
        isScrolled
          ? "bg-white/90 py-4 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <Link
            href="/"
            className="relative block h-10 w-32 transition-all duration-500 ease-out md:h-12 md:w-40"
          >
            <Image
              src={cn(!isScrolled ? "/Logo-dark.webp" : "/Logo.png")}
              alt="Q-DAS Global logo"
              fill
              sizes="(max-width: 768px) 112px, 128px"
              className="object-contain transition-opacity duration-300 hover:opacity-80"
              priority
              quality={100}
            />
          </Link>
        </div>

        <nav className="flex items-center">
          <Link
            href={`mailto:${COMPANY.email}`}
            className={cn(
              "group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300",
              !isScrolled
                ? "border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-gray-900"
                : "border-gray-200 bg-gray-50 text-gray-900 hover:border-blue-400/50 hover:bg-white",
            )}
          >
            <span className="relative z-10">Contact Us</span>
            <ArrowUpRight
              className={cn(
                "relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
              )}
            />
            {isScrolled && (
              <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-500/10 via-orange-500/10 to-emerald-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            )}
          </Link>
        </nav>
      </div>

      {/* Scroll Progress Indicator */}
      <div
        className={cn(
          "absolute bottom-0 left-0 h-[2px] w-full bg-linear-to-r from-blue-500 via-orange-500 to-emerald-500 opacity-0 transition-opacity duration-500",
          isScrolled && "opacity-100",
        )}
      />
    </header>
  );
}
