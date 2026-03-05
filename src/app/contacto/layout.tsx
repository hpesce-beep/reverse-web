import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Reverse",
  description: "Reserva una reunión o escribe a Reverse. Valorización y liquidación de inventario industrial.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
