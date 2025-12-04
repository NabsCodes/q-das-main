"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";

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
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "border-b border-gray-200/50 bg-white/50 py-6 shadow-sm backdrop-blur-md"
          : "border-transparent py-6",
      )}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="group/logo relative h-10 w-32 overflow-hidden md:h-12 md:w-40">
            <Link href="/">
              <Image
                src={cn(!isScrolled ? "/Logo-dark.webp" : "/Logo.png")}
                alt="Q-DAS Global logo"
                fill
                sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                className="object-contain transition-opacity duration-200 group-hover/logo:opacity-90"
                priority
                quality={100}
              />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-8">
          {/* Mobile: Show Contact Link directly */}
          <a
            href={`mailto:${COMPANY.email}`}
            className={cn(
              "flex items-center gap-2 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-80 md:hidden",
              !isScrolled ? "text-white" : "text-gray-900",
            )}
          >
            Contact Us
            <span className="text-lg">↗</span>
          </a>

          {/* Tablet/Desktop: Show Contact Link + Menu Button */}
          <a
            href={`mailto:${COMPANY.email}`}
            className={cn(
              "hidden items-center gap-2 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-80 md:flex",
              !isScrolled ? "text-white" : "text-gray-900",
            )}
          >
            Contact Us
            <span className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
