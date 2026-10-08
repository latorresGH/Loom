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
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
