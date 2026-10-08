import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const title = "Loom IT — Estudio digital";
const description =
  "Loom IT es un estudio digital. Diseñamos y desarrollamos sitios web, apps y automatizaciones a medida, desde cero.";

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
    <html lang="es" className={poppins.variable}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
