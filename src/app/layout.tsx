import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SRBBRS | 크로와상 전문 디저트 베이커리",
  description:
    "매일 아침, 버터의 결을 굽다. 프랑스 AOP 버터로 만든 정통 크로와상 전문 베이커리 카페.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${playfair.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
