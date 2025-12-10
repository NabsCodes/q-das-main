import Image from "next/image";
import Link from "next/link";
import { features } from "@/lib/data";
import { COMPANY } from "@/lib/constants";

const hoverColorMap: Record<string, string> = {
  Technology: "hover:text-blue-400",
  Energy: "hover:text-orange-400",
  Infrastructure: "hover:text-emerald-400",
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0B0F19] text-white">
      {/* Tricolor Accent Line */}
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-blue-500 via-orange-500 to-emerald-500" />
      {/* Large Q-DAS Watermark Background */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 flex justify-center overflow-hidden">
        <span className="font-sans leading-none font-bold whitespace-nowrap text-white/5 opacity-30 md:translate-y-[-5%] md:text-[25vw]">
          Q-DAS
        </span>
      </div>
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-blue-500/5" />
      <div className="max-w-8xl mx-auto px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-6 h-12 w-40">
              <Image
                src="/Logo-footer.png"
                alt="QDAS Global Group"
                width={160}
                height={48}
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="mb-6 max-w-md text-base leading-relaxed text-slate-300">
              Building Africa's <span className="text-blue-400">digital</span>,{" "}
              <span className="text-orange-400">energy</span>, and{" "}
              <span className="text-emerald-400">infrastructure</span> future
              through innovative solutions and transformative projects.
            </p>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold tracking-wider text-white uppercase">
              <span className="bg-linear-to-r from-blue-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
                Our Divisions
              </span>
            </h3>
            <ul className="space-y-3">
              {features.map((feature) => {
                const hoverColor =
                  hoverColorMap[feature.title] || "hover:text-blue-400";

                return (
                  <li key={feature.title}>
                    <Link
                      href={feature.href}
                      target={feature.external ? "_blank" : undefined}
                      rel={feature.external ? "noopener noreferrer" : undefined}
                      className={`text-sm text-slate-400 transition-colors ${hoverColor}`}
                    >
                      {feature.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold tracking-wider text-white uppercase">
              <span className="text-blue-400">Get in Touch</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-12 pt-8">
          <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-300">QDAS Global Group</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
