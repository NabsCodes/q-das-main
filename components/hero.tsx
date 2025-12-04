import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Header from "./Header";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Construction Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay - Matching the design's vibrant overlay */}
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          background:
            "linear-gradient(108deg, rgba(119, 196, 28, 0.9) 0%, rgba(207, 79, 145, 0.9) 29%, rgba(0, 106, 206, 0.9) 46%, rgba(246, 171, 42, 0.9) 69%)",
        }}
      />

      {/* Additional dark overlay for text readability if needed, but design looks vibrant */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 pt-24 pb-12 md:px-12 md:pb-16">
        <Header />

        <div className="flex flex-col justify-between md:flex-row md:items-end">
          {/* Main Text */}
          <main className="max-w-4xl">
            <p className="mb-6 text-sm font-medium tracking-widest text-white/90 uppercase">
              /QDAS Global Group
            </p>
            <h1 className="font-sans text-5xl leading-[1.1] font-bold text-white md:text-7xl lg:text-8xl">
              Building Africa’s <br />
              Digital, Energy & <br />
              Infrastructure Future.
            </h1>
          </main>

          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-end md:mt-0">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-transform hover:scale-105">
              <div className="animate-spin-slow absolute inset-0">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text
                    fontSize="11.5"
                    fill="white"
                    fontWeight="bold"
                    letterSpacing="1.2"
                  >
                    <textPath xlinkHref="#circle">
                      • SCROLL DOWN TO SEE MORE • SCROLL DOWN TO SEE MORE
                    </textPath>
                  </text>
                </svg>
              </div>
              <ArrowDown className="h-10 w-10 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
