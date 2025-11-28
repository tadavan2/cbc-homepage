import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cbcberry.com"),
  title: "California Berry Cultivars | Independent Strawberry Breeding",
  description: "Better berries for growers, worldwide. California Berry Cultivars is dedicated to developing high-yield, high-quality strawberry cultivars with superior disease resistance for commercial growers.",
  keywords: "strawberry breeding, California Berry Cultivars, CBC, strawberry cultivars, berry genetics, strawberry farming, fusarium resistant, day-neutral strawberries, short-day strawberries, commercial berry production",
  authors: [{ name: "California Berry Cultivars" }],
  creator: "California Berry Cultivars",
  publisher: "California Berry Cultivars",
  
  // Open Graph / Facebook / LinkedIn
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cbcberry.com",
    siteName: "California Berry Cultivars",
    title: "California Berry Cultivars | Independent Strawberry Breeding",
    description: "Better berries for growers, worldwide. Independent strawberry breeding focused on high-yield, high-quality cultivars with superior disease resistance.",
    images: [
      {
        url: "/images/fullcoin.png",
        width: 1200,
        height: 1200,
        alt: "California Berry Cultivars - Better berries for growers, worldwide",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "California Berry Cultivars | Independent Strawberry Breeding",
    description: "Better berries for growers, worldwide. Independent strawberry breeding focused on high-yield, high-quality cultivars.",
    images: ["/images/fullcoin.png"],
  },
  
  // Icons / Favicon
  icons: {
    icon: [
      { url: "/images/icons/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/images/icons/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icons/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/icons/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/icons/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/icons/favicon.png",
  },
  
  // Robots / Crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark-theme">
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
