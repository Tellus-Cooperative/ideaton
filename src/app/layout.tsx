import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tellus Cooperative | Ideaton y Bounties sobre Stellar en LATAM",
  description: "Participa en el Ideatón y la maratón de contenido rumbo a Meridian 2025 en Río. Propón ideas, desarrolla prototipos o crea contenido sobre Stellar y gana +$5,000 USD en premios. Abierto a estudiantes, creadores y builders de toda LATAM.",
  metadataBase: new URL("https://telluscoop.org"),
  openGraph: {
    url: "https://telluscoop.org",
    type: "website",
    title: "Tellus Cooperative | Ideaton y Bounties sobre Stellar en LATAM",
    description: "Participa en el Ideatón y la maratón de contenido rumbo a Meridian 2025 en Río. Propón ideas, desarrolla prototipos o crea contenido sobre Stellar y gana +$5,000 USD en premios. Abierto a estudiantes, creadores y builders de toda LATAM.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/4faa5fd0-3574-4edc-9926-e3e3a3c84f94.png?token=viGmZevzpTlF6BkqnP-RH-nprd_ri6YSDmkoB2mm8QE&height=630&width=1200&expires=33289072722",
        width: 1200,
        height: 630,
        alt: "Tellus Cooperative Ideaton y Bounties"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@telluscoop",
    creator: "@telluscoop",
    title: "Tellus Cooperative | Ideaton y Bounties sobre Stellar en LATAM",
    description: "Participa en el Ideatón y la maratón de contenido rumbo a Meridian 2025 en Río. Propón ideas, desarrolla prototipos o crea contenido sobre Stellar y gana +$5,000 USD en premios. Abierto a estudiantes, creadores y builders de toda LATAM.",
    images: [
      "https://opengraph.b-cdn.net/production/images/4faa5fd0-3574-4edc-9926-e3e3a3c84f94.png?token=viGmZevzpTlF6BkqnP-RH-nprd_ri6YSDmkoB2mm8QE&height=630&width=1200&expires=33289072722"
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
