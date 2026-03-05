"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { teamMembers, ecosystemEntities } from "@/data/marketplaces";

export default function NosotrosPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Equipo */}
      <section className="py-10 sm:py-14 lg:py-20 bg-reverse-soft-bg">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-reverse-black">
            Nuestro equipo
          </h2>
          <p className="mt-3 text-base sm:text-lg text-reverse-muted max-w-2xl leading-relaxed">
            Profesionales con experiencia en abastecimiento, supply chain, compliance y ejecución comercial.
          </p>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member) => {
              const isExpanded = expandedId === member.id;
              return (
                <div
                  key={member.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setExpandedId(isExpanded ? null : member.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setExpandedId(isExpanded ? null : member.id);
                    }
                  }}
                  className="rounded-reverse-lg border border-reverse-border bg-white p-4 sm:p-6 flex flex-col items-center text-center overflow-hidden h-full hover:shadow-reverse-md transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-reverse-lime/50 focus:ring-offset-2"
                >
                  {member.photo ? (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-reverse-border shrink-0 bg-reverse-soft-bg">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-reverse-blue/10 border-2 border-reverse-blue/20 flex items-center justify-center text-reverse-blue text-xl font-bold shrink-0">
                      {(member as { initials?: string }).initials ?? ""}
                    </div>
                  )}
                  <h3 className="mt-3 sm:mt-4 font-semibold text-reverse-black text-base sm:text-lg w-full shrink-0">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base font-semibold text-reverse-lime w-full shrink-0">
                    {member.role}
                  </p>
                  <div className="mt-3 w-full flex-1 min-h-0 overflow-hidden flex flex-col">
                    <p
                      className={`text-sm sm:text-base text-reverse-secondary leading-relaxed w-full text-left break-words overflow-y-auto ${isExpanded ? "" : "line-clamp-4"}`}
                    >
                      {member.bio}
                    </p>
                  </div>
                  <div className="mt-auto w-full shrink-0 pt-3 flex flex-col items-center gap-1">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-medium text-reverse-blue hover:text-reverse-lime hover:underline text-center"
                      >
                        {member.email}
                      </a>
                    )}
                    {!isExpanded ? (
                      <span className="text-xs font-medium text-reverse-muted text-center">
                        Clic para ver más
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-reverse-muted text-center">
                        Clic para cerrar
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] font-bold text-reverse-black leading-tight">
            Misión y por qué confiar en nosotros
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-reverse-secondary leading-relaxed max-w-3xl">
            <span className="text-reverse-lime font-semibold">Reverse</span> nace desde la experiencia y red construida por el Ecosistema de{" "}
            <span className="text-reverse-blue font-semibold">Xinergy y Dux</span>, porque creemos que el capital no debería quedar atrapado en inventario y activos subutilizados.
          </p>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-reverse-secondary leading-relaxed max-w-3xl">
            Queremos que las empresas recuperen liquidez y foco operacional sin sacrificar continuidad,
            y que esos activos vuelvan a generar valor en lugar de quedar olvidados o deteriorarse.
          </p>
          <div className="mt-8 sm:mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-reverse bg-reverse-lime px-6 py-3 text-base font-semibold text-reverse-black hover:opacity-90 transition-opacity min-h-[44px]"
            >
              Agendar reunión
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosistema + Qué nos diferencia + El resultado */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-reverse-black">
            El ecosistema
          </h2>
          <p className="mt-3 text-base sm:text-lg text-reverse-muted max-w-2xl leading-relaxed">
            Reverse se integra con partners especializados para ofrecer una solución integral.
          </p>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {ecosystemEntities.map((entity) => (
              <div
                key={entity.name}
                className={`rounded-reverse-lg border-2 p-4 sm:p-5 flex flex-col items-center justify-center min-h-[100px] sm:min-h-[120px] bg-white ${
                  entity.name === "Reverse"
                    ? "border-reverse-lime"
                    : "border-reverse-border"
                }`}
              >
                <div className="relative w-full h-9 sm:h-10 flex items-center justify-center">
                  <Image
                    src={entity.logo}
                    alt={entity.name}
                    width={140}
                    height={48}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-reverse-muted text-center">
                  {entity.tagline}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-reverse-black flex items-center gap-2">
                <span className="text-reverse-blue" aria-hidden>→</span>
                Qué nos diferencia
              </h3>
              <ul className="mt-4 space-y-3 text-reverse-secondary text-base sm:text-lg leading-relaxed">
                <li>
                  <strong className="text-reverse-black">Tecnología + IA:</strong> Analizamos la data, segmentamos y definimos la mejor salida por ítem (precio, canal, timing).
                </li>
                <li>
                  <strong className="text-reverse-black">Ejecución end-to-end:</strong> Proceso completo desde caracterización hasta venta, con trazabilidad.
                </li>
                <li>
                  <strong className="text-reverse-black">Alcance comercial:</strong> Marketplace + subastas + red de compradores (Chile e internacional).
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-reverse-black flex items-center gap-2">
                <span className="text-reverse-blue" aria-hidden>→</span>
                El resultado
              </h3>
              <p className="mt-2 text-reverse-lime font-semibold text-base sm:text-lg">
                Una solución integral
              </p>
              <ul className="mt-4 space-y-2 text-reverse-secondary text-base sm:text-lg leading-relaxed list-disc list-inside">
                <li>Transformación y valorización estratégica de activos (evaluación técnica/comercial y estrategia de recuperación).</li>
                <li>Reverse Marketplace (B2B con IA): matching óptimo, valorización predictiva y trazabilidad documental.</li>
                <li>Subastas y ventas (martillero): procesos estructurados, transparentes y auditables.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trazabilidad */}
      <section className="py-10 sm:py-14 lg:py-20 bg-reverse-soft-bg">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-reverse-black">
            Trazabilidad, proceso y cumplimiento
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-reverse-secondary leading-relaxed max-w-3xl">
            Procesos auditables, documentación clara y estándares que permiten a nuestros clientes
            y socios operar con confianza. Trabajamos con rigor en la valorización y en la cadena
            de custodia de los activos. Subastas profesionales, visibilidad por lote y estatus.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 lg:py-20 bg-reverse-blue text-white" style={{ backgroundColor: "#4495F0" }}>
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Ecosistema de partners
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
            Integramos capacidades de consultoría, tecnología y ejecución comercial a través de
            un ecosistema de partners especializados (Reverse, Dux, Xinergy, Opticks.AI).
          </p>
          <div className="mt-8 sm:mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-reverse bg-reverse-lime px-6 py-3 text-base font-semibold text-reverse-black hover:opacity-90 transition-opacity min-h-[44px]"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
