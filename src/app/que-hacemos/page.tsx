import { pillars } from "@/data/marketplaces";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PillarsBlock } from "@/components/que-hacemos/PillarsBlock";

export const metadata = {
  title: "Qué hacemos | Reverse",
  description: "Pilares de Reverse: valorización, marketplace B2B, subastas y red de activos. Proceso end-to-end con trazabilidad.",
};

export default function QueHacemosPage() {
  return (
    <div className="bg-white">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-reverse-muted uppercase tracking-[0.15em]">
            Qué hacemos
          </p>
          <h1 className="mt-2 text-heading font-bold text-reverse-black">
            Cinco pilares y proceso end-to-end
          </h1>
          <p className="mt-6 text-reverse-secondary text-[1.0625rem] leading-relaxed max-w-3xl">
            Transformación y valorización estratégica de activos, Reverse Marketplace (B2B con IA),
            subastas y ventas (martillero) y red global de compradores.
          </p>
        </div>
      </section>

      <PillarsBlock />

      <ProcessSection />
    </div>
  );
}
