import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tellus Cooperative | Ideaton sobre Stellar en LATAM",
  description: "Desarrolla soluciones innovadoras con Stellar para resolver problemáticas reales en América Latina. Hackathon virtual del 26-29 septiembre para desarrolladores, emprendedores y builders residentes en Chile. Compite por $1,000 USDC en premios.",
  metadataBase: new URL("https://ideaton.telluscoop.org"),
  openGraph: {
    url: "https://ideaton.telluscoop.org",
    type: "website",
    title: "Tellus Cooperative | Ideaton sobre Stellar en LATAM",
    description: "Desarrolla soluciones innovadoras con Stellar para resolver problemáticas reales en América Latina. Hackathon virtual del 26-29 septiembre para desarrolladores, emprendedores y builders residentes en Chile. Compite por $1,000 USDC en premios.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/43540c79-0497-4e53-9f1b-669ee71885f1.png?token=3Ik4kT-U2qnd0i6PKFoMkEzRLB3h7uIsoHVKSk_hYMU&height=630&width=1200&expires=33294557236",
        width: 1200,
        height: 630,
        alt: "Tellus Cooperative | Ideaton sobre Stellar en LATAM"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@telluscoop",
    creator: "@telluscoop",
    title: "Tellus Cooperative | Ideaton sobre Stellar en LATAM",
    description: "Desarrolla soluciones innovadoras con Stellar para resolver problemáticas reales en América Latina. Hackathon virtual del 26-29 septiembre para desarrolladores, emprendedores y builders residentes en Chile. Compite por $1,000 USDC en premios.",
    images: [
      "https://opengraph.b-cdn.net/production/images/43540c79-0497-4e53-9f1b-669ee71885f1.png?token=3Ik4kT-U2qnd0i6PKFoMkEzRLB3h7uIsoHVKSk_hYMU&height=630&width=1200&expires=33294557236"
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
