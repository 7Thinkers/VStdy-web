import type { Metadata, Viewport } from "next";
import { Manrope, Marcellus } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SITE_URL = "https://vstdy.com";
const SITE_DESCRIPTION =
  "VStdy transforms math learning through AI-powered explanations, personalized guidance, and visual understanding. Ask freely, think deeper, and learn at your own pace.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VStdy — The Future of Education",
    template: "%s | VStdy",
  },
  description: SITE_DESCRIPTION,
  applicationName: "VStdy",
  keywords: [
    "math learning",
    "AI tutor",
    "math AI",
    "math app",
    "Panic Squad",
    "visualized learning",
    "Polya problem solving",
    "VStdy",
  ],
  authors: [{ name: "VStdy" }],
  creator: "VStdy",
  publisher: "VStdy",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "VStdy — The Future of Education",
    description:
      "AI-powered math learning with the Panic Squad. Visualized concepts, instant help, and seven specialized AI agents.",
    url: SITE_URL,
    siteName: "VStdy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/figma/hero.png",
        width: 1200,
        height: 630,
        alt: "VStdy — Welcome To The Future Of Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VStdy — The Future of Education",
    description:
      "AI-powered math learning with visualized stories and seven specialized AI agents.",
    images: ["/figma/hero.png"],
    site: "@vstdy",
    creator: "@vstdy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e242c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${marcellus.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-foreground">{children}</body>
    </html>
  );
}
