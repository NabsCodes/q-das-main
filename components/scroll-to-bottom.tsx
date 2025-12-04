"use client";

import { HiArrowDown } from "react-icons/hi2";
import Image from "next/image";
import { useCallback } from "react";

export default function ScrollToBottom() {
  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <button
      onClick={scrollToBottom}
      className="group relative h-40 w-40 shrink-0 transition-transform md:h-44 md:w-44"
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
              "linear-gradient(135deg, rgba(119, 196, 28, 0.5) 0%, rgba(207, 79, 145, 0.5) 29%, rgba(0, 106, 206, 0.5) 46%, rgba(246, 171, 42, 0.5) 69%)",
            mixBlendMode: "color",
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
        </defs>
        <text className="fill-gray-900 text-sm font-bold tracking-[0.25em] uppercase md:text-base">
          <textPath href="#circlePath">
            SCROLL DOWN TO SEE MORE * SCROLL DOWN TO SEE MORE
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <HiArrowDown className="h-10 w-10 text-gray-900" />
      </div>
    </button>
  );
}
