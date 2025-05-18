import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lembrago",
  description:
    "Gerenciador de senhas criptografado com criptografia de ponta a ponta e proteção total da sua privacidade.",
  metadataBase: new URL("https://lembrago.sanisamojrepository.com/"),
  openGraph: {
    title: "Lembrago",
    description:
      "Gerenciador de senhas com criptografia de ponta a ponta. Proteja sua privacidade com segurança de verdade.",
    url: "https://lembrago.sanisamojrepository.com/",
    siteName: "Lembrago",
    images: [
      {
        url: "https://lembrago.sanisamojrepository.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Lembrago - Segurança total para suas senhas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lembrago",
    description:
      "Gerenciador de senhas criptografado com criptografia de ponta a ponta.",
    images: ["https://lembrago.sanisamojrepository.com/favicon.ico"],
    creator: "@seu_twitter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
