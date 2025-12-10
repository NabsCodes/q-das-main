"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B0F19] py-16 sm:py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Typography & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="relative mb-6 inline-block pb-2">
              <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">
                Our Narrative
              </span>
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-blue-500 via-orange-500 to-emerald-500" />
            </div>

            <h2 className="mb-6 font-sans text-3xl leading-[1.1] font-bold text-white sm:mb-8 sm:text-4xl md:text-6xl lg:text-7xl">
              Defining the <br />
              <span className="bg-linear-to-r from-blue-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent italic">
                shape
              </span>{" "}
              of tomorrow.
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-slate-400 sm:space-y-6 sm:text-lg">
              <p>
                We are a collective of forward-thinkers, engineers, and
                strategists united by a single ambition: to build the
                infrastructure that defines the future.
              </p>
              <p>
                QDAS Global Group doesn't just adapt to change; we drive it.
                From the energy grids that power nations to the digital networks
                that connect them, our footprint is etched in progress.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 sm:mt-12 sm:gap-8">
              <div className="group cursor-pointer">
                <p className="text-2xl font-bold text-white transition-colors group-hover:text-blue-400 sm:text-3xl">
                  Global
                </p>
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  Perspective
                </p>
              </div>
              <div className="h-12 w-0.5 bg-linear-to-b from-blue-500 to-orange-500 sm:h-16"></div>
              <div className="group cursor-pointer">
                <p className="text-2xl font-bold text-white transition-colors group-hover:text-orange-400 sm:text-3xl">
                  Local
                </p>
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  Mastery
                </p>
              </div>
              <div className="h-12 w-0.5 bg-linear-to-b from-orange-500 to-emerald-500 sm:h-16"></div>
              <div className="group cursor-pointer">
                <p className="text-2xl font-bold text-white transition-colors group-hover:text-emerald-400 sm:text-3xl">
                  Future
                </p>
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  Ready
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[400px] w-full sm:h-[500px] md:h-[600px]"
          >
            {/* Main Image */}
            <div className="absolute top-0 right-0 h-[350px] w-[85%] overflow-hidden rounded-tr-4xl rounded-bl-4xl sm:h-[400px] sm:w-[90%] sm:rounded-tr-[3rem] sm:rounded-bl-[3rem] md:h-[500px] md:rounded-tr-[4rem] md:rounded-bl-[4rem]">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Architecture"
                fill
                className="object-cover"
              />
            </div>

            {/* Secondary Image (Overlapping) */}
            <div className="absolute bottom-0 left-0 h-[200px] w-[55%] overflow-hidden rounded-tl-4xl rounded-br-4xl border-4 border-t-0 border-r-0 border-b-4 border-l-0 border-slate-200 sm:h-[250px] sm:w-[60%] sm:rounded-tl-[2.5rem] sm:rounded-br-[2.5rem] sm:border-6 md:h-[300px] md:rounded-tl-[3rem] md:rounded-br-[3rem] md:border-8">
              <Image
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2070&auto=format&fit=crop"
                alt="Abstract Detail"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Graphic */}
            <div className="absolute top-1/2 left-1/4 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white sm:h-48 sm:w-48 md:h-64 md:w-64" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
