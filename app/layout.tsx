import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const title = "Loom — Estudio de desarrollo de software";
const description =
  "Loom es una startup desarrolladora de software dedicada a crear las mejores experiencias digitales para startups y empresas que quieren moverse rápido.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: [
      { url: "/favicon.ico", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-light.ico", media: "(prefers-color-scheme: light)" },
    ],
    apple: [
      { url: "/loom-doubleo-180.png", media: "(prefers-color-scheme: dark)" },
      { url: "/loom-doubleo-light-180.png", media: "(prefers-color-scheme: light)" },
    ],
  },
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
