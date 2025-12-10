"use client";

import { HiArrowDown } from "react-icons/hi2";
import Image from "next/image";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

type ScrollToBottomProps = {
  className?: string;
};

export default function ScrollToBottom({ className }: ScrollToBottomProps) {
  const scrollToDivisions = useCallback(() => {
    const divisionsSection = document.getElementById("divisions");
    if (divisionsSection) {
      divisionsSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <button
      onClick={scrollToDivisions}
      className={cn(
        "group relative shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105",
        className,
      )}
      aria-label="Scroll to bottom"
      type="button"
    >
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <Image
          src="/circle-hero.webp"
          alt="Circle background"
          fill
          className="object-cover"
          quality={85}
          sizes="(max-width: 768px) 160px, 176px"
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(to right, rgba(59, 130, 246, 0.3) 0%, rgba(251, 146, 60, 0.3) 50%, rgba(16, 185, 129, 0.3) 100%)",
            mixBlendMode: "color-dodge",
          }}
        />
      </div>

      <svg
        className="animate-spin-slow absolute inset-0 h-full w-full"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          />
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <text
          fill="url(#textGradient)"
          className="text-sm font-bold tracking-[0.25em] uppercase md:text-base"
        >
          <textPath href="#circlePath">
            SCROLL DOWN TO SEE MORE * SCROLL DOWN TO SEE MORE
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-16 w-16 rounded-full bg-linear-to-br from-blue-500/20 via-orange-500/20 to-emerald-500/20 blur-md transition-all group-hover:blur-lg" />
          <HiArrowDown className="relative h-14 w-14 text-gray-900 transition-transform group-hover:scale-110" />
        </div>
      </div>
    </button>
  );
}
