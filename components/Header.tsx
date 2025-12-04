import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-12">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-40 overflow-hidden">
          <Image
            src="/Logo.png"
            alt="Q-DAS Global Logo"
            fill
            className="object-contain object-left"
          />
        </div>
        <span className="text-xl font-bold tracking-wide text-white drop-shadow-md">
          Q-DAS<span className="text-xs font-normal opacity-80">Global</span>
        </span>
      </div>

      <div className="flex items-center gap-8">
        <Link
          href="/contact"
          className="hidden items-center gap-2 text-sm font-medium tracking-wider text-white uppercase transition-opacity hover:opacity-80 md:flex"
        >
          Contact Us
          <span className="text-lg">↗</span>
        </Link>
        <button className="text-white transition-opacity hover:opacity-80">
          <Menu className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
}
