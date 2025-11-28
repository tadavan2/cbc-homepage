import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "California Berry Cultivars | Independent Strawberry Breeding",
  description: "Better berries for growers, worldwide. Independent strawberry breeding focused on high-yield, high-quality cultivars with superior disease resistance.",
  icons: {
    icon: '/images/icons/favicon.png',
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
