import Image from "next/image";
import Link from "next/link";
import { features } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function FeatureCards() {
  return (
    <section
      id="divisions"
      className="relative w-full scroll-mt-32 bg-[#0A0E18]"
    >
      {/* Subtle top border divider */}
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/5 to-transparent" />
      <div className="grid h-auto w-full grid-cols-1 md:h-[600px] md:grid-cols-3">
        {features.map((feature, index) => {
          const CardContent = (
            <>
              {/* Background Image */}
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              {/* Overlay - Gradient only covers bottom portion */}
              <div
                className={`absolute right-0 bottom-0 left-0 h-2/3 bg-linear-to-t ${feature.gradient} transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="absolute inset-0 bg-black/5 transition-opacity duration-500 group-hover:bg-black/0" />

              {/* Visit Indicator - appears on hover */}
              <div className="absolute top-6 right-6 flex translate-x-4 items-center gap-2 text-white opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                <span className="text-sm font-medium">Visit</span>
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                {feature.external && (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <h2 className="mb-2 -translate-y-2 transform text-3xl font-bold transition-transform duration-500 md:translate-y-0 md:text-4xl md:group-hover:-translate-y-2">
                  {feature.title}
                </h2>
                <p className="max-w-xs translate-y-0 text-sm leading-relaxed font-medium opacity-100 transition-all duration-500 md:translate-y-4 md:text-base md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  {feature.description}
                </p>

                {/* Mobile-only CTA */}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/80 md:hidden">
                  <span>Explore</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </>
          );

          return (
            <Link
              key={index}
              href={feature.href}
              target={feature.external ? "_blank" : undefined}
              rel={feature.external ? "noopener noreferrer" : undefined}
              className="group animate-fade-in-up relative h-[400px] w-full cursor-pointer overflow-hidden opacity-0 ring-2 ring-transparent transition-all duration-300 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none md:h-full"
              style={{
                animationDelay: `${600 + index * 200}ms`,
                animationFillMode: "forwards",
              }}
              aria-label={`Visit ${feature.title} - ${feature.description}`}
            >
              {CardContent}
            </Link>
          );
        })}
      </div>
      {/* Subtle bottom border divider */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
