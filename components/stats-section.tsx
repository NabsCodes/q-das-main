"use client";

import { motion } from "framer-motion";
import { FiActivity, FiLayers, FiCpu, FiGlobe } from "react-icons/fi";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function StatsSection() {
  const metrics = [
    {
      id: "01",
      label: "Operational Timeline",
      value: "15+",
      unit: "Years",
      icon: FiActivity,
      detail: "Consistent Growth",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      id: "02",
      label: "Project Velocity",
      value: "50+",
      unit: "Completed",
      icon: FiCpu,
      detail: "Across Africa",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
    {
      id: "03",
      label: "Core Verticals",
      value: "03",
      unit: "Divisions",
      icon: FiLayers,
      detail: "Tech • Energy • Infra",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      id: "04",
      label: "Regional Focus",
      value: "100%",
      unit: "Committed",
      icon: FiGlobe,
      detail: "Pan-African",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
  ];

  return (
    <section className="relative w-full border-y border-white/5 bg-[#0B0F19] py-16">
      {/* Technical Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      {/* Background Texture - Abstract Structure */}
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#0B0F19] via-[#0B0F19]/95 to-[#0B0F19]" />

      {/* Subtle Multicolor Glows */}
      <div className="absolute top-0 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute top-0 right-1/4 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="max-w-8xl relative z-10 mx-auto px-4 sm:px-6">
        <div className="mb-16 flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-8 text-center md:flex-row md:items-end md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-linear-to-r from-blue-500 via-orange-500 to-emerald-500"></span>
              </span>
              BUILDING AFRICA'S FUTURE
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white md:text-5xl">
              The Q-DAS <span className="text-blue-400">Standard</span>.
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { label: "PRECISION ENGINEERING", color: "text-blue-400" },
              { label: "SCALABLE SOLUTIONS", color: "text-orange-400" },
              { label: "SUSTAINABLE IMPACT", color: "text-emerald-400" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm font-medium"
              >
                <div className="flex h-1.5 w-1.5 items-center justify-center">
                  <span
                    className={`h-full w-full rounded-full ${item.color.replace("text-", "bg-")}`}
                  />
                </div>
                <span className={`font-mono tracking-wide ${item.color}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/10 hover:bg-white/10"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
                movementDuration={1.5}
                className="rounded-lg"
                customGradient={`radial-gradient(circle, #3b82f6 10%, #3b82f600 20%),
                radial-gradient(circle at 40% 40%, #fb923c 5%, #fb923c00 15%),
                radial-gradient(circle at 60% 60%, #10b981 10%, #10b98100 20%), 
                radial-gradient(circle at 40% 60%, #3b82f6 10%, #3b82f600 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #3b82f6 0%,
                  #fb923c calc(25% / 5),
                  #10b981 calc(50% / 5), 
                  #3b82f6 calc(75% / 5),
                  #3b82f6 calc(100% / 5)
                )`}
              />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className={`rounded-lg p-2 ${metric.bg}`}>
                    <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <span className="font-mono text-xs text-slate-600">
                    {metric.id}
                  </span>
                </div>

                <div className="mb-2 flex items-baseline gap-1">
                  <span className="font-sans text-4xl font-bold text-white group-hover:text-blue-50">
                    {metric.value}
                  </span>
                  <span
                    className={`font-mono text-xs ${
                      metric.color || "text-blue-400"
                    }`}
                  >
                    {metric.unit}
                  </span>
                </div>

                <h3 className="mb-1 text-sm font-medium text-slate-300">
                  {metric.label}
                </h3>
                <p className="text-xs text-slate-500">{metric.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
