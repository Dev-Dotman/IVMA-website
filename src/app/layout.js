import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IVMA - Commerce Made Simple",
  description:
    "Track, manage, and optimize your inventory from one powerful, easy-to-use dashboard. Real-time tracking, free website, WhatsApp checkout, and AI-powered insights.",
  keywords: [
    "inventory management",
    "stock tracking",
    "business inventory",
    "inventory software",
    "IVMA",
    "business solutions",
    "online store",
    "real-time inventory",
    "AI inventory insights",
    "small business tools",
    "ecommerce",
    "Shopify"
  ],
  authors: [{ name: "IVMA Team" }],
  creator: "IVMA",
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ivma.ng",
    title: "IVMA - Business Made Simple",
    description:
      "Simplify your E-commerce business management with IVMA. Real-time tracking, AI insights, and more.",
    siteName: "IVMA",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVMA - Selling Made Simple",
    description:
      "Simplify your E-commerce business management with IVMA. Real-time tracking, AI insights, and more.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
