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
  metadataBase: new URL("https://srbbrs.com"),
  title: {
    default: "SRBBRS | 크로와상 전문 디저트 베이커리",
    template: "%s | SRBBRS",
  },
  description:
    "매일 아침, 버터의 결을 굽다. 프랑스 AOP 버터로 만든 72겹 정통 크로와상 전문 베이커리 카페. 서울 성동구 서울숲.",
  keywords: [
    "SRBBRS",
    "크로와상",
    "croissant",
    "베이커리",
    "bakery",
    "디저트",
    "카페",
    "서울숲",
    "성동구",
    "아몬드 크로와상",
    "팡 오 쇼콜라",
    "크로플",
  ],
  authors: [{ name: "SRBBRS" }],
  creator: "SRBBRS",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://srbbrs.com",
    siteName: "SRBBRS",
    title: "SRBBRS | 크로와상 전문 디저트 베이커리",
    description:
      "매일 아침, 버터의 결을 굽다. 프랑스 AOP 버터로 만든 72겹 정통 크로와상.",
    images: [
      {
        url: "/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "SRBBRS 크로와상 베이커리",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SRBBRS | 크로와상 전문 디저트 베이커리",
    description:
      "매일 아침, 버터의 결을 굽다. 프랑스 AOP 버터로 만든 72겹 정통 크로와상.",
    images: ["/og/home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://srbbrs.com",
  },
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
