import type { Metadata } from "next";
import { headers } from "next/headers";
import { Archivo, DM_Sans } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Workshop Projeto Você S.A. com Roger",
    description:
      "Três encontros ao vivo para entender a estrutura do mercado cripto com segurança operacional, clareza e método.",
    openGraph: {
      title: "Workshop Projeto Você S.A. com Roger",
      description:
        "Estrutura primeiro. Operação depois. Um workshop ao vivo para começar no mercado cripto com clareza.",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "Workshop Projeto Você S.A. com Roger",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Workshop Projeto Você S.A. com Roger",
      description:
        "Aprenda a estrutura do mercado cripto antes de pensar em operação.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${archivo.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
