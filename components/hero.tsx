"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import ScrollToBottom from "@/components/scroll-to-bottom";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 h-[110%] w-full" // Extra height for parallax
      >
        <Image
          src="/hero.webp"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />
      </motion.div>
      {/* Additional dark overlay for text readability - Optimized for mobile contrast */}
      <div className="absolute inset-0 z-0 bg-black/20 sm:bg-transparent" />{" "}
      {/* Base dim for mobile */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-black/80 via-black/20 to-black/90 sm:from-black/60 sm:via-transparent sm:to-black/80" />
      <div className="absolute inset-0 z-0 bg-black/10 mix-blend-multiply" />
      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="max-w-8xl relative z-10 mx-auto flex h-full flex-col justify-between px-4 pt-12 pb-12 sm:px-6 md:pt-16 md:pb-16"
      >
        <div className="flex flex-col pt-28 sm:pt-32">
          {/* Main Text */}
          <main className="max-w-6xl">
            <p
              className="animate-fade-in mb-4 text-xs font-medium tracking-widest text-white/90 opacity-0 [animation-delay:200ms] sm:mb-6 sm:text-sm"
              style={{ animationFillMode: "forwards" }}
            >
              /QDAS Global Group
            </p>
            <h1
              className="animate-fade-in-up font-sans text-4xl leading-[1.1] font-semibold text-white opacity-0 drop-shadow-xl [animation-delay:400ms] sm:text-5xl md:text-7xl lg:text-8xl"
              style={{ animationFillMode: "forwards" }}
            >
              Building Africa's Digital, Energy & Infrastructure{" "}
              <span className="bg-linear-to-r from-blue-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
                Future
              </span>
              .
            </h1>
          </main>

          {/* Scroll Indicator - Resized for Mobile */}
          <div className="mt-8 flex justify-end sm:mt-12">
            <ScrollToBottom className="h-24 w-24 sm:h-36 sm:w-36 md:h-44 md:w-44" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
