"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initial: FormState = { name: "", email: "", company: "", message: "" };

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const inputClass = "w-full rounded-reverse border border-reverse-border px-4 py-2.5 text-reverse-black bg-white focus:ring-2 focus:ring-reverse-blue/20 focus:border-reverse-blue placeholder-reverse-muted";

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = useCallback((field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const nextErrors: Partial<Record<keyof FormState, string>> = {};
      if (!form.name.trim()) nextErrors.name = "El nombre es obligatorio.";
      if (!form.email.trim()) nextErrors.email = "El email es obligatorio.";
      else if (!validateEmail(form.email)) nextErrors.email = "Email no válido.";
      if (!form.message.trim()) nextErrors.message = "El mensaje es obligatorio.";
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) return;
      console.log("Contact form submitted:", form);
      setSubmitted(true);
      setForm(initial);
    },
    [form]
  );

  const mailto = `mailto:contacto@reverse.cl?subject=Contacto Reverse&body=${encodeURIComponent(
    `Nombre: ${form.name}\nEmpresa: ${form.company}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
  )}`;

  return (
    <div className="py-12 lg:py-20 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-heading font-bold text-reverse-black">
          Contacto
        </h1>
        <p className="mt-3 text-reverse-secondary text-[1.0625rem]">
          Agenda una reunión o escríbenos. Respondemos en 24h.
        </p>

        <div className="mt-10 rounded-reverse-lg border border-reverse-border bg-reverse-soft-bg/50 p-6">
          <h2 className="font-semibold text-reverse-black">Agendar reunión</h2>
          <p className="mt-2 text-sm text-reverse-muted">
            Coordina una llamada con nuestro equipo para revisar tu inventario o activos.
          </p>
          <div className="mt-4">
            <Button href="https://calendly.com" external variant="primary" className="bg-reverse-lime text-reverse-black hover:opacity-90">
              Agendar reunión
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold text-reverse-black">Escribir por correo</h2>
          <p className="mt-2 text-sm text-reverse-muted">
            <a href="mailto:contacto@reverse.cl" className="text-reverse-blue hover:text-reverse-lime font-medium">
              contacto@reverse.cl
            </a>
            {" · Tel. "}
            <a href="tel:+56225550109" className="text-reverse-blue hover:text-reverse-lime font-medium">
              (2) 2555-0109
            </a>
            {" · Santiago, Chile"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <h2 className="text-lg font-semibold text-reverse-black">Formulario de contacto</h2>
          {submitted && (
            <p className="text-reverse-lime font-medium text-reverse-black">
              Mensaje enviado correctamente. (En este entorno es simulación; usa mailto para enviar.)
            </p>
          )}
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-reverse-black mb-1.5">
              Nombre *
            </label>
            <input
              id="contact-name"
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              autoComplete="name"
              className={inputClass}
              placeholder="Tu nombre"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-reverse-black mb-1.5">
              Email *
            </label>
            <input
              id="contact-email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              autoComplete="email"
              className={inputClass}
              placeholder="tu@empresa.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="contact-company" className="block text-sm font-medium text-reverse-black mb-1.5">
              Empresa
            </label>
            <input
              id="contact-company"
              type="text"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              autoComplete="organization"
              className={inputClass}
              placeholder="Nombre de la empresa"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-reverse-black mb-1.5">
              Mensaje *
            </label>
            <textarea
              id="contact-message"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={4}
              className={`${inputClass} resize-y`}
              placeholder="Cuéntanos sobre tu inventario o activos..."
            />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button type="submit" variant="primary" className="bg-reverse-lime text-reverse-black hover:opacity-90">
              Enviar mensaje
            </Button>
            <a
              href={mailto}
              className="inline-flex items-center justify-center rounded-reverse border-2 border-reverse-blue text-reverse-blue px-5 py-2.5 text-sm font-semibold hover:bg-reverse-blue hover:text-gray-200 transition-colors"
            >
              Abrir en correo (mailto)
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
