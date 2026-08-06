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
  metadataBase: new URL("https://innosoft-systems.uz"),
  title: "Innosoft Systems — Biznesingiz uchun samarali IT yechimlar",
  description:
    "Biznes jarayonlaringizni optimallashtirish va yangi cho'qqilarga erishish uchun zamonaviy IT yechimlar: veb-saytlar, mobil ilovalar, Telegram botlar va SEO xizmatlari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
