import Image from "next/image";
import ScrollToBottom from "@/components/scroll-to-bottom";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>

      {/* Additional dark overlay for text readability if needed, but design looks vibrant */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />

      {/* Content */}
      <div className="max-w-8xl relative z-10 mx-auto flex h-full flex-col justify-between px-4 pt-12 pb-12 sm:px-6 md:pt-16 md:pb-16">
        <div className="flex flex-col pt-32">
          {/* Main Text */}
          <main className="max-w-6xl">
            <p
              className="animate-fade-in mb-6 text-sm font-medium tracking-widest text-white/90 opacity-0 [animation-delay:200ms]"
              style={{ animationFillMode: "forwards" }}
            >
              /QDAS Global Group
            </p>
            <h1
              className="animate-fade-in-up font-sans text-4xl leading-[1.1] font-semibold text-white opacity-0 [animation-delay:400ms] md:text-7xl lg:text-8xl"
              style={{ animationFillMode: "forwards" }}
            >
              Building Africa's Digital, Energy & Infrastructure{" "}
              <span className="bg-linear-to-r from-blue-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
                Future
              </span>
              .
            </h1>
          </main>

          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-end">
            <ScrollToBottom className="h-[140px] w-[140px] md:h-44 md:w-44" />
          </div>
        </div>
      </div>
    </div>
  );
}
