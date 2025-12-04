import Image from "next/image";

const features = [
  {
    title: "Technology",
    description: "Digital transformation, cybersecurity, enterprise solutions.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop", // Server room
    gradient: "from-blue-600/80 to-blue-900/80",
  },
  {
    title: "Energy",
    description: "Downstream operations, renewables, industrial power systems.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop", // Wind energy
    gradient: "from-yellow-500/80 to-orange-600/80",
  },
  {
    title: "Infrastructure",
    description: "Construction, engineering, and real estate development.",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2000&auto=format&fit=crop", // Bridge
    gradient: "from-green-600/80 to-emerald-900/80",
  },
];

export default function FeatureCards() {
  return (
    <div className="grid h-auto w-full grid-cols-1 md:h-[600px] md:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group relative h-[400px] w-full overflow-hidden md:h-full"
        >
          {/* Background Image */}
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-80`}
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">
              {feature.title}
            </h2>
            <p className="max-w-xs text-sm leading-relaxed font-medium opacity-90 md:text-base">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
