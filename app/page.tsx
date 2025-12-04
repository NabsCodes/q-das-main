import Hero from "@/components/hero";
import FeatureCards from "@/components/feature-cards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <FeatureCards />
    </main>
  );
}
