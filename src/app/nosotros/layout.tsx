import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes somos | Reverse",
  description:
    "Reverse nace desde la experiencia y red del ecosistema Xinergy y Dux. Liberamos capital atrapado en inventario y activos subutilizados.",
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
