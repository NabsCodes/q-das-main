"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMessageSquare,
  FiCheckCircle,
  FiAward,
} from "react-icons/fi";
import { FaGlobeAfrica } from "react-icons/fa";
import { COMPANY } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Global Connectivity"
          fill
          className="object-cover"
        />
        {/* Gradient Overlay */}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[#0B0F19]/90 mix-blend-multiply" />
        {/* Tricolor Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,var(--tw-gradient-stops))] from-blue-600/40 via-transparent to-transparent opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-600/30 via-transparent to-transparent opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] from-emerald-600/40 via-transparent to-transparent opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0F19] via-[#0B0F19]/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        {/* Floating Accent Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex justify-center md:mb-8"
        >
          <div className="group relative">
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-blue-500/10 via-orange-500/10 to-emerald-500/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />

            {/* Main badge */}
            <div className="relative flex items-center gap-2 rounded-full border border-white/10 bg-[#0B0F19]/40 px-3 py-2 backdrop-blur-md sm:gap-2.5 sm:px-5 sm:py-2.5">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 sm:h-6 sm:w-6">
                <FaGlobeAfrica className="h-3 w-3 text-blue-400 sm:h-3.5 sm:w-3.5" />
              </div>
              <span className="text-xs font-medium text-slate-200 sm:text-sm">
                <span className="hidden sm:inline">
                  Unite Vision, Strategy, and Execution
                </span>
                <span className="sm:hidden">Vision, Strategy, Execution</span>
              </span>
              <div className="h-1 w-1 shrink-0 animate-pulse rounded-full bg-linear-to-r from-blue-400 via-orange-400 to-emerald-400" />
            </div>
          </div>
        </motion.div>
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 font-sans text-3xl leading-[1.1] font-bold tracking-tight text-white sm:text-4xl md:mb-6 md:text-6xl"
        >
          Ready to activate your vision <br className="hidden md:block" />
          with{" "}
          <span className="relative inline-block bg-linear-to-r from-blue-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
            global precision?
            {/* Underline Highlight */}
            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-linear-to-r from-blue-500 via-orange-500 to-emerald-500 md:-bottom-2 md:h-1" />
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:mb-10 sm:text-lg"
        >
          QDAS Global Group helps governments, enterprises, and partners
          understand the future at scale. Launch in a single region or
          coordinate nationwide—every project stays verified and actionable.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 md:mb-16"
        >
          <Link
            href="#divisions"
            className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-white px-6 py-3.5 font-sans text-sm font-bold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 sm:w-auto sm:min-w-[200px] sm:px-8 sm:py-4 sm:text-base"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-50 via-orange-50 to-emerald-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative">Start Your Project</span>
            <FiArrowRight className="relative ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href={`mailto:${COMPANY.email}`}
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 font-sans text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 sm:w-auto sm:min-w-[200px] sm:px-8 sm:py-4 sm:text-base"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-orange-500/10 to-emerald-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <FiMessageSquare className="relative h-4 w-4 text-slate-300 transition-colors group-hover:text-white sm:h-5 sm:w-5" />
            <span className="relative">Contact Support</span>
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-t border-white/10 pt-8 sm:gap-x-12 sm:gap-y-6 sm:pt-12"
        >
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 sm:gap-2 sm:text-sm">
            <FiCheckCircle className="h-4 w-4 shrink-0 text-blue-400 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap">Secure & Verified</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 sm:gap-2 sm:text-sm">
            <FiAward className="h-4 w-4 shrink-0 text-orange-400 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap">
              Trusted by Industry Leaders
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 sm:gap-2 sm:text-sm">
            <FaGlobeAfrica className="h-4 w-4 shrink-0 text-emerald-400 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap">Pan-African Reach</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
